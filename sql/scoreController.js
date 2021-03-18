// DB Module Functions
const getDb = require('../db').getDb;

function getGameHighScore (id) {

    const db = getDb();

    return new Promise((resolve, reject) => {

        const prepStmt = 'SELECT score.* FROM score WHERE score = ( SELECT MAX(score) FROM score)'
        // Run query
        db.query(prepStmt, id, (error, result, fields) => {
            // Error Checking
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

function getGameLeaderboard (id) {

    const db = getDb();

    return new Promise((resolve, reject) => {

        const prepStmt = 'select * from score where fk_gameid=1 order by score desc limit 5'
        // Run query
        db.query(prepStmt, id, (error, result, fields) => {
            // Error Checking
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


module.exports = {getGameHighScore}