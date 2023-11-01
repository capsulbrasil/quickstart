import { Context, validateSilently, isLeft, unwrapEither } from 'sonata-api'
import { description } from './description'

type Props = {
  _id: string
}

export default async (props_: Props, context: Context<typeof description>) => {
  const props = validateSilently(props_, {
    properties: {
      _id: {
        type: 'string',
        maxLength: 20
      }
    }
  })

  if( !props ) {
    return {
      error: true
    }
  }

  const pizzaEither = await context.collections.pizza.functions.insert({
    what: {
      _id: props._id,
      sold: true
    }
  })

  // narrowing
  if( isLeft(pizzaEither) ) {
    const error = unwrapEither(pizzaEither)
    return {
      error
    }
  }

  const pizza = unwrapEither(pizzaEither)
  pizza.name

}
