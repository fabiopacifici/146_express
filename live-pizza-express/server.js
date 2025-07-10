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


/* 🚋 routes*/
// Define the pizza-express routes
app.get('/', (req, res)=>{
  console.log('I am the route that handles the request');
  //app.daje()
  res.send('Welcome to pizza express server! The server is running')
})


/* 👉 Endpoint for the pizza resource */
// Use the PizzaRouter
app.use('/api/pizzas', PizzaRouter)

/* 👉 Endpoint to manage `User` */
// use UserRouter
app.use('/api/users', UserRouter)


// 👇 Basic Routing system


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