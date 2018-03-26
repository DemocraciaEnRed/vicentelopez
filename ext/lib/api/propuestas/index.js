const { Router } = require('express')
const validate = require('lib/api-v2/validate')
const middlewares = require('lib/api-v2/middlewares')
const utils = require('./utils')

const app = Router()

const formats = {
  formats: {
    tags: /^([a-zA-Z0-9-_]+,?)+$/,
    barrio: /^[a-z0-9-]+$/
  }
}

app.get('/propuestas',
validate({
  query: Object.assign({}, validate.schemas.pagination, {
    tags: {
      type: 'string',
      format: 'tags',
      default: ''
    },
    state: {
      type: 'string',
      enum: ['pending', 'accepted', 'rejected'],
      default: 'pending'
    },
    barrio: {
      type: 'string',
      format: 'barrio'
    },
    sort: {
      type: 'string',
      enum: ['newest', 'popular'],
      default: 'newest'
    }
  })
}, { formats }),
utils.parseTags,
utils.findPropuestasForum,
middlewares.forums.privileges.canView,
(req, res, next) => {
  let opts = req.query
  opts.forum = req.forum

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
