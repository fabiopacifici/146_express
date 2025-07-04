const express = require('express')
const app = express()
const PORT = process.env.PORT
const PizzaRouter = require('./routes/pizzas')
const UserRouter = require('./routes/users')
const logMessage = require('./middlewares/logMessage')
const handleServerError = require('./middlewares/handleServerError')
const handleNotFound = require('./middlewares/handleNotFound')
app.use(express.static('public'))
app.use(express.json())

app.listen(PORT, ()=>{
  console.log(`Server listening on http://localhost:${PORT}`);
})


/* Middleware (global)*/
//1. Middlewre option 1 (Function declaration)
/* function logMessage(req, res, next){
  console.log('I am a middleware');
  res.send('sent by the middleware')
  //next()
} */

// Global middleware on a specific path
//app.use('/api/', logMessage)

// 2. Middleware (global)
// anon function
/* app.use((req, res, next)=>{
  console.log('I am a middleware');

  next()
}) */

//app.use(logMessage)
//app.use('/api/users', logMessage)

/* 🚋 routes*/
// Define the pizza-express routes
app.get('/', (req, res)=>{
  console.log('I am the route that handles the request');
  //app.daje()
  res.send('Welcome to pizza express server! The server is running')
})

/* Middleware example at route level 
app.get('/', logMessage, (req, res)=>{
  console.log('I am the route that handles the request');
  
  res.send('Welcome to pizza express server! The server is running')
})

*/


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
app.use(handleServerError);
app.use(handleNotFound)