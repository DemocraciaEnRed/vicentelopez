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
    const barriosIds = barrios.map((b) => b.id)
    return Topic.find({ forum: { $in: barriosIds } })
      .then((topics) => {
        return {
          topics: topics,
          barrios: barrios,
          proyectos: proyectos
        }
      })
  })
  .then(({ topics, barrios, proyectos }) => {
    proyectosId = proyectos[0].id
    topics.map((topic) => {
      const barrioName = barrios.find((barrio) => {
        if (barrio.id === topic.forum.toString()) return barrio
      }).name
      console.log('estado')
      console.log(topic.attrs.state)
      console.log('nombre barrio')
      console.log(barrioName)
      console.log('id de forum proyectos')
      console.log(proyectosId)
      topic.set('attrs.barrio', barrioName)
      topic.set('forum', proyectosId)
      return topic.save()
    })
  })
  .catch((err) => console.log(err))
