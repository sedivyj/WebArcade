const express = require('express')
const SQL_DB_SCORE = require('../sql/scoreController.js')

// Define the Router Object to export
const router = express.Router()

// API for getting the high score for a game
router.use('/getGameHighScore/id/:id/show/:max', async (req, res) => {
  // Getting gameId from header
  const gameid = req.params.id
  const limit = req.params.max
  // Prepared statement
  try {
    const game = await SQL_DB_SCORE.getGameHighScore(gameid, limit)
    // telling client-side that it is a JSON response and not reroute

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    return res.status(200).json(game)
  } catch (err) {
    return res.status(500).json({
      error: true, message: 'Could not get game high score'
    })
  }
})

// Endpoint for submitting score from game to DB
router.use('/submitScore', async (req, res) => {
  // Check for Body
  if (req.body) {
    // Get data from body
    const gameid = parseInt(req.body.gameid)
    const score = Number(req.body.score) // Could be int or float type
    const initial = req.body.initial

    if (!gameid) {
      const err = { error: 'Invalid game id' }
      return res.status(400).json(err)
    }
    if (!score) {
      const err = { error: 'Score is not a number' }
      return res.status(400).json(err)
    }
    if (!initial || initial === '') {
      const err = { error: 'No initials provided' }
      return res.status(400).json(err)
    }

    try {
      // Try submitting the score
      await SQL_DB_SCORE.submitScore(gameid, score, initial)
      const response = { message: `Your score was submitted ${initial}!` }
      return res.status(200).json(response) // success
    } catch (error) {
      const err = { error: 'There was an issue submitting your score' }
      return res.status(500).json(err) // Server error
    }
  } else {
    const err = { error: 'Bad Request' }
    res.status(500).json(err)
  }
})

router.get('/getAllHighScores', async (req, res) => {
  try {
    const gameAndHighScores = await SQL_DB_SCORE.getAllHighScores()
    return res.status(200).json(gameAndHighScores)
  } catch (error) {
    const err = { error: 'There was an error getting scores' }
    return res.status(500).json(err)
  }
})

module.exports = router
