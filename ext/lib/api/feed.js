const express = require('express')
const Forum = require('lib/api-v2/db-api').forums
const Topic = require('lib/models').Topic
const scopes = require('lib/api-v2/db-api/topics/scopes')
const ObjectID = require('mongodb').ObjectID
const privileges = require('lib/privileges/forum')

const app = module.exports = express()

app.get('/',
function getFeed (req, res, next) {
  const s = +req.query.s || 0
  let forumsNames = ['villa-martelli', 'villa-adelina', 'vicente-lopez', 'olivos', 'munro', 'la-lucila', 'florida-oeste', 'florida-este', 'carapachay']
  Forum.find({ name: { $in: forumsNames } })
    .then((forumsM) => {
      Topic.aggregate([
        { $match: {
            forum: { $in: forumsM.map((f) => f._id) },
            deletedAt: null,
            $or: [{closingAt: { $exists: false }}, {closingAt: { $gt: (new Date())}}]
        }},
        { $sort: { 'createdAt': -1 } },
        { $sort: { 'participantsCount': -1 } },
        { $group: { _id: '$forum', topics: { $push: '$$ROOT' } } },
        { $project: { best_topics: { $slice: [ '$topics', s, 2 ] } } },
        { $unwind: '$best_topics' }
      ], function (err, topicsM) {
        if (err) {
          res.json({ result: null, error: err })
        } else {
          const topicsIds = topicsM.map((topic) => ObjectID(topic.best_topics._id))
          Topic.find({ _id: { $in: topicsIds } })
            .populate(scopes.ordinary.populate)
            .select(scopes.ordinary.select).exec()
            .then((topics) => topics.map((topic) => {
              return scopes.ordinary.expose(topic, forumsM.find((f) => f._id.toString() === topic.forum.toString()), req.user)
            }))
            .then((topics) => Promise.all(topics))
            .then((topics) => {
              const forums = forumsM.map((f) => {
                let forum = f.toJSON()
                forum.privileges = privileges.all(f, req.user)
                return forum
              })
              res.json({ result: { topics, forums } })
            })
            .catch((err) => {
              res.json({ result: null, error: err })
            })
        }
      })
    })
    .catch((err) => {
      res.json({ result: null, error: err })
    })
})
