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
    topics.map((topic) => {
      console.log(topic.forum)
      console.log(typeof(topic.forum))
      const barrioName = barrios.find((barrio) => {
        console.log(barrio.id)
        console.log(typeof(barrio.id))
        if (barrio.id === topic.forum) return barrio })
      console.log(barrioName)
      // topic.set('attrs.barrio', barrioName)
      //   .set('forum', proyectos.id)
      // console.log(topic.attrs.barrio, topic.forum)
      // return topic.save()
    })
  })
  .catch((err) => console.log(err))
