import { defineDescription } from 'sonata-api'

export const [Evento, description] = defineDescription({
  $id: 'eventos',
  icon: 'calendar-alt',
  properties: {
    tipo:{
      enum: ["Rodízio", "Promoção"],
      default: "Promoção"
    },
    data_de_inicio:{
      type: 'string',
      format: 'date-time'
    },
    data_de_termino:{
      type: 'string',
      format: 'date-time'
    },
    descontos:{
      type: 'array',
      items: {
        type: 'object',
        properties: {
          tamanhos: {
            enum: [
              'Família',
              'Grande',
              'Média',
            ]
          },
          percentage: {
            type: 'number',
            minimum: 0,
            maximum: 100
          }
        }
      }
    },
  },
  presets: [
    'crud'
  ],
  formLayout:{
    fields: {
      descontos: {
        if: {
          operator: 'equal',
          term1: 'tipo',
          term2: 'Promoção'
        },
      },
    }
  }
})
