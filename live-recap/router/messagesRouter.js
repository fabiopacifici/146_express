const express = require('express')
const router = express.Router()

// import the message controller
const messageController = require('../controllers/messageController')


// define all routes

// Add an index route
router.get('/', messageController.index)


// add a show route
router.get('/:id', messageController.show)


// add a store route
router.post('/', messageController.store)


// add an uppdate route
router.put('/:id', messageController.update)

// add a destroy route
router.delete('/:id', messageController.destroy)




module.exports = router