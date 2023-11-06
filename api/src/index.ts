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
  const min: string = context.request.query.min;
  const max: string = context.request.query.max;

  const result = context.models.pizza.find({
    price: {
      $gt: Number(min),
      $lte: Number(max)
    }
  }).toArray();

  return result;
})

router.GET('/get-events-in-next_days', (context) => {
  const days: number = context.request.query.days;

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


router.GET("/drink/non-alcoholic", async (_context) => {
  const nonAlchool =  await _context.collections.drink.functions.getAll(
    { filters: { 
        isalcoholic: { $ne: true }
      }
    });
    
  return nonAlchool;
});

router.GET("/combo/cheaperthan", async (_context) => {
  console.log(_context.request.query);
  const price: number = +_context.request.query.price;
  const combosCheaperThanPrice = await _context.collections.combo.functions.getAll(
    { filters: { 
      price: { $lte: price} 
    }
  });

  return combosCheaperThanPrice;
});

init(null, (context) => {
  return router.install(context)
})

