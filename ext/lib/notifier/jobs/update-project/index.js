const utils = require('democracyos-notifier/lib/utils')
const template = require('./template')

const jobName = 'update-project'

module.exports = function updateProject(notifier) {
  const { db, agenda, mailer } = notifier

  agenda.define(jobName, { priority: 'normal' }, updateProject)

  function updateProject(job, done) {
    const data = job.attrs.data
    try {
      const html = template({
        topic: data.topic,
      })
      mailer.send({
        to: data.topic.authorEmail,
        subject: `${data.topic.mediaTitle}: ¡Tu proyecto ha sido actualizado!`,
        html
      })
      done()
    } catch (err) {
      done()
    }
  }
}