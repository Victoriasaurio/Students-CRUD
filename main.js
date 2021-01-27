const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const con = require('./repository/connection/connection')
const api = require('./routes/index')
require('dotenv').config()

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use('/v1', api)

con.connection()
.then(port => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)  
})
})  .catch(err => {
console.log('There is a problem with the connection', err)
})

module.exports = app