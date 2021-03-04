const express = require('express');
const path = require('path');
const port = require('./config.js').app.port

// DB Module Functions
const initDb = require('./db').initDb;

// Start of Web App
const app = express();

// Initializing Routers
const gameRouter = require('./routers/gameRouter.js');
const testRouter = require('./routers/testRouter.js');
const scoreRouter = require('./routers/scoreRouter.js');

// Setting up Middleware
app.use(express.json()); // Middleware for handling JSON
app.use(express.static(path.join(__dirname, 'public'))); // Defining where static files will be found
app.use('/test', testRouter);
app.use('/game', gameRouter);
app.use('/score', scoreRouter);

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