const SQL_DB_GAME = require('../sql/mysqlController.js')
// impo0rt * as SQL_DB_GAME from '../sql/mysqlController.js'
const express = require('express')
// import express from 'express'
const router = express.Router()

// Example of using DB GET method
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
        return res.status(400).end()
    }
})

module.exports = router
