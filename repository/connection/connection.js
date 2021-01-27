const mysql = require('mysql2/promise')
let conexion = null

async function connection() {
    conexion = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    })
    return conexion
}

function getConnection () {
    return conexion
}

module.exports = {
    connection,
    getConnection
}
