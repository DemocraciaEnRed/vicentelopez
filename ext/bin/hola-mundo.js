#!/usr/bin/env node

const barrios = ['villa-martelli', 'villa-adelina', 'vicente-lopez', 'olivos', 'munro', 'la-lucila', 'florida-oeste', 'florida-este', 'carapachay']
const models = require('lib/models')()
const ObjectID = require('mongodb').ObjectID
const Forum = models.Forum
const Topic = models.Topic

const forumsArray = [
  Forum.find({ 'name': { $in: barrios } }).exec(),
  Forum.find({ 'name': 'proyectos' }).exec()
]

Promise.all(forumsArray)
  .then(([barrios, proyectos]) => {
    return Topic.find({})
      .then((topics) => {
        return {
          topics: topics,
          barrios: barrios,
          proyectos: proyectos
        }
      })
  })
  .then(({ barrios, proyectos, topics }) => {
    console.log(barrios, proyectos, topics)
  })
  .catch((err) => console.log(err))
