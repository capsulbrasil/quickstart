import { defineCollection, useFunctions } from 'sonata-api'
import { Drink, description } from './description'

export const drink = defineCollection(() => ({
  item: Drink,
  description,
  functions: useFunctions<typeof Drink>()([
    'get',
    'getAll',
    'insert',
    'remove',
    'upload',
    'removeFile'
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
