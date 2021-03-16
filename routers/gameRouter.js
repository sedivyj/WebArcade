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
router.use('/getHighScore', (req, res) => {
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
                if(cookie) {
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
        return res.status(400).json({status: "Bad request"}).end()
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

module.exports = router