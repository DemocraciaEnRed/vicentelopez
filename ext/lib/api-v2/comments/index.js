const express = require('express')
const pick = require('lodash.pick')
const middlewares = require('lib/api-v2/middlewares')
const { isCitizenOnProposal } = require('../../proposals')

const app = module.exports = express.Router()

const EDITABLE_KEYS = ['mediaTitle', 'clauses', 'tag', 'forum']

// Only allow to edit specific keys when is a proposal
// and the users doesn't have forum privileges.
const purgeBody = (req, res, next) => {
  if (isCitizenOnProposal(req.user, req.forum)) {
    req.body = pick(EDITABLE_KEYS, req.body)
  }

  return next()
}

// continue to original DemocracyOS's Route
const goToNextRoute = (req, res, next) => next('route')

app.post('/topics',
middlewares.users.restrict,
middlewares.forums.findFromBody,
purgeBody,
goToNextRoute)

app.put('/topics/:id',
middlewares.users.restrict,
middlewares.topics.findById,
middlewares.forums.findFromTopic,
purgeBody,
goToNextRoute)
