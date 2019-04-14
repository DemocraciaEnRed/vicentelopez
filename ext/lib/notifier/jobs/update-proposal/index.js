const utils = require('democracyos-notifier/lib/utils')
const template = require('./template')

const jobName = 'update-proposal'
const subject = 'Tu propuesta ha sido actualizada'

module.exports = function updateProposal(notifier) {
  const { db, agenda, mailer } = notifier

  agenda.define(jobName, { priority: 'normal' }, updateProposal)

  function updateProposal(job, done) {
    const data = job.attrs.data
    try {
      const html = template({
        topic: data.topic,
      })
      mailer.send({
        to: data.topic.authorEmail,
        subject,
        html
      })
      done()
    } catch (err) {
      done()
    }
  }
}