import { init, makeRouter } from 'sonata-api'
export * as collections from './collections'

const router = makeRouter()

router.GET('/hello-world', (_context) => {
  // o retorno desse callback vai ser a resposta do endpoint
  // o parâmetro context é fortemente tipado, você pode ver
  // as propriedades dele através do autocompletion
  //
  // também não é necessário try/catch, as exceções são capturadas
  // automaticamente num nível superior

  return {
    message: 'Hello, world!'
  }
})

init(null, (context) => {
  return router.install(context)
})
