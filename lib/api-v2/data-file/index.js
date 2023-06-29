const express = require('express')
const middlewares = require('../middlewares')
const api = require('../../db-api')

const app = module.exports = express.Router()

app.post('/data-file',
middlewares.users.restrict,
middlewares.forums.findFromBody,
middlewares.forums.privileges.canEdit,
function postDataFile (req, res, next) {
  api.dataFile.create({
    user: req.user,
    forum: req.forum,
    file: {
      title: req.body.title,
      description: req.body.description,
      publishedAt: req.body.publishedAt,
      link: req.body.link
    }
  }).then((file) => {
    res.status(200).json({
      status: 200,
      results: {
        file: file
      }
    })
  }).catch(next)
})

app.put('/data-file/:id',
middlewares.users.restrict,
middlewares.forums.findFromBody,
middlewares.dataFile.findById,
middlewares.forums.privileges.canEdit,
function postDataFile (req, res, next) {
  api.dataFile.edit({
    user: req.user,
    forum: req.forum,
    file: req.file
  }, req.body).then((dataFile) => {
    res.status(200).json({
      status: 200,
      results: {
        dataFile: dataFile
      }
    })
  }).catch(next)
})

app.delete('/data-file/:id',
  middlewares.users.restrict,
  middlewares.forums.findFromBody,
  middlewares.dataFile.findById,
  middlewares.forums.privileges.canEdit,

  function postDataFile (req, res, next) {
    api.dataFile.deleteOne({
      user: req.user,
      forum: req.forum,
      file: req.file
    }).then((dataFile) => {
      res.status(200).json({
        status: 200,
        results: {
          dataFile: dataFile
        }
      })
    }).catch(next)
  })

app.put('/data-file-update-order',
  middlewares.users.restrict,
  middlewares.forums.findFromBody,
  middlewares.dataFile.findAll,
  middlewares.forums.privileges.canEdit,
  (req, res, next) => {
    api.dataFile.updateMany({
      user: req.user,
      forum: req.forum,
      files: req.files
    }, req.body.data).then((dataFile) => {
      res.status(200).json({
        status: 200,
        results: {
          dataFile: dataFile
        }
      })
    }).catch(next)
  }
)
