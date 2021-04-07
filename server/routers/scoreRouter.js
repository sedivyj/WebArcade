const express = require('express')
const path = require('path')
const getDb = require('../db.js').getDb;
const SQL_DB_SCORE = require('../sql/scoreController.js')


// Define the Router Object to export
let router = express.Router()

// Define where static files will be found
// router.use(express.static('public')) // Could be used for getting game assets

// API for getting the high score for a game
router.use('/getGameHighScore/id/:id/show/:max', async (req, res)=> {
    // Getting gameId from header
    const gameid = req.params.id
    const limit = req.params.max
    // Prepared statement
    try {
        const game = await SQL_DB_SCORE.getGameHighScore(gameid, limit)
        // telling client-side that it is a JSON response and not reroute
        
        return res.json(game);
    } catch (err) {
        return res.status(500).json({
            error: true, message: 'Could not get game high score'
        })
    }
})

// Define where static files will be found
// router.use(express.static('public')) 

// Endpoint for submitting score from game to DB
router.use('/submitScore', (req, res) => {
    // Check for Body
    if(req.body) {
        // Get Connection DB Object
        const db = getDb();
        const prepStmt = 'INSERT INTO score (scoreid, fk_gameid, score, initial) VALUES (?, ?, ?, ?)'
        // Get data from body
        const scoreid = req.body.scoreid
        const gameid = req.body.gameid
        const score = req.body.score
        const initial = req.body.initial

        if(!initial || initial === '') {
            const err = { error: 'No initials provided' }
            return res.status(400).json(err)
        }

        // Run Query
        db.query(prepStmt, [scoreid, gameid, score, initial], (error, result, fields) => {
            if (error) { 
                const err = { error: 'There was an issue submitting your score' }
                return res.status(500).json(err); // Server error
            }
            else {
                console.log(`New SCOREID: ${result.insertId}`)
                const response = { message: `Your score was submitted ${initial}!` }
                return res.status(200).json(response) // success
            }
        })
    } else {
        const err = {
            error: 'Bad Request'
        }
        res.status(500).end()
    }
})
module.exports = router