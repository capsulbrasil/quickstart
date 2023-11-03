import { defineDescription } from 'sonata-api'

export const [Employee, description] = defineDescription({
  $id: 'employee',
  icon: 'head-side',
  properties: {
    name: {
        type: 'string',
    },
    role:{
      enum: ["Garçom", "Chef", "Caixista", "Limpeza", "Gerente"],
    },
    shift:{
      enum: ["Manhã-Tarde", "Tarde-Noite"],
    },
    admission_date:{
      type: 'string',
      format: 'date'
    }
  },
  presets: [
    'crud'
  ],
})
