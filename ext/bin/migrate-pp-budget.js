#!/usr/bin/env node

const models = require('lib/models')()
const Topic = models.Topic

Promise.all([
  Topic.find({ 'attrs.anio': '2018' }).exec()
])
.then(([topics]) => {
  
  const newBudget = (state) => {
    switch (state) {
   case 'preparacion':
   return 'attrs.project-budget-preparacion'
   break
   case 'compra':
   return 'attrs.project-budget-compra'
   break
   case 'ejecucion':
   return 'attrs.project-budget-ejecucion'
   case 'finalizado':
   return 'attrs.project-budget-finalizado'
   }
   }  
   const newTopics = topics.map((topic) => {
    topic.set(newBudget(topic.attrs.state), topic.attrs.budget)
    return topic.save()
  })

  return Promise.all([...newTopics])
})
.then((newTopics) => {
  console.log('Proyectos actualizados!')
  process.exit(0)
})
.catch((err) => {
    console.error(err)
    process.exit(1)
  })