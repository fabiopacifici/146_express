# Steps Express REST API SERVER

- add a server.js file
- initialize npm using `npm init -y`
- install express and dotend `npm i express dotenv`
- add the `.env` , `.env.example` file and the `.gitignore`
- add node_modules and .env to the gitignore file
- add environment variables to the .env and .env.example
- update the scripts in the package.json
- create the server inside server.js
- create the first routes in server.js
- create the collection in Postman

## add node_modules and .env to the gitignore

The content of the file

```
.env
node_modules/

```

## Update the dotenv files

add an environment variable to both .env files

```text
PORT=3010
```

## update the scripts in the package.json

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "node --watch --env-file=.env server.js",
  }

```

## create the server inside server.js

```js
const express = require('express')
const app = express()
const PORT = process.env.PORT

// add the static assets middleware 
app.use(express.static('public'))
// add the body parser middleware
app.use(express.json())


// Start listening for requests
app.listen(PORT, ()=>{
  console.log(`Server is listening at http://localhost:${PORT}`);
  
})




```

## Add the first routes

```js

const messages = [
  { role: 'user', content: 'Hello, how are you?' },
  { role: 'assistant', content: 'I am good, thank you! How can I help you today?' },
  { role: 'user', content: 'Can you tell me a joke?' },
  { role: 'assistant', content: 'Why did the scarecrow win an award? Because he was outstanding in his field!' }
]


// Add the first routes
app.get('/', (req, res)=>{
  res.send('Welcome to my messages API server')
})



// Add an index route
app.get('/api/messages', (req, res)=>{
  res.json(messages)
})



// Add an index route
app.get('/api/messages', (req, res) => {
  res.json(messages)
})


// add a show route
app.get('/api/messages/:id', (req, res) => {

  // get the id param and convert in a number
  const id = parseInt(req.params.id)

  // use find to find the message inside the messages array and return it
  const message = messages.find(msg => msg.id === id)
  console.log(message);

  // check if we found the message otherwise return a response with a status code 404
  if (!message) {
    return res.status(404).json({
      error: true,
      message: 'Not found 404'
    })
  }

  // return the final json response of the found message
  res.json(message)

})


// add a store route
app.post('/api/messages', (req, res)=>{

  // get the request body
  const {role, content} = req.body

  // generate a new sequential id number for the message
  const newId = messages[messages.length - 1].id + 1
  // make the object literal
  const newMessage = {
    id: newId,
    role,
    content
  }
  
  // push the new object into the array
  messages.push(newMessage)

  // return a status code (201) and the object inserted as json
  res.status(201).json(newMessage)
  
})


// add an uppdate route
app.put('/api/messages/:id', (req, res)=>{

  // get the id param and convert in a number
  const id = parseInt(req.params.id)

  // get the request body
  const {role, content} = req.body

  if(!role || !content){
    return res.status(400).json({error: true, message: 'incorrect fields value'})
  }


  // use find to find the message inside the messages array and return it
  const message = messages.find(msg => msg.id === id)
  console.log(message);

  // check if we found the message otherwise return a response with a status code 404
  if (!message) {
    return res.status(404).json({
      error: true,
      message: 'Not found 404'
    })
   }

   message.role = role;
   message.content = content


   console.log(messages);

   res.json(message)

})

// add a destroy route
app.delete('/api/messages/:id', (req, res) => {

  // get the id param and convert in a number
  const id = parseInt(req.params.id)

  // use find to find the message inside the messages array and return it
  const message = messages.find(msg => msg.id === id)
  console.log(message);

  // check if we found the message otherwise return a response with a status code 404
  if (!message) {
    return res.status(404).json({
      error: true,
      message: 'Not found 404'
    })
  }



  // remove the item from the array using its index
  messages.splice(messages.indexOf(message), 1)


  // log to check if we removed the message
  console.log(message);

  // return no content with status code 204

  res.sendStatus(204)
  
})


```

# TODO refactoring

- create the messagesRouter
- create the messageController
