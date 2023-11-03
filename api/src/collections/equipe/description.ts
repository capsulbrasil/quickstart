import { defineDescription } from 'sonata-api'

export const [Equipe, description] = defineDescription({
  $id: 'equipe',
  icon: 'head-side',
  properties: {
    nome: {
        type: 'string',
    },
    cargo:{
      enum: ["Garçom", "Chef", "Caixista", "Limpeza", "Gerente"],
    },
    turno:{
      enum: ["Manhã-Tarde", "Tarde-Noite"],
    },
    data_de_admissao:{
      type: 'string',
      format: 'date'
    }
  },
  presets: [
    'crud'
  ],
})
