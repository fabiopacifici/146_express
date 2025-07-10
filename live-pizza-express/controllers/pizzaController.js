const pizzas = require('../data/pizzas')
const connection = require('../db/connection')

const index = (req, res) => {

  const sql = 'SELECT * FROM pizzas'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: true, message: err.message })
    console.log(results);

    res.json(results)

  })

}


const show = (req, res) => {

  // The dynamic segment of the URI is passed inside the params object of the `req` object
  console.log(req.params);
  console.log(typeof req.params.id);
  // read the value using the id key if the segment was called like that `:id`

  const id = parseInt(req.params.id)

  const sql = 'SELECT * FROM 146_db_pizzas.pizzas WHERE id = ? ;'
  console.log(sql);
  //res.send('test')

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: true, message: err.message })

    console.log(results);
    if (!results.length > 0) {
      return res.status(404).json({
        error: true,
        message: 'Not Found'
      })
    }
    return res.json(results[0])

  })
  //res.send('test')

  //console.log(req.query);

  //const pizza = pizzas.find(pizza => pizza.id === id)


  /* Chain the status code before the json method to return the correct code */

  /*   if (!pizza) {
      return res.status(404).json({
        error: true,
        message: 'Not Found'
      })
    } */

  // return a response
  //res.send(`You requested the pizza with id: ${id} `)

  //res.json(pizza)
}


const store = (req, res) => {

  //console.log(req.fabio);


  console.log(req.body, 'This is the req.body');
  const { name, image } = req.body

  const sql = 'INSERT INTO pizzas (name, image) VALUES (?, ?);'

  connection.query(sql, [name, image], (err, results) => {
    if (err) return res.status(500).json({ error: true, message: err.message })
    console.log(results);
    res.status(201).json({id: results.insertId})
  })

}


const update = (req, res) => {


  // read the value using the id key if the segment was called like that `:id`
  const id = parseInt(req.params.id)
  const {name, image} = req.body


  const sql = "UPDATE pizzas SET name = ?, image = ? WHERE id = ?;"

  connection.query(sql, [name, image, id], (err, results)=>{

    if (err) return res.status(500).json({ error: true, message: err.message })
    console.log(results);
    if (results.affectedRows === 0) {
      return res.status(404).json({
        error: true,
        message: 'Not Found'
      })
    }

    const sqlSinglePizza = 'SELECT * FROM pizzas WHERE id = ? ;'
    connection.query(sqlSinglePizza, [id], (err, results) => {
      if (err) return res.status(500).json({ error: true, message: err.message })

      console.log(results);
      if (!results.length > 0) {
        return res.status(404).json({
          error: true,
          message: 'Not Found'
        })
      }
      return res.json(results[0])

    })



    //res.json({success: true, message: "Pizza updated successfull"})

  })




  //console.log(req.query);

/*   const pizza = pizzas.find(pizza => pizza.id === id) */


  /* Chain the status code before the json method to return the correct code */
/* 
  if (!pizza) {
    return res.status(404).json({
      error: true,
      message: 'Not Found'
    })
  }

  pizza.name = req.body.name
  pizza.image = req.body.image
  pizza.ingredients = req.body.ingredients

  console.log(pizzas);
  res.json(pizza) */

}



const modify = (req, res) => {

  // read the value using the id key if the segment was called like that `:id`
  const id = parseInt(req.params.id)
  //console.log(req.query);

  const pizza = pizzas.find(pizza => pizza.id === id)


  /* Chain the status code before the json method to return the correct code */

  if (!pizza) {
    return res.status(404).json({
      error: true,
      message: 'Not Found'
    })
  }

  pizza.name = req.body.name

  console.log(pizzas);
  res.json(pizza)

}


const destroy = (req, res) => {

  /*   const id = req.params.id
    res.send(`You want to delete pizza with id: ${id}`) */

  // The dynamic segment of the URI is passed inside the params object of the `req` object
  console.log(req.params);
  //console.log(typeof req.params.id);

  // read the value using the id key if the segment was called like that `:id`
  const id = parseInt(req.params.id)

  const sql = "DELETE FROM pizzas WHERE id = ?"

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: true, message: err.message })
    console.log(results);
    if (results.affectedRows === 0) {
      return res.status(404).json({
        error: true,
        message: 'Not Found'
      })
    }

    res.sendStatus(204)

  })


  //console.log(req.query);

  /*   const pizza = pizzas.find(pizza => pizza.id === id) */


  /* Chain the status code before the json method to return the correct code */

  /*   if (!pizza) {
      return res.status(404).json({
        error: true,
        message: 'Not Found'
      })
    } */



  // Rimuoviamo la pizza dal menu
  /*  pizzas.splice(pizzas.indexOf(pizza), 1);
 
   console.log(pizzas); */


  // Restituiamo lo status corretto


}


module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}