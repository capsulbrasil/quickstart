import { defineDescription } from 'sonata-api'

export const [Funcionario, description] = defineDescription({
  $id: 'funcionarios',
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
