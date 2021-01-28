const mysql = require('mysql2/promise')

async function connection() {
    return mysql.createConnection({
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    })
}

function getConnection () {
    return connection()
}

module.exports = {
    connection,
    getConnection
}
