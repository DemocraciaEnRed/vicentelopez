const express = require('express')

const app = module.exports = express()

app.get('/crear-anteproyecto', require('lib/site/layout'))
