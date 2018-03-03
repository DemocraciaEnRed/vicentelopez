const express = require('express')

const app = module.exports = express()

app.get('/crear-propuesta', require('lib/site/layout'))
