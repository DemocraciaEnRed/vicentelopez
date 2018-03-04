const express = require('express')

const app = module.exports = express()

app.get('/formulario-propuesta', require('lib/site/layout'))
