const express = require('express')

const app = module.exports = express()

app.use(require('./topics'))
app.use(require('./topics/xlsx'))
app.use(require('./about'))
app.use(require('./data-file'))