const express = require('express');
const port = require('./config.js').app.port

console.log(port)

// DB Module Functions
const initDb = require('./db').initDb;
const getDb = require('./db').getDb;

const app = express();

app.use(express.static(__dirname + '/public'));

// Example of using DB
app.use('/testdb', (req, res)=> {
    // Get DB Connection Object
    const db = getDb();
    // Run query with callback
    db.query('SELECT * FROM test_table;', (error, results, fields) => {
        // Check for errors
        if(error) {
            res.send("error");
        } else {
            res.json(results);
        }
    });
})

//TODO: Handle error
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