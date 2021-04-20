// DB Module Functions
const getDb = require('../db').getDb

/**
 *
 * @param {number} id
 * @param {number} limit
 * @returns
 */
function getGameHighScore (id, limit) {
  const db = getDb()

  return new Promise((resolve, reject) => {
    const prepStmt = 'select * from score where fk_gameid=? order by score desc limit ?'
    // Run query
    db.query(prepStmt, [id, parseInt(limit)], (error, result, fields) => {
      // Error Checking
      if (error) {
        console.log('breaking in getGameHighscore method in scoreController.')
        console.log(error)
        return reject(error)
      }
      // Was the game found
      if (!result) { return reject(new Error('Invalid id for game')) }
      // Return the email and row data (without password) merged
      return resolve(result)
    })
  })
}

/**
 * Function for submitting a score to the Score table in the DB
 * @param {number} gameid
 * @param {number} score
 * @param {string} initial
 * @returns promise
 */
function submitScore (gameid, score, initial) {
  const db = getDb()

  return new Promise((resolve, reject) => {
    const prepStmt = 'INSERT INTO score (scoreid, fk_gameid, score, initial) VALUES (?, ?, ?, ?)'
    const scoreid = null // will always be null for new score inserts
    // Run query
    db.query(prepStmt, [scoreid, gameid, score, initial], (error, result, fields) => {
      if (error) {
        console.log('breaking in getGameHighscore method in scoreController.')
        console.log(error)
        return reject(error)
      } else {
        return resolve(result)
      }
    })
  })
}

function getAllHighScores () {
  const db = getDb()

  return new Promise((resolve, reject) => {
    const prepStmt = 'SELECT g.gameid, g.title, g.filename MAX(s.score), s.initial FROM score s JOIN game g on s.fk_gameid = g.gameid GROUP BY g.gameid'

    db.query(prepStmt, (error, result) => {
      if (error) {
        console.log('Breaking in getAllHighScores in scoreController')
        console.log(error)
        return reject(error)
      } else {
        return resolve(result)
      }
    })
  })
}

module.exports = {
  getGameHighScore,
  submitScore,
  getAllHighScores
}
