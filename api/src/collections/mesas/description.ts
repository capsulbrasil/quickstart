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
    reservado:{
      type: 'boolean',
    },
    vip:{
      type:'boolean'
    },
    caracteristica:{
      enum: ["Vista Panorâmica", "Vista da Janela", "Mesa do Chef", "Para Eventos Especiais"],
    },
    reservado_por:{
      type: 'string',
      maxLength: 100,
    }
  },
  presets: [
    'crud'
  ],
  immutable: ["reservado_por"],

})
