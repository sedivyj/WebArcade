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


module.exports = {getGameDetails}