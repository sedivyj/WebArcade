const express = require('express')
const path = require('path')
const SQL_DB_SCORE = require('../sql/scoreController.js')


// Define the Router Object to export
let router = express.Router()

// API for getting the high score for a game
router.use('/getGameHighScore/id/:id/show/:max', async (req, res)=> {
    // Getting gameId from header
    const gameid = req.params.id
    const limit = req.params.max
    // Prepared statement
    try {
        const game = await SQL_DB_SCORE.getGameHighScore(gameid, limit)
        // telling client-side that it is a JSON response and not reroute
        
        return res.status(200).json(game);
    } catch (err) {
        return res.status(500).json({
            error: true, message: 'Could not get game high score'
        })
    }
})

// Endpoint for submitting score from game to DB
router.use('/submitScore', async (req, res) => {
    // Check for Body
    if(req.body) {
        // Get data from body
        const gameid = req.body.gameid
        const score = req.body.score
        const initial = req.body.initial

        if(!initial || initial === '') {
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
            return res.status(500).json(err); // Server error
        }
    } else {
        const err = { error: 'Bad Request' }
        res.status(500).json(err)
    }
})
module.exports = router