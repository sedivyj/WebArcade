const dotenv = require('dotenv')
const fs = require('fs') // Allows for opening files
const path = require('path')

let env = process.env.NODE_ENV // 'dev' or 'production'
if (!env || env === 'development') {
  console.log('Using default environment because NODE_ENV is not set.')
  env = 'dev' // default environment
}
if (env === 'dev') dotenv.config() // only in dev environment do we use .env
console.log(`Environment: ${env}`)

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
      ca: fs.readFileSync(path.join(__dirname, '/ssl/BaltimoreCyberTrustRoot.crt.pem'))
    }
  }
}

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
      ca: fs.readFileSync(path.join(__dirname,'/ssl/BaltimoreCyberTrustRoot.crt.pem'))
    }
  }
}

const config = {
  dev,
  prod
}

module.exports = config[env]
