const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const playlistRouter = require('./routes/playlists');

// register the static assets folder
app.use(express.static('public'));

app.listen(PORT, ()=>{

    console.log(`Server is running on port http://localhost:${PORT}`);
})


/* Routes */

app.get('/', (req, res)=>{
  res.send('Welcome to the Live Playlists API!');
})


/* Use the playlists routes */
app.use('/api/playlists', playlistRouter)



/* Use the posts routes */
app.use('/api/posts', postsRouter)