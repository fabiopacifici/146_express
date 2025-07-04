// You can put the listener here

const express = require('express')
const app = express()
const PORT = process.env.PORT
const messagesRouter = require('./router/messagesRouter')
const notFound = require('./middleware/notFound')
const serverError = require('./middleware/serverError')


// add the static assets middleware 
app.use(express.static('public'))
// add the body parser middleware
app.use(express.json())


// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);

})



// Add the first routes

app.get('/', (req, res) => {
  res.send('Welcome to my messages API server')
})

// TODO:  Use the router for the messages here

app.use('/api/messages', messagesRouter)

// You can put the listener here

// handle server errors
app.use(serverError)

// handle 404 errors
app.use(notFound)




