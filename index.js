const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')

const loginRoutes = require('./login')
const forgotPasswordRoutes = require('./forgotpassword')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use('/login', loginRoutes)
app.use('/forgotPassword', forgotPasswordRoutes)
module.exports = app