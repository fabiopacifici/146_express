// import the data
const messages = require('../data/messages')


const index = (req, res) => {
  res.json(messages)
}


const show = (req, res) => {

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

}


const store = (req, res) => {

  // get the request body
  const { role, content } = req.body

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

}

const update = (req, res) => {

  // get the id param and convert in a number
  const id = parseInt(req.params.id)

  // get the request body
  const { role, content } = req.body

  if (!role || !content) {
    return res.status(400).json({ error: true, message: 'incorrect fields value' })
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

}

const destroy = (req, res) => {

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

}

module.exports = {
  index,
  show, 
  store, 
  update,
  destroy
}