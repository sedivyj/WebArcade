// DEFINES ROUTES FOR {HOST}/game/*
// Used for APIs for GET/POST for game pages
const express = require('express')
const path = require('path')

const SQL_DB_GAME = require('../sql/gameController.js')

// Define the Router Object to export
const router = express.Router()

// Define where static files will be found
// router.use(express.static('public')) // Could be used for getting game assets

router.use('/getGame/:id?', async (req, res) => {
  // Getting gameId from header
  const gameid = req.params.id

  if (gameid) {
    try {
      const game = await SQL_DB_GAME.getGameDetails(gameid)
      // telling client-side that it is a JSON response and not reroute

      return res.status(200).json(game)
    } catch (err) {
      return res.status(500).json({
        error: true, message: 'Could not get game'
      })
    }
  } else { // TO-DO: return all games
    try {
      const game = await SQL_DB_GAME.getAllGames()
      // telling client-side that it is a JSON response and not reroute

      return res.json(game)
    } catch (err) {
      return res.status(500).json({
        error: true, message: 'Could not get top score'
      })
    }
  }
})

// API for getting overall positive rating of a game
// Returns the overall positive rating and if the user
// has ratedthe game before
router.use('/getOverallRating/:gameId', async (req, res) => {
  // // Getting gameId from header
  const gameid = parseInt(req.params.gameId)
  if (gameid) {
    try {
      const result = await SQL_DB_GAME.getOverallRating(gameid)
      // Query was successful, but if empty -> There were no ratings!
      const percent = (result[0]) ? result[0].positive_percent : undefined

      // Checking Cookies
      const cookie = req.cookies[`game_${gameid}_rated`] // get cookie
      const wasPositiveRating = (cookie) ? cookie.wasPositive : undefined

      const response = {
        positivePercent: percent, // should only have 1 or none response
        wasPositive: wasPositiveRating
      }
      return res.status(200).json(response).end()
    } catch (error) {
      const err = { error: 'Problem getting game rating' }
      return res.status(500).json(err)
    }
  } else {
    const err = { error: 'Bad request' }
    return res.status(400).json(err)
  }
})

// API for submitting a rating to a game
router.use('/rateGame', async (req, res) => {
  // Getting body from request
  const body = req.body
  if (body) {
    const gameId = parseInt(body.gameId)
    const positive = body.positive
    // Validate Game Id is valid
    if (gameId) {
      // Check if user has cookie
      const ratedCookie = req.cookies[`game_${gameId}_rated`]
      if (ratedCookie) {
        const err = { error: 'You\'ve rated this game before!' }
        return res.status(400).json(err)
      }
      try {
        // Run Query
        await SQL_DB_GAME.rateGame(gameId, positive)

        // Give user a cookie with game and rating details
        res.cookie(`game_${gameId}_rated`, {
          gameRated: true,
          wasPositive: positive
        })
        const response = { message: 'Game rated!' }
        return res.status(200).json(response)
      } catch (error) {
        const err = { error: 'Error rating game' }
        return res.status(500).json(err)
      }
    } else {
      const err = { error: 'Invalid game id' }
      return res.status(400).json(err)
    }
  } else {
    return res.status(400).json('Body missing from request').end()
  }
})

module.exports = router
