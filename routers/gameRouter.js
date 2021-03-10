// DEFINES ROUTES FOR {HOST}/game/*
// Used for APIs for GET/POST for game pages
const express = require('express')
const path = require('path')
const getDb = require('../db.js').getDb;

// Define the Router Object to export
let router = express.Router()

// Define where static files will be found
// router.use(express.static('public')) // Could be used for getting game assets

// API for getting the high score for a game
router.use('/getHighScore', (req, res)=> {
    console.log("is this getting called?")
    // Get DB Connection Object
    const db = getDb();
    // Getting gameId from header
    const gameid = req.headers.gameid;
    // Prepared statement
    const prepStmt = 'SELECT score.* FROM score WHERE score = ( SELECT MAX(score) FROM score)'
    // Run query
    db.query(prepStmt, gameid, (error, result, fields) => {
        // Error Checking
        if (error) {
            // How to handle err
            res.json(null);

        } else {
            // Create JSON String and return
            const gameJsonStr = JSON.stringify(result);
            // telling client-side that it is a JSON response and not reroute
            res.json(gameJsonStr);
        }
    })
})

// API for getting overall positive rating of a game
router.use('/getOveralRating/:gameId', (req, res)=> {
    // Get DB Connection Object
    const db = getDb();
    // Getting gameId from header
    const body = req.body;
    console.log(body)
    res.end()
    // // Prepared statement
    // const prepStmt = 'SELECT (SUM(positive) / count(*) * 100.0) as positive_percent FROM rating GROUP BY fk_gameid HAVING fk_gameid=?;'
    // // Run query
    // db.query(prepStmt, gameid, (error, result, fields) => {
    //     // Error Checking
    //     if (error) {
    //         // console.log(error)
    //         return res.status(500).json(null).end();

    //     } else {
    //         // console.log(result)
    //         return res.status(200).json(result).end();
    //     }
    // })
})

// API for submitting a rating to a game
router.use('/rateGame', (req, res)=> {
    // Get DB Connection Object
    const db = getDb();
    // Getting gameId from header
    const gameid = req.params.gameId;
    // Prepared statement
    const prepStmt = 'SELECT (SUM(positive) / count(*) * 100.0) as positive_percent FROM rating GROUP BY fk_gameid HAVING fk_gameid=?;'
    // Run query
    db.query(prepStmt, gameid, (error, result, fields) => {
        // Error Checking
        if (error) {
            // console.log(error)
            return res.status(500).json(null).end();

        } else {
            // console.log(result)
            return res.status(200).json(result).end();
        }
    })
})

module.exports = router