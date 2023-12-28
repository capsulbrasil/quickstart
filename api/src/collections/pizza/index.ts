import { defineCollection, get, getAll, insert, remove } from 'sonata-api'

export const pizza = defineCollection({
  description: {
    $id: 'pizza',
    icon: 'user',
    properties: {
      price: {
        type: 'number',
      },
      ingredients: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              enum: [
                'calabresa',
                'mussarela',
                'catupiry',
                'frango',
                'champignon',
              ],
            },
            percentage: {
              type: 'number',
              minimum: 0,
              maximum: 100,
            },
          },
        },
      },
      name: {
        type: 'string',
        getter: (value: any) => {
          const suffix = value.ingredients[1]
            ? value.ingredients[1].name
            : 'à moda'

          return `${value.ingredients[0]?.name} ${suffix}`
        },
      },
    },
    presets: [
      'crud',
    ],
    formLayout: {
      fields: {
        name: {
          if: {
            operator: 'exists',
            term1: '_id',
          },
        },
      },
    },
  },
  functions: {
    get,
    getAll,
    insert,
    remove,
  },
  accessControl: {
    roles: {
      root: {
        grantEverything: true,
      },
      guest: {
        grant: [
          'get',
          'getAll',
        ],
      },
    },
  },
})

