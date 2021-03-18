const mysql = require('mysql'); // Driver for connecting to DB
const db_config = require('./config.js')?.db;
const assert = require("assert");

let _db; // Database connection object

// TODO: Create Config file to hide credentials
// Initializes Db connection in singleton pattern
function initDb(callback) {
    // undfined check for checking if DB connection exists
    if (_db) {
        console.warn("Trying to initialize Db connection again!");
        return callback(null, _db);
    }

    if (!db_config?.host)
        throw 'Invalid DB host. Did you set up your .env file?';

    _db = mysql.createPool(db_config);

    // Establish connection with callback checking if there were errors
    _db.getConnection((err) => {
        if (err) {
            console.log(`Error connecting to db\n${err.stack}`);
            _db = undefined; // Make undefined
        }
    });

    return callback(null, _db);
}

// Returns Db connection object
function getDb() {
    // if undefined/falsy -> message gets displayed
    assert.ok(_db, "Db has not been initialized. Please call initDb first.")
    return _db;
}

module.exports = {
    getDb,
    initDb
};