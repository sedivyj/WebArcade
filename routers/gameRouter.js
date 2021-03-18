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

router.use('/getGame/:id?', async (req, res)=> {
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


module.exports = router