const express = require('express')

const app = module.exports = express()

require('ext/lib/notifier')

app.use(require('ext/lib/api'))
app.use(require('ext/lib/site/boot'))
