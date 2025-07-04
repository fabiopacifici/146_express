const pizzas = require('../data/pizzas')


const index = (req, res) => {
  console.log(req.query);

  //Inizialmente, il menu filtrato corrisponde a quello originale
  let filteredMenu = pizzas;

  // Se la richiesta contiene un filtro, allora filtriamo il menu
  if (req.query.ingredient) {
    filteredMenu = pizzas.filter(
      pizza => pizza.ingredients.includes(req.query.ingredient)
    );
  }

  // restituiamo la variabile filteredMenu
  // potrebbe essere stata filtrata o contenere il menu originale
  res.json(filteredMenu);
}


const show = (req, res) => {

  // The dynamic segment of the URI is passed inside the params object of the `req` object
  console.log(req.params);
  console.log(typeof req.params.id);

  // read the value using the id key if the segment was called like that `:id`
  const id = parseInt(req.params.id)
  //console.log(req.query);

  const pizza = pizzas.find(pizza => pizza.id === id)


  /* Chain the status code before the json method to return the correct code */

  if (!pizza) {
    return res.status(404).json({
      error: true,
      message: 'Not Found'
    })
  }

  // return a response
  //res.send(`You requested the pizza with id: ${id} `)

  res.json(pizza)
}


const store = (req, res) => {

  //console.log(req.fabio);
  
  console.log(req.body, 'This is the req.body');

  // create an id for the current pizza object
  const pizzaId = pizzas[pizzas.length - 1].id + 1
  console.log(pizzaId);

  // construct the object literal taking the data from the req.body
  const newPizzaObj = {
    id: pizzaId,
    name: req.body.name,
    image: req.body.image,
    ingredients: req.body.ingredients
  }

  console.log(newPizzaObj);


  // push into the pizzas array
  pizzas.push(newPizzaObj)

  console.log(pizzas);

  // provide a response 201
  res.status(201).json(newPizzaObj)


}


const update = (req, res) => {


  // read the value using the id key if the segment was called like that `:id`
  const id = parseInt(req.params.id)
  //console.log(req.query);

  const pizza = pizzas.find(pizza => pizza.id === id)


  /* Chain the status code before the json method to return the correct code */

  if (!pizza) {
    return res.status(404).json({
      error: true,
      message: 'Not Found'
    })
  }

  pizza.name = req.body.name
  pizza.image = req.body.image
  pizza.ingredients = req.body.ingredients

  console.log(pizzas);
  res.json(pizza)

}



const modify = (req, res) => {

  // read the value using the id key if the segment was called like that `:id`
  const id = parseInt(req.params.id)
  //console.log(req.query);

  const pizza = pizzas.find(pizza => pizza.id === id)


  /* Chain the status code before the json method to return the correct code */

  if (!pizza) {
    return res.status(404).json({
      error: true,
      message: 'Not Found'
    })
  }

  pizza.name = req.body.name

  console.log(pizzas);
  res.json(pizza)

}


const destroy = (req, res) => {

  /*   const id = req.params.id
    res.send(`You want to delete pizza with id: ${id}`) */



  // The dynamic segment of the URI is passed inside the params object of the `req` object
  console.log(req.params);
  console.log(typeof req.params.id);

  // read the value using the id key if the segment was called like that `:id`
  const id = parseInt(req.params.id)
  //console.log(req.query);

  const pizza = pizzas.find(pizza => pizza.id === id)


  /* Chain the status code before the json method to return the correct code */

  if (!pizza) {
    return res.status(404).json({
      error: true,
      message: 'Not Found'
    })
  }



  // Rimuoviamo la pizza dal menu
  pizzas.splice(pizzas.indexOf(pizza), 1);

  console.log(pizzas);


  // Restituiamo lo status corretto
  res.sendStatus(204)


}


module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}