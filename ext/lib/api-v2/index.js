const express = require('express')

const app = module.exports = express()

app.use('/api/v2', require('./topics'))
app.use('/api/v2', require('./comments'))
