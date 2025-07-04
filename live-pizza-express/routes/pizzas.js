const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/pizzaController')
const checkApiToken = require('../middlewares/checkApiToken')



/* Anon Middleware at router level */
/* router.use((req, res, next)=>{
  console.log('I am a router level middleware');
  
  next()
}) */


//router.use(logMessage)

// ✅ Index (read)
router.get('/', pizzaController.index )

/* ✅ Show (read) */
router.get('/:id', pizzaController.show)

/* ✅ Store (create) */
router.post('/', checkApiToken, pizzaController.store)

//✅  Update (update)
router.put('/:id', checkApiToken, pizzaController.update)


// Modify (update)
router.patch('/:id', checkApiToken,  pizzaController.modify)

/* ✅ destroy (delete) */
router.delete('/:id', checkApiToken, pizzaController.destroy)



// ⚠️ Export the router instance
module.exports = router