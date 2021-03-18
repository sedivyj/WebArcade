// DB Module Functions
const getDb = require('../db').getDb;

function getGameHighScore (id, limit) {
    const db = getDb();

    return new Promise((resolve, reject) => {

        const prepStmt = 'select * from score where fk_gameid=? order by score desc limit ?'
        // Run query
        db.query(prepStmt, [id, parseInt(limit)], (error, result,  fields) => {
            // Error Checking
            if (error) { 
                console.log("is this where its breaking?")
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


module.exports = {getGameHighScore}