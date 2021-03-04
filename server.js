
const gameRouter = require('./routes/game')


const express = require('express');
const path = require('path');
const port = require('./config.js').app.port

// DB Module Functions
const initDb = require('./db').initDb;
<<<<<<< HEAD
const getDb = require('./db').getDb;
 
=======
>>>>>>> f462ba4d3c91f8a9a85381d086c84521a90c2306

// Start of Web App
const app = express();

<<<<<<< HEAD
app.use(express.json()); // Middleware for handling JSON

app.use(express.static(__dirname + '/public'));

app.use(gameRouter)

// app.use('/game',gameRouter)

// Example of using DB
app.use('/testdb', (req, res)=> {
    res.sendFile(__dirname + '/testdb.html')
})

// Example of using DB GET method
app.use('/testdbAPI/:id', (req, res)=> {
    // Get DB Connection Object
    const db = getDb();
    // Getting gameId from header
    const gameid = req.params.id
    console.log(gameid)
    // Prepared statement
    const prepStmt = 'SELECT * FROM game WHERE gameid=?;'
    // Run query
    db.query(prepStmt, gameid, (error, result, fields) => {
        // Error Checking
        if (error) {
            res.status(500);
            // How to handle err
            res.json(null);
        } else {
            res.status(200);
            // Create JSON String and return
            const gameJsonStr = JSON.stringify(result);
            // telling client-side that it is a JSON response and not reroute
            res.json(gameJsonStr);
        }
    })
})

// Example of using DB GET method
app.use('/getHighScore/:id', (req, res)=> {
    // Get DB Connection Object
    const db = getDb();
    // Prepared statement
    const gameid = req.params.id

    const prepStmt = 'SELECT score.* FROM score WHERE score = ( SELECT MAX(score) FROM score) and fk_gameid=?'
    // Run query
    db.query(prepStmt, gameid, (error, result, fields) => {
        // Error Checking
        if (error) {
            // How to handle err
            res.json(null);
=======
// Initializing Routers
const gameRouter = require('./routers/gameRouter.js');
const testRouter = require('./routers/testRouter.js');
>>>>>>> f462ba4d3c91f8a9a85381d086c84521a90c2306

// Setting up Middleware
app.use(express.json()); // Middleware for handling JSON
app.use(express.static(path.join(__dirname, 'public'))); // Defining where static files will be found
app.use('/test', testRouter);
app.use('/game', gameRouter);

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