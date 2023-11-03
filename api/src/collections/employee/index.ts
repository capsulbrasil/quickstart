import { defineCollection, useFunctions } from 'sonata-api'
import { Employee, description } from './description';

export const employee = defineCollection(() => ({
  item: Employee,
  description,
  functions: useFunctions<typeof Employee>()([
    'get',
    'getAll',
    'insert',
    'remove'
  ]),
  accessControl: {
    roles: {
      root: {
        grantEverything: true
      },
      guest: {
        grant: [
          'get',
          'getAll'
        ]
      }
    }
  }
}))
