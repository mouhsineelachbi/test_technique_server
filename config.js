require('dotenv').config()
const env = process.env;

const config  = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'todolist_hbs',
    }
}

module.exports = config;