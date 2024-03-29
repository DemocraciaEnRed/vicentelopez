const api = require('lib/api-v2/db-api')
const topicScopes = require('lib/api-v2/db-api/topics/scopes')
const { notFound } = require('../errors')

exports.parseTags = (req, res, next) => {
  req.query.tags = req.query.tags.split(',').filter((t) => !!t)
  next()
}

exports.parseTag = (req, res, next) => {
  req.query.tag = req.query.tag.split(',').filter((t) => !!t)
  next()
}

exports.parseStates = (req, res, next) => {
  req.query.state = req.query.state.split(',').filter((t) => !!t)
  next()
}

exports.parseBarrios = (req, res, next) => {
  req.query.barrio = req.query.barrio.split(',').filter((t) => !!t)
  next()
}

exports.parseAnios = (req, res, next) => {
  if (req.query.anio) {
    req.query.anio = req.query.anio.split(',').filter((t) => !!t)
  }
  next()
}

exports.findForum = (req, res, next) => {
  api.forums.find({ name: req.query.forumName })
    .findOne()
    .exec()
    .then((forum) => {
      if (!forum) throw notFound('FORUM_NOT_FOUND')

      req.forum = forum

      next()
    })
    .catch(next)
}

const queryTopics = (opts) => {
  const {
    state,
    forum,
    tags,
    tag,
    barrio,
    anio,
    related
  } = opts
  const query = {
    forum: forum._id,
    publishedAt: { $ne: null }
  }
  if (barrio && barrio.length > 0) query['attrs.barrio'] = { $in: barrio }
  if (anio && anio.length > 0) query['attrs.anio'] = { $in: anio }
  // Este deberia de entrar tags pero no lo estamos usando, simplemente mandamos "tag" que es la categoria
  if (tags && tags.length > 0) query.tags = { $in: tags }
  if (tag && tag.length > 0) query.tag = { $in: tag }
  if (state && state.length > 0) query['attrs.state'] = { $in: state }
  if (related && related.length > 0) query['attrs.admin-comment-referencia'] = { $regex: `.*${related}.*` }
  return api.topics.find().where(query)
}

const sortMap = {
  barrio: 'attrs.barrio',
  newest: '-createdAt',
  popular: '-action.count'
}

exports.findTopics = (opts) => {
  const {
    forum,
    limit = 30,
    page = 1,
    sort,
    user,
  } = opts
  return queryTopics(opts)
    .populate(topicScopes.ordinary.populate)
    .sort(sortMap[sort])
    .select(topicScopes.ordinary.select)
    .limit(limit)
    .skip((page - 1) * limit)
    .exec()
    .then((topics) => Promise.all(topics.map((topic) => {
      return topicScopes.ordinary.expose(topic, forum, user)
    })))
}

exports.findTopicsCount = (opts) => queryTopics(opts).count().exec()
