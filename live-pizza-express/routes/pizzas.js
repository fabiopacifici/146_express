const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/pizzaController')


// ✅ Index (read)
router.get('/', pizzaController.index )

/* ✅ Show (read) */
router.get('/:id', pizzaController.show)

/* ✅ Store (create) */
router.post('/', pizzaController.store)

//✅  Update (update)
router.put('/:id', pizzaController.update)


// Modify (update)
router.patch('/:id', pizzaController.modify)

/* ✅ destroy (delete) */
router.delete('/:id', pizzaController.destroy)



// ⚠️ Export the router instance
module.exports = router