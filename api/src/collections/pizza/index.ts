import { defineCollection, useFunctions } from 'sonata-api'
import { Pizza, description } from './description'
import sale from './sale'

export const pizza = defineCollection(() => ({
  item: Pizza,
  description,
  functions: {
    sale,
    ...useFunctions<typeof Pizza>()([
      'get',
      'getAll',
      'insert',
      'remove'
    ]),
  },
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
  },
}))

