const dotenv = require('dotenv')
const fs = require('fs'); // Allows for opening files

const env = process.env.NODE_ENV; // 'dev' or 'production'

if(env === 'dev') dotenv.config(); // only in dev environment do we use .env

// CONFIG FOR DEV ENVIRONMENT
const dev = {
    app: {
        port: parseInt(process.env.port) || 8080
    },
    db: {
        host: process.env.DEV_DB_HOST, 
        user: process.env.DEV_DB_USER, 
        password: process.env.DEV_DB_PASS, 
        database: process.env.DEV_DB_DEFAULT, 
        port: parseInt(process.env.DEV_DB_PORT), 
        ssl: { 
            ca: fs.readFileSync('BaltimoreCyberTrustRoot.crt.pem')
        }
    }
};

// TODO: How to handle ca for production
// CONFIG FOR PRODUCTION ENVIRONMENT
const prod = {
    app: {
        port: parseInt(process.env.port) || 8080
    },
    db: {
        host: process.env.PROD_DB_HOST, 
        user: process.env.PROD_DB_USER, 
        password: process.env.PROD_DB_PASS, 
        database: process.env.PROD_DB_DEFAULT,
        port: parseInt(process.env.PROD_DB_PORT),
        ssl: { 
            ca: fs.readFileSync('BaltimoreCyberTrustRoot.crt.pem')
        }
    }
}

// TODO: Create dev and prod versions & create test db in azure
const config = {
    dev,
    prod
}

module.exports = config[env];