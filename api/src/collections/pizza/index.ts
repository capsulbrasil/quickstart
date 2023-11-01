import { defineCollection, useFunctions } from 'sonata-api'
import { Pizza, description } from './description'

export const pizza = defineCollection(() => ({
  item: Pizza,
  description,
  functions: useFunctions<typeof Pizza>()([
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
