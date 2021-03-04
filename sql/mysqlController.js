// DB Module Functions
const getDb = require('../db').getDb;

/**
 * get game details
 */
function getGameDetails (id){
    // Get DB Connection Object
    const db = getDb();

    return new Promise((resolve, reject) => {
        db.get(
          `SELECT * FROM game WHERE gameid=$id;`, { $id: id },
          (err, row) => {
            // Check if an error occurred
            if (err) { return reject(err) }
    
            // Was the game found
            if (!row) { return reject(new Error('Invalid id for game')) }
    
            // Return the email and row data (without password) merged
            return resolve({ ...row })
        })
    })
}

module.exports = {getGameDetails}