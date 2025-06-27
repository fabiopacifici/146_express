// import the express library
const express = require('express')

// create an instance of the express app
const app = express()
// define the port you want to use for the server listener
const PORT = 3030


// register the static middleware to serve static files
app.use(express.static('public'))


// Start the server listener
app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})

// Define a route for the root URL

app.get('/', (req, res)=>{

  res.send("<h1>Welcome to Live Pizza Express!</h1><p>Enjoy your pizza!</p>")

})

// add a get route for the pizza's menu

app.get('/api/pizzas', (req, res)=>{


  const menu = [
    {
      name: "Margherita",
      image: `http://localhost:${PORT}/imgs/margherita.webp`,
      ingredients: ["pomodoro", "mozzarella"],
    }, {
      name: "Marinara",
      image: `http://localhost:${PORT}/imgs/marinara.jpeg`,
      ingredients: ["pomodoro", "aglio", "origano"],
    }, {
      name: "Diavola",
      image: `http://localhost:${PORT}/imgs/diavola.jpeg`,
      ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    }, {
      name: "Bufalina",
      image: `http://localhost:${PORT}/imgs/bufalina.jpeg`,
      ingredients: ["pomodoro", "mozzarella di bufala"],
    }, {
      name: "4 formaggi",
      image: `http://localhost:${PORT}/imgs/4_formaggi.jpeg`,
      ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
    }
  ]


  res.json(menu)

})
