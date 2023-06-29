const express = require('express')

const middlewares = require('lib/api-v2/middlewares')

const api = require('lib/db-api')

const utils = require('lib/utils')
const expose = utils.expose

const app = (module.exports = express.Router())

const goToNextRoute = (req, res, next) => next('route')

app.post('/data-file',
  middlewares.users.restrict,
  middlewares.forums.findFromBody,
  goToNextRoute)

app.put('/data-file/:id',
  middlewares.users.restrict, // restringe
  middlewares.dataFile.findById,
  goToNextRoute)

app.delete('/data-file/:id',
middlewares.users.restrict, // restringe
middlewares.dataFile.findById,
  goToNextRoute)

app.put('/data-file-update-order',
  middlewares.users.restrict, // restringe
  middlewares.forums.findFromBody,
  goToNextRoute
  )

app.get('/data-file-all', (req, res, next) => {
  try {
    api.dataFile.all(function (err, files) {
      if (err) return _handleError(err, req, res);
      res.status(200).json(files.map(expose('id title description publishedAt link order')))
    })
  } catch (err) {
    next(err)
  }
})
