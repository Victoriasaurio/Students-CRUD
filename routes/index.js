const express = require('express')
const app = express()

const students = require('./students.routes')

app.use('/students', students)

module.exports = app