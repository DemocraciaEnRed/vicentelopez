const { Router } = require('express')
const validate = require('lib/api-v2/validate')
const middlewares = require('lib/api-v2/middlewares')
const utils = require('./utils')

const app = Router()

const allowedForums = ['propuestas', 'proyectos']

const formats = {
  formats: {
    tags: /^([a-zA-Z0-9-_]+,?)+$/,
    barrio: /^[a-z0-9-]+$/,
    ano: /[0-9]+/
  }
}

app.get('/topics',
validate({
  query: Object.assign({}, validate.schemas.pagination, {
    forumName: {
      type: 'string',
      enum: allowedForums,
      required: true
    },
    tags: {
      type: 'string',
      format: 'tags',
      default: ''
    },
    state: {
      type: 'string',
      format: 'states',
      default: 'pendiente,factible,no-factible'
    },
    barrio: {
      type: 'string',
      format: 'barrio'
    },
    ano: {
      type: 'string',
      format: 'ano'
    },
    sort: {
      type: 'string',
      enum: ['newest', 'popular'],
      default: 'newest'
    }
  })
}, { formats }),
utils.parseTags,
utils.findForum,
utils.parseStates,
middlewares.forums.privileges.canView,
(req, res, next) => {
  const opts = Object.assign({}, req.query)
  opts.forum = req.forum
  opts.user = req.user

  Promise.all([
    utils.findTopics(opts),
    utils.findTopicsCount(opts)
  ]).then(([topics, count]) => {
    res.status(200).json({
      status: 200,
      pagination: {
        count,
        page: opts.page,
        pageCount: Math.ceil(count / opts.limit) || 1,
        limit: opts.limit
      },
      results: {
        topics: topics
      }
    })
  }).catch(next)
})

module.exports = app
