const express = require('express');
const router  = express.Router();
const playlists = require('../data/playlists');
const { error } = require('console');
const e = require('express');


/**
 * Index route for playlists
 * @route GET /api/playlists
 * @returns {Array} List of playlists
 */
router.get('/', (req, res)=>{

  /* Show the list of playlists (array of objects) */
  //res.send('List of playlists');
  res.json(playlists);
})



/* show */
router.get('/:id', (req, res)=>{
  const id = parseInt(req.params.id)

  // find the playlist by id
  const playlist = playlists.find(p => p.id === id);
  console.log(playlist);
  
  // handle the 404 error if the playlist is not found
  if(!playlist){
    return res.status(404).json(
      {
        error: true,
        message: `Playlist with id ${id} not found`

      }

    )
  }


  // return the playlist as a JSON response
  res.json(playlist);

})



/* Store */


/* Update */

/* Destroy */
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)

  // find the playlist by id
  const playlist = playlists.find(p => p.id === id);
  console.log(playlist);

  // handle the 404 error if the playlist is not found
  if (!playlist) {
    return res.status(404).json(
      {
        error: true,
        message: `Playlist with id ${id} not found`

      }

    )
  }


  // remove the playlist from the array

  playlists.splice(playlists.indexOf(playlist), 1);

  // log the playlist that is being deleted
  console.log(playlists);


  // return the playlist as a JSON response
  res.sendStatus(204); // No Content

})



module.exports = router;