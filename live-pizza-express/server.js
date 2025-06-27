const express = require('express')
const app = express()
const PORT = 3030


app.use(express.static('public'))


app.listen(PORT, ()=>{
  console.log(`Server listening on http://localhost:${PORT}`);
})


// Define the pizza-express routes

app.get('/', (req, res)=>{

  res.send('Welcome to pizza express server! The server is running')

})


// pizzas index
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