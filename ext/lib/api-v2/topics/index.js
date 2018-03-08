const express = require('express')
const pick = require('lodash.pick')
const middlewares = require('lib/api-v2/middlewares')
const { isCitizenOnProposal } = require('../../proposals')

const app = module.exports = express.Router()

const EDITABLE_KEYS = [
  'forum',
  'mediaTitle',
  'tags',
  'attrs.nombre',
  'attrs.domicilio',
  'attrs.documento',
  'attrs.telefono',
  'attrs.email',
  'attrs.barrio',
  'attrs.problema',
  'attrs.solucion',
  'attrs.beneficios',
]

const defaultValues = () => ({
  'attrs.state': 'pendiente',
  tag: '59665fe8724f61003327eb2f'
})

// Only allow to edit specific keys when is a proposal
// and the users doesn't have forum privileges.
const purgeBody = (req, res, next) => {
  if (isCitizenOnProposal(req.user, req.forum)) {
    req.body = Object.assign(
      defaultValues(),
      pick(req.body, EDITABLE_KEYS)
    )
  }

  return next()
}

// continue to original DemocracyOS's Route
const goToNextRoute = (req, res, next) => next('route')

app.post('/topics',
middlewares.users.restrict,
middlewares.forums.findFromBody,
middlewares.forums.privileges.canCreateTopics,
purgeBody,
goToNextRoute)

app.put('/topics/:id',
middlewares.users.restrict,
middlewares.topics.findById,
middlewares.forums.findFromTopic,
middlewares.forums.privileges.canCreateTopics,
middlewares.topics.privileges.canEdit,
purgeBody,
goToNextRoute)
