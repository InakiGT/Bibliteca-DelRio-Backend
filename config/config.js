require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
}

module.exports = config;