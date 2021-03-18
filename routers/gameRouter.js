// DEFINES ROUTES FOR {HOST}/game/*
// Used for APIs for GET/POST for game pages
const express = require('express')
const path = require('path')
const getDb = require('../db.js').getDb;
const SQL_DB_GAME = require('../sql/gameController.js')


// Define the Router Object to export
let router = express.Router()

// Define where static files will be found
// router.use(express.static('public')) // Could be used for getting game assets

// API for getting the high score for a game
router.use('/getHighScore/:id', async (req, res) => {
  // Getting gameId from header
  const gameid = req.params.id
  // Prepared statement
  try {
    const game = await SQL_DB_GAME.getGameHighScore(gameid)
    // telling client-side that it is a JSON response and not reroute

    return res.json(game);
  } catch (err) {
    return res.status(500).json({
      error: true, message: 'Could not get game high score'
    })
  }
})

router.use('/getGame/:id?', async (req, res) => {
  // Getting gameId from header
  const gameid = req.params.id

  if (gameid) {
    try {
      const game = await SQL_DB_GAME.getGameDetails(gameid)
      // telling client-side that it is a JSON response and not reroute

      return res.json(game);
    } catch (err) {
      return res.status(500).json({
        error: true, message: 'Could not get game'
      })
    }
  } else { // TO-DO: return all games
    try {
      const game = await SQL_DB_GAME.getAllGames()
      // telling client-side that it is a JSON response and not reroute

      return res.json(game);
    } catch (err) {
      return res.status(500).json({
        error: true, message: 'Could not get top score'
      })
    }
  }
})

router.use('/getShortDetails/:id', async (req, res) => {
  const gameid = req.params.id
  if (gameid) {
    try {
      const gameDetails = await SQL_DB_GAME.getAbridgedGameDetails(gameid);
      return res.status(200).json(gameDetails).end()
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: true, message: 'Error getting game details'
      })
    }
  }
})

router.use('/getAllGames/:id', async (req, res) => {
  try {
    const games = await SQL_DB_GAME.getAllGameURLparams(0);
    return res.status(200).json(games).end();
  } catch (err) {
    return res.status(500).json({ error: true, message: 'Error getting games' })
  }
})

router.use('/getTop10Scores/:id', async (req, res) => {
  const gameid = req.params.id
  if (gameid) {
    try {
      const gameDetails = await SQL_DB_GAME.getTop10GameScores(gameid);
      return res.status(200).json(gameDetails).end()
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: true, message: 'Error getting game scores'
      })
    }
  }
})

module.exports = router