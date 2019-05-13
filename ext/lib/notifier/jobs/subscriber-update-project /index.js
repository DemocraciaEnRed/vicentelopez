const utils = require('democracyos-notifier/lib/utils')
const template = require('./template')

const jobName = 'subscriber-update-project'

module.exports = function subscriberUpdateProject(notifier) {
  const { db, agenda, mailer } = notifier

  agenda.define(jobName, { priority: 'normal' }, subscriberUpdateProject)

  function subscriberUpdateProject(job, done) {
    const data = job.attrs.data
    const subscribers = data.topic.subscribers;
    // TODO: get subscribers emails
    
    try {
      const html = template({
        topic: data.topic, 
        userName: 'Nombre de usuario'//todo: add userName
      })
      mailer.send({
        to: data.topic.authorEmail, //TODO: change for subscribers
        subject: `El proyecto ${data.topic.mediaTitle} ha sido actualizado`,
        html
      })
      done()
    } catch (err) {
      done()
    }
  }
}