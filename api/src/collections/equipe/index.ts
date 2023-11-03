import { defineCollection, useFunctions } from 'sonata-api'
import { Equipe, description } from './description';

export const equipe = defineCollection(() => ({
  item: Equipe,
  description,
  functions: useFunctions<typeof Equipe>()([
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
