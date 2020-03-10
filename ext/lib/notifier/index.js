const notifier = require('democracyos-notifier')
const log = require('debug')('democracyos:ext:notifier')

// Wait until the notifier is initialized
const interval = setInterval(function () {
  if (!notifier.mailer) return

  clearInterval(interval)

  notifier.init().then(() => {
    ;[
      require('./jobs/welcome-email'),
      require('./jobs/new-proposal'),
      require('./jobs/update-proposal'),
      require('./jobs/update-project'),
      require('./jobs/subscriber-update-project'),
      require('./jobs/subscriber-update-proposal')
    ].forEach((job) => job(notifier))
    log('Ext notifier email jobs loaded')

    // send test mail
    /*notifier.now('update-project', {
      topic: {
        id: '5e668613024049422bb22078',
        mediaTitle: 'Topic title placeholder',
        authorName: 'Authon name placeholder',
        authorEmail: 'test@email.com'
      }
    })*/
  }).catch((err) => {
    console.error('Error loading ext/lib/notifier: ', err)
  })
}, 200)
