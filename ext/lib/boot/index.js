const express = require('express')


// Here you can add your custom Back-end routes

const app = module.exports = express()

require('ext/lib/notifier')

app.use(require('ext/lib/api'))
app.use(require('ext/lib/site/boot'))
