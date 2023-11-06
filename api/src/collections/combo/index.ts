import { defineCollection, useFunctions } from 'sonata-api'
import { Combo, description } from './description'

export const combo = defineCollection(() => ({
  item: Combo,
  description,
  functions: useFunctions<typeof Combo>()([
    'get',
    'getAll',
    'insert',
    'remove',
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
