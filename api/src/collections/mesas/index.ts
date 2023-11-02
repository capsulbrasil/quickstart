import { defineCollection, useFunctions } from 'sonata-api'
import { Table, description } from './description';

export const mesas = defineCollection(() => ({
  item: Table,
  description,
  functions: useFunctions<typeof Table>()([
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
