import { defineDescription } from 'sonata-api'

export const [Table, description] = defineDescription({
  $id: 'mesas',
  icon: 'table',
  properties: {
    numero: {
        type: 'number',
        maximum: 30,
        minimum: 0,
        exclusiveMaximum: 30,
        exclusiveMinimum: 0
    },
    vip:{
      type:'boolean'
    },
    reservado:{
      type:'boolean',
      default: false
    },
    caracteristica:{
      enum: ["Vista Panorâmica", "Vista da Janela", "Mesa do Chef", "Para Eventos Especiais"],
    },
    reservado_por:{
      type: 'string',
      maxLength: 100,
      default: 'Não Reservado',
      
    }
  },
  presets: [
    'crud'
  ],
  immutable: ["reservado_por"],
  formLayout:{
    fields: {
      reservado_por: {
        if: {
          operator: 'equal',
          term1: 'reservado',
          term2: true
        },
      
      }
    }
  }
})
