const express = require('express');
const path = require('path');
const port = require('./config').app.port

// DB Module Functions
const initDb = require('./db').initDb;

// Start of Web App
const app = express();

// Initializing Routers
<<<<<<< HEAD
const gameRouter = require('./routers/gameRouter.js');
const testRouter = require('./routers/testRouter.js');
const scoreRouter = require('./routers/scoreRouter.js');
=======
const gameRouter = require('./routers/gameRouter');
const scoreRouter = require('./routers/scoreRouter')
const testRouter = require('./routers/testRouter');
>>>>>>> 517e75a2e4efb680fae4266d7f07fc86c7ba6857

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