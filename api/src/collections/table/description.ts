import { defineDescription } from 'sonata-api'

export const [Table, description] = defineDescription({
  $id: 'table',
  icon: 'table',
  properties: {
    number: {
        type: 'number',
        maximum: 30,
        minimum: 0,
        exclusiveMaximum: 30,
        exclusiveMinimum: 0
    },
    vip:{
      type:'boolean'
    },
    reserved:{
      type:'boolean',
      default: false
    },
    characteristic:{
      enum: ["Vista Panorâmica", "Vista da Janela", "Mesa do Chef", "Para Eventos Especiais"],
    },
    reserved_by:{
      type: 'string',
      maxLength: 100,
      default: 'Não Reservado',
      
    }
  },
  presets: [
    'crud'
  ],
  required: ["number", "characteristic"],
  immutable: ["reserved_by"],
  formLayout:{
    fields: {
      reserved_by: {
        if: {
          operator: 'equal',
          term1: 'reserved',
          term2: true
        },
      
      }
    }
  }
})
