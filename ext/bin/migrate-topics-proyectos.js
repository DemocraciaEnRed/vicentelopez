#!/usr/bin/env node

const barrios = ['villa-martelli', 'villa-adelina', 'vicente-lopez', 'olivos', 'munro', 'la-lucila', 'florida-oeste', 'florida-este', 'carapachay']
const models = require('lib/models')()
const Forum = models.Forum
const Topic = models.Topic

Promise.all([Forum.find({ 'name': { $in: barrios } }).exec(), Forum.find({ 'name': 'proyectos' }).exec()])
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
    const changedTopics = topics.map((topic) => {
      const barrioName = barrios.find((barrio) => barrio.id === topic.forum.toString()).name
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
    return Promise.all(changedTopics)
  })
  .then((changedTopics) => { console.log('Proyectos actualizados!') })
  .catch((err) => { console.log(err) })

Promise.all([
  Forum.find({ 'name': 'proyectos' }).exec(),
  Forum.find({ 'name': 'propuestas' }).exec()
])
  .then(([[ proyectos ], [ propuestas ]]) => {
    return Topic.find({ 'forum': propuestas.id })
      .then((topics) => {
        return {
          topics: topics,
          forum: proyectos
        }
      })
  })
  .then(({ topics, forum }) => {
    const savedTopics = topics.map((topic) => {
      const topicDescription = () => {
        if (topic.attrs.solucion === undefined) {
          return topic.attrs.problema
        } else if (topic.attrs.solucion.length > 512) {
          return topic.attrs.solucion.substring(0, 509).concat('...')
        } else {
          return topic.attrs.solucion
        }
      }
      const topicContenido = () => {
        const clauses = [topic.attrs.problema, topic.attrs.solucion, topic.attrs.beneficios].filter((attr) => attr !== undefined)
        return clauses.join('')
      }
      topic.set('forum', forum.id)
      topic.set('attrs.anio', '2018')
      topic.set('attrs.budget', 0)
      topic.set('attrs.votes', 0)
      topic.set('attrs.description', topicDescription())
      topic.set('attrs.contenido', topicContenido())
      return topic.save()
    })
    return Promise.all(savedTopics)
  })
  .then((savedTopics) => { console.log('Propuestas actualizadas!') })
  .catch((err) => { console.log(err) })
