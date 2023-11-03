import { defineCollection, useFunctions } from 'sonata-api'
import { Event, description } from './description';

export const event = defineCollection(() => ({
  item: Event,
  description,
  functions: useFunctions<typeof Event>()([
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
