// DEFINES ROUTES FOR {HOST}/test/* 
// Used for testing
const express = require('express')
const path = require('path')
const getDb = require('../db.js').getDb;

// Define the Router Object to export
const router = express.Router()

// Define where static files will be found
router.use(express.static('public')) 

// Example of using DB
router.use('/testdb', (req, res)=> {
    res.sendFile(path.join(__dirname, '..', 'testdb.html'))
})

// Example of using DB GET method
router.use('/testdbAPI/:id', (req, res)=> {
    // Get DB Connection Object
    const db = getDb();
    // Getting gameId from header
    const gameid = req.params.id;
    console.log(gameid)
    // Prepared statement
    const prepStmt = 'SELECT * FROM game WHERE gameid=?;'
    // Run query
    db.query(prepStmt, gameid, (error, result, fields) => {
        // Error Checking
        if (error) {
            // How to handle err
            console.log(error);
            res.json(null);
        } else {
            // Telling client-side that it is a JSON response and not reroute
            res.json(result);
        }
    })
})

module.exports = router