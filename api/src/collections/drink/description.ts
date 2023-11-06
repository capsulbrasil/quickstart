import { defineDescription } from 'sonata-api'

export const [Drink, description] = defineDescription({
  $id: 'drink',
  icon: 'glass',
  indexes: [
    'name'
  ],
  properties: {
    price: {
      type: 'number'
    },
    drinktype: {
      enum: [
        "Beer",
        "Soda",
        "Juice",
        "Water",
        "Wine",
        "Whisky",
        "Champange",
        "Vodka",
        "Tequila",
        "White Lightining",
        "Liquor",
        "Gin",
        "Rum",
        "Sake",
        "Energy Drink",
        "Others"
      ]
    },
    isalcoholic: {
      type: "boolean",
      default: "false"
    },
    name: {
      type: 'string'
    },
    picture: {
      $ref: 'file',
      s$accept: [
        'image/*',
      ]
    },

    
  },
  presets: [
    'crud'
  ],
  formLayout: {
    fields: {
    }
  }
})
