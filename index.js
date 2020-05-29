const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const loginRoutes = require('./login')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/login', loginRoutes)

module.exports = app