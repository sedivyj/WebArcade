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
}
)

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

// API for getting overall positive rating of a game
// Returns the overall positive rating and if the user
// has ratedthe game before
router.use('/getOveralRating/:gameId', (req, res) => {

  // Getting gameId from header
  // // Getting gameId from header
  const gameid = req.params.gameId;
  if (gameid) {
    // Get DB Connection Object
    const db = getDb();
    // // Prepared statement
    const prepStmt = 'SELECT (SUM(positive) / count(*) * 100.0) as positive_percent FROM rating GROUP BY fk_gameid HAVING fk_gameid=?;'
    // Run query
    db.query(prepStmt, gameid, (error, result, fields) => {
      // Error Checking
      if (error) {
        // console.log(error)
        return res.status(500).json(null).end()

      } else {
        // Query was successful, but if empty -> There were no ratings!
        const percent = (result[0]) ? result[0].positive_percent : undefined
        const cookie = req.cookies[`game_${gameid}_rated`] // get cookie
        let wasPositiveRating = undefined
        console.log(cookie)
        if (cookie) {
          wasPositiveRating = cookie.wasPositive
        }
        const response = {
          positivePercent: percent, // should only have 1 or none response

          wasPositive: wasPositiveRating
        }
        return res.status(200).json(response).end()
      }
    })
  } else {
    return res.status(400).json({ status: "Bad request" }).end()
  }
})

// API for submitting a rating to a game
router.use('/rateGame', (req, res) => {
  // Getting body from request
  const body = req.body
  if (body) {
    const gameId = body.gameId
    // Check cookie
    const ratedCookie = req.cookies[`game_${gameId}_rated`]
    if (ratedCookie) {
      const errorMessage = new Error("You've rated this game before")
      return res.status(400).json(errorMessage).end()
    } else {
      const positive = body.positive
      const ratingId = null
      // Get a current timestamp in format for MySQL DB
      const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ')
      // Get DB Connection Object
      const db = getDb();
      // Prepared statement
      const prepStmt = 'INSERT INTO rating (ratingid, fk_gameid, positive, timestamp) VALUES (?,?,?,?);'
      // Run query
      db.query(prepStmt, [ratingId, gameId, positive, dateTime], (error, result, fields) => {
        // Error Checking
        if (error) {
          return res.status(500).json(null).end();
        } else {
          res.cookie(`game_${gameId}_rated`, {
            gameRated: true,
            wasPositive: positive
          })
          return res.status(200).json(result).end();
        }
      })
    }
  } else {
    return res.status(400).json("Body missing from request").end()
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