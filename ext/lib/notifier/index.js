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
      require('./jobs/subscriber-update-proposal'),
      require('./jobs/new-comment')
    ].forEach((job) => job(notifier))
    log('Ext notifier email jobs loaded')

    // esta línea saltéa el testeo y sigue con el programa normalmente
    return

    // puede ser una de: welcome-email, new-proposal, update-proposal, update-project,
    // subscriber-update-proposal, subscriber-update-project, new-comment o comment-reply
    const testMailJob = 'new-proposal'
    // cuenta a la cual le llegarán los emails
    const testMailAccount = 'bungew@gmail.com'
    // id usado para 'subscriber-update-X', tiene que estar en la DB
    const testMailUserId = '5e3c5cb34324aca40d6727d7'
    process.env.NOTIFICATIONS_MAILER_EMAIL = testMailAccount

    log(`Mandando email de testeo a ${testMailAccount}`)
    notifier.now(testMailJob, {
      topic: {
        id: '5e668613024049422bb22078',
        mediaTitle: '<Título>',
        authorName: '<Autorx>',
        authorEmail: testMailAccount,
        subscriber: testMailUserId,
        // para new-proposal
        nombre: '<Nombre y apellido>',
        documento: '<Documento>',
        telefono: '<Teléfono>',
        email: '<Email>',
        barrio: '<Barrio>',
        tags: ['<Tag 1>', '<Tag 2>'],
        problema: '<Problema>',
        solucion: '<Solución>',
        beneficios: '<Beneficios>'
      },
      userName: {
        firstName:'<Suscriptorx>',
        email: testMailAccount
      },
      // para welcome-email
      to: testMailAccount,
      validateUrl: 'https://validateUrl'
    }).then(()=> {
      // solo queremos testear el mail, no levantar el site
      throw new Error('¡Error para que no continuar! Solo queremos probar los mails.')
    })

  }).catch((err) => {
    console.error('Error loading ext/lib/notifier: ', err)
  })
}, 200)
