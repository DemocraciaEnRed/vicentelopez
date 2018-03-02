const express = require('express')
const validate = require('lib/api-v2/validate')
const api = require('lib/api-v2/db-api')
const middlewares = require('lib/api-v2/middlewares')

const app = module.exports = express.Router()

const PROPOSALS_FORUM_NAME = 'anteproyectos'

class Error404 extends Error {
  constructor (id) {
    super(`Forum ${id} not found.`)

    this.status = 404
    this.code = 'FORUM_NOT_FOUND'
  }
}

app.post('/proposals',
middlewares.users.restrict,
validate({
  body: {
    title: {
      type: 'string',
      required: true
    },
    body: {
      type: 'string',
      required: true
    },
    tag: {
      type: 'string'
    }
  }
}),
(req, res, next) => {
  api.forums.find({ name: PROPOSALS_FORUM_NAME })
    .findOne()
    .exec()
    .then((forum) => {
      if (!forum) return next(new Error404(PROPOSALS_FORUM_NAME))

      req.forum = forum

      next()
    })
    .catch(next)
},
(req, res, next) => {
  api.topics.create({
    user: req.user,
    forum: req.forum
  }, req.body).then((topic) => {
    res.status(200).json({
      status: 200,
      results: {
        topic: topic
      }
    })
  }).catch(next)
})
