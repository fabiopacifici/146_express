const express = require('express')
const app = express()
const PORT = process.env.PORT
const PizzaRouter = require('./routes/pizzas')
const UserRouter = require('./routes/users')

app.use(express.static('public'))
app.use(express.json())

app.listen(PORT, ()=>{
  console.log(`Server listening on http://localhost:${PORT}`);
})



/* 🚋 routes*/
// Define the pizza-express routes
app.get('/', (req, res)=>{
  res.send('Welcome to pizza express server! The server is running')
})

/* 👉 Endpoint for the pizza resource */
// Use the PizzaRouter
app.use('/api/pizzas', PizzaRouter)

/* 👉 Endpoint to manage `User` */
// use UserRouter
app.use('/api/users', UserRouter)


// 👇 Basic Routing system

// api/pizzas


/* // Index (read)
app.get('/api/pizzas', (req, res)=>{
  res.json(pizzas)
})

//Show (read) 
app.get('/api/pizzas/:id', (req, res)=>{

  // The dynamic segment of the URI is passed inside the params object of the `req` object
  console.log(req.params);
  // read the value using the id key if the segment was called like that `:id`
  const id = req.params.id
  //console.log(req.query);

  // return a response
  res.send(`You requested the pizza with id: ${id} `)

})

//Store (create)
app.post('/api/pizzas', (req, res)=>{

  res.send('Save a new pizza into the db')

})

// Update (update)
app.put('/api/pizzas/:id', (req, res)=>{

  const id = req.params.id

  res.send(`You want to update pizza with id: ${id}`)
})


// Modify (update)
app.patch('/api/pizzas/:id', (req, res) => {

  const id = req.params.id

  res.send(`You want to modify pizza with id: ${id}`)
})

//destroy (delete)
app.delete('/api/pizzas/:id', (req, res)=>{
  
  const id = req.params.id
  res.send(`You want to delete pizza with id: ${id}`)
})
*/










/* 👉 Endpoint to manage `Product` */
// index
app.get('/api/products', (req, res)=>{
  res.send('list products')
})

// show
app.get('/api/products/:id', (req, res) => {
  res.send('show the product')

})

// etc etc etc..

/* 👉 Endpoint to manage `Article` */