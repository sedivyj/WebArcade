// DEFINES ROUTES FOR {HOST}/score/* 
// Used for testing
const express = require('express')
const path = require('path')
const getDb = require('../db.js').getDb;

// Define the Router Object to export
const router = express.Router()

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
        // Run Query
        db.query(prepStmt, [scoreid, gameid, score, initial], (error, result, fields) => {
            if (error) { 
                console.log(error)
                res.status(500).end(); // Server error
            }
            else {
                console.log(`New SCOREID: ${result.insertId}`)
                res.status(200).end() // success
            }
        })
    } else {
        res.status(500).end()
    }
})

module.exports = router