const express = require('express');
const port = require('./config.js').app.port

console.log(port)

// DB Module Functions
const initDb = require('./db').initDb;
const getDb = require('./db').getDb;

const app = express();
app.use(express.json());

app.use(express.static(__dirname + '/public'));

// Endpoint for submitting score from game to DB
app.use('/submitScore', (req, res) => {
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

// Example of using DB
app.use('/testdb', (req, res)=> {
    res.sendFile(__dirname + '/testdb.html')
})

// Example of using DB GET method
app.use('/testdbAPI', (req, res)=> {
    // Get DB Connection Object
    const db = getDb();
    // Getting gameId from header
    const gameid = req.headers.gameid;
    // Prepared statement
    const prepStmt = 'SELECT * FROM game WHERE gameid=?;'
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

// Initializes DB connection and Starts App
initDb((err) => {
    app.listen(port, (err) => {
        try {
            if (err) throw err;
            console.log(`Environment: ${process.env.NODE_ENV}`);
            console.log(`Server is listening on port ${port}`);
        }
        catch (err) {
            console.error(`ERROR IN LISTEN\n${ex.stack}`);
        }
    });
})