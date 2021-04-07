// DB Module Functions
const getDb = require('../db').getDb;

/**
 * get game details
 */
function getGameDetails (id) {
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

/**
 * Makes call to DB to retrieve the positive_percentage rating of a game
 * @param {number} gameId id of game in the DB
 * @return promise with results of query
 */
function getOverallRating (gameId) {
    const db = getDb()

    return new Promise((resolve, reject) => {
        const prepStmt = 'SELECT (SUM(positive) / count(*) * 100.0) as positive_percent FROM rating GROUP BY fk_gameid HAVING fk_gameid=?;'

        db.query(prepStmt, gameid, (error, result, fields) => {
            if (error) {
                console.log('breaking in getOverallRating method in gameController.')
                reject(error)
            } else {
                if (!result) { return reject(new Error('Invalid id for gameId')) }
                return resolve(result)
            }
        })
    })
}

/**
 * Makes call to DB to add a new rating to Rating table for a specific game
 * @param {number} gameId id of game that is being rated
 * @param {boolean} positive was the rating positive or not
 * @return promise
 */
function rateGame (gameId, positive) {
    const db = getDb()

    return new Promise((resolve, reject) => {
        const prepStmt = 'INSERT INTO rating (ratingid, fk_gameid, positive, timestamp) VALUES (?,?,?,?);'
        const ratingId = null // always null for new inserts
        // Get a current timestamp in format for MySQL DB
        const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ')
        db.query(prepStmt, [ratingId, gameId, positive, dateTime], (error, result, fields) => {
            // Error Checking
            if (error) {
                console.log('breaking in rateGame method in gameController.')
                return reject(error)
            } else {
                if (!result) { return reject(new Error('Invalid id for gameId')) }
                return resolve(result)
            }
        })
    })
}


module.exports = {
    getGameDetails,
    getOverallRating,
    rateGame
}