import { defineCollection, get, getAll, insert, remove } from 'sonata-api'

export const pizza = defineCollection({
  description: {
    $id: 'pizza',
    icon: 'pizza',
    required: ['name'],
    properties: {
      name: {
        type: 'string'
      },
      price: {
        type: 'number'
      },
      rating: {
        type: 'integer',
        minimum: 1,
        maximum: 5
      }
    },
    presets: ['crud'],
  },
  functions: {
    get,
    getAll,
    insert,
    remove,
  },
})

