const express = require('express')
const router = express.Router()



const users = []
router.get('/', (req, res) => {
  res.json(users)
})

/* Show (read) */
router.get('/:id', (req, res) => {

  // The dynamic segment of the URI is passed inside the params object of the `req` object
  console.log(req.params);
  // read the value using the id key if the segment was called like that `:id`
  const id = req.params.id
  //console.log(req.query);

  // return a response
  res.send(`You requested the user with id: ${id} `)

})

/* Store (create) */
router.post('/', (req, res) => {

  res.send('Save a new user into the db')

})

// Update (update)
router.put('/:id', (req, res) => {

  const id = req.params.id

  res.send(`You want to update user with id: ${id}`)
})


// Modify (update)
router.patch('/:id', (req, res) => {

  const id = req.params.id
  res.send(`You want to modify user with id: ${id}`)
})

/* destroy (delete) */
router.delete('/:id', (req, res) => {

  const id = req.params.id
  res.send(`You want to delete user with id: ${id}`)
})




module.exports = router