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
    // This was a pain to write. I recommend not touching this
    // STMT to get the maxScore of each game and it's corresponding game data
    const prepStmt = 'SELECT g.gameid, title, filename, s.score as maxScore, s.initial FROM score s INNER JOIN (SELECT fK_gameid, initial, MAX(score) as maxScore FROM score GROUP by fk_gameid) groupedScores ON s.fK_gameid = groupedScores.fk_gameid AND s.score = groupedScores.maxScore JOIN game g ON g.gameid = s.fk_gameid ORDER BY s.fk_gameid'

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
