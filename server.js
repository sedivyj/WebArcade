const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')

const port = require('./config')?.app?.port

// DB Module Functions
const initDb = require('./db').initDb;

// Start of Web App
const app = express();

// Initializing Routers
const gameRouter = require('./routers/gameRouter');
const scoreRouter = require('./routers/scoreRouter')
const testRouter = require('./routers/testRouter');
// const emailRouter = require('./routers/emailRouter');
// Setting up Middleware
app.use(express.json()); // Middleware for handling JSON
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public'))); // Defining where static files will be found
app.use('/game', gameRouter);
app.use('/score', scoreRouter);
app.use('/test', testRouter);
//app.use('/contact', emailRouter);


// Initializes DB connection and Starts App
initDb((err) => {
  app.listen(port, (err) => {
    try {
      if (err) throw err;
      console.log(`Server is listening on port ${port}`);
    }
    catch (err) {
      console.error(`ERROR IN LISTEN\n${ex.stack}`);
    }
  });
})