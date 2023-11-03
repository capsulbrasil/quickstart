import { collections, init, makeRouter } from 'sonata-api'
export * as collections from './collections'

const router = makeRouter();
const daysInMiliseconds = 86400000;

router.GET('/get-unreserved-tables', (context) => {

  const result = context.models.table.find({
    reserved: false
  }).toArray();

  return result;
})

router.GET('/get-pizzas-in-price-range', (context) => {
  const min: string = context.request.query.query.min;
  const max: string = context.request.query.query.max;

  const result = context.models.pizza.find({
    price: {
      $gt: Number(min),
      $lte: Number(max)
    }
  }).toArray();

  return result;
})

router.GET('/get-events-in-next_days', (context) => {
  const days: number = context.request.query.query.days;

  if(days <= 0)
    return { message: "Invalid query." };

  const maxDate = new Date(Date.now() + days * daysInMiliseconds);

  const result = context.models.event.find({
    start_date: {
      $gt: new Date(Date.now()),
      $lt: maxDate
    }
  }).toArray();

  return result;
})

init(null, (context) => {
  return router.install(context)
})

