import { defineCollection, useFunctions } from 'sonata-api'
import { Funcionario, description } from './description';

export const funcionario = defineCollection(() => ({
  item: Funcionario,
  description,
  functions: useFunctions<typeof Funcionario>()([
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
