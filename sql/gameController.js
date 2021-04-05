// DB Module Functions
const getDb = require('../db').getDb;

/**
 * get game details
 */
function getGameDetails(id) {
  // Get DB Connection Object
  const db = getDb();

  return new Promise((resolve, reject) => {
    // Run query
    const prepStmt = 'SELECT * FROM game WHERE gameid=?;'

    db.query(prepStmt, id, (error, result, fields) => {
      // Error Checking
      // Check if an error occurred
      if (error) {
        console.log("is this where its breaking?")
        return reject(error)
      }
      // Was the game found
      if (!result) { return reject(new Error('Invalid id for game')) }

      // Return the email and row data (without password) merged
      return resolve(result)
    })
  })
}

function getAllGameURLparams(id) {
  // Get DB Connection Object
  const db = getDb();

  return new Promise((resolve, reject) => {
    // Run query
    const prepStmt = 'SELECT gameid, filename, title FROM game ORDER BY gameid ASC';
    db.query(prepStmt, id, (error, result, fields) => {
      if (error) {
        console.log("ERROR getting all games");
        return reject(error);
      }
      // Was the game found
      if (!result) { return reject(new Error('Invalid id for game')) }

      // Return the email and row data (without password) merged
      return resolve(result)
    })
  })
}

function getAbridgedGameDetails(id) {
  // Get DB Connection Object
  const db = getDb();

  return new Promise((resolve, reject) => {
    // Run query
    const prepStmt = 'SELECT title, creator FROM game WHERE gameid=?;'

    db.query(prepStmt, id, (error, result, fields) => {
      // Error Checking
      // Check if an error occurred
      if (error) {
        console.log("is this where its breaking?")
        return reject(error)
      }
      // Was the game found
      if (!result) { return reject(new Error('Invalid id for game')) }

      // Return the email and row data (without password) merged
      return resolve(result)
    })
  })
}

function getTop10GameScores(id) {
  const db = getDb();
  return new Promise((resolve, reject) => {
    const prepStmt = 'select initial, score from score where fk_gameid=? order by score desc limit 10'
    db.query(prepStmt, id, (error, result, fields) => {
      // Error Checking
      // Check if an error occurred
      if (error) {
        console.log("is this where its breaking?")
        return reject(error)
      }
      // Was the game found
      if (!result) { return reject(new Error('Invalid id for game')) }

      // Return the email and row data (without password) merged
      return resolve(result)
    })
  })
}

module.exports = { getGameDetails, getAbridgedGameDetails, getTop10GameScores, getAllGameURLparams }
