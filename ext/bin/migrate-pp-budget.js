#!/usr/bin/env node

const models = require('lib/models')()
const Topic = models.Topic

Promise.all([
  Topic.find({ 'attrs.anio': '2018' }).exec()
])
.then(([topics2018]) => {
  const newBudgetState = topics2018.map((topic) => {

    const changeState = (state) => {
      let newState = null
      switch (state) {
        case 'preparacion':
        newState = 'project-budget-preparacion'
        break
        case 'compra':
        newState = 'project-budget-compra'
        break
        case 'ejecucion':
        newState = 'project-budget-ejecucion'
        break
        case 'finalizado':
        newState = 'project-budget-finalizado'
      }
      return newState
    }
    const newTopics = topics.map((topic) => {
      topic.set(changeState(topic.attrs.state), topic.attrs.budget)
      return topic.save()
    })
  })
  
  
  return Promise.all([...newBudgetState])
})
.then((newTopics) => {
  console.log('Topics actualizados!')
  process.exit(0)
})
.catch((err) => {
    console.error(err)
    process.exit(1)
  })











/*
const models = require('lib/models')()
const Topic = models.Topic

Promise.all([
  Topic.find({ 'attrs.anio': '2018' }).exec()
])
.then(([topics]) => {
  
  const newBudget = (state) => {
    let newState = null
    switch (state) {
   case 'preparacion':
   newState = 'attrs.project-budget-preparacion'
   break
   case 'compra':
   newState = 'attrs.project-budget-compra'
   break
   case 'ejecucion':
   newState = 'attrs.project-budget-ejecucion'
   break
   case 'finalizado':
   newState = 'attrs.project-budget-finalizado'
   }
   return newState

   }  

   const newTopics = topics.map((topic) => {
    topic.set(newBudget(topic.attrs.state), topic.attrs.budget)
    return topic.save()
  })

  return Promise.all(newTopics)
})
.then((newTopics) => {
  console.log('Proyectos actualizados!')
  process.exit(0)
})
.catch((err) => {
    console.error(err)
    process.exit(1)
  })

  */