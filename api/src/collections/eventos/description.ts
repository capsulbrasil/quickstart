import { defineDescription } from 'sonata-api'

export const [Evento, description] = defineDescription({
  $id: 'eventos',
  icon: 'calendar-alt',
  properties: {
    tipo:{
      enum: ["Rodízio", "Promoção"],
      default: "Promoção"
    },
    data:{
      type: 'string',
      format: 'date-time'
    },
    desconto:{
      type: 'number',
      maximum: 100
    },
  },
  presets: [
    'crud'
  ],
  formLayout:{
    fields: {
      desconto: {
        if: {
          operator: 'equal',
          term1: 'tipo',
          term2: 'Promoção'
        },
      
      }
    }
  }
})
