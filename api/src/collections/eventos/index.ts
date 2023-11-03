import { defineCollection, useFunctions } from 'sonata-api'
import { Evento, description } from './description';

export const eventos = defineCollection(() => ({
  item: Evento,
  description,
  functions: useFunctions<typeof Evento>()([
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
