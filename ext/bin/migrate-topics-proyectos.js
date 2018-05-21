#!/usr/bin/env node

const barrios = ['villa-martelli', 'villa-adelina', 'vicente-lopez', 'olivos', 'munro', 'la-lucila', 'florida-oeste', 'florida-este', 'carapachay']
const models = require('lib/models')()
const ObjectID = require('mongodb').ObjectID
const Forum = models.Forum
const Topic = models.Topic

Promise.all([ Forum.find({ 'name': { $in: barrios } }).exec(), Forum.find({ 'name': 'proyectos' }).exec()])
  .then(([barrios, [ proyectos ]]) => {
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
    topics.map((topic) => {
      console.log(topic.attrs.description)
      console.log(typeof (topic.attrs.description))
      const barrioName = barrios.find((barrio) => {
        if (barrio.id === topic.forum.toString()) return barrio
      }).name
      const changeState = (state) => {
        let newState = null
        switch (state) {
          case 'pendiente':
            newState = 'factible'
            break
          case 'proyectado':
            newState = 'ganador'
            break
          case 'perdedor':
            newState = 'no-ganador'
        }
        return newState
      }
      topic.set('attrs.barrio', barrioName)
      topic.set('forum', proyectos.id)
      topic.set('attrs.state', changeState(topic.attrs.state))
      return topic.save()
    })
  })
  
Promise.all([
  Forum.find({ 'name': 'proyectos' }).exec(),
  Forum.find({ 'name': 'propuestas' }).exec()
])
  .then(([[ proyectos ], [ propuestas ]]) => {
    return Topic.find({ 'forum': propuestas.id, 'attrs.state': 'factible' })
      .then((topics) => {
        return {
          topics: topics,
          forum: proyectos
        }
      })
  })
  .then(({ topics, forum }) => {
    topics.map((topic) => {
      topic.set('forum', forum.id)
      topic.set('attrs.anio', 2018)
      topic.set('attrs.budget', 0)
      topic.set('attrs.votes', 0)
      topic.set('attrs.description', () => {
        if (topic.attrs.solucion === undefined) {
          return topic.attrs.problema
        } else if (topic.attrs.solucion.length > 512) {
          return topic.attrs.solucion.substring(0, 509).concat('...')
        } else {
          return topic.attrs.solucion
        }
      })
      return topic.save()
    })
  })
  .catch((err) => { console.log(err) })
