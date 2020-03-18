const config = require('lib/config')
const utils = require('lib/utils')

const html = require('es6-string-html-template').html
// para inline-ar estilos css - https://github.com/Automattic/juice
const juice = require('juice');

const emailTemplate = require('ext/lib/notifier/responsive-html-email-template');
const buttonTemplate = require('ext/lib/notifier/responsize-email-button-template');

const baseUrl = utils.buildUrl(config)

module.exports = ({
  topic,
}) => emailTemplate({
  body: html`
    <p><strong>${topic.authorName},</strong></p>
    <p>¡El estado de tu proyecto <strong>${topic.mediaTitle}</strong> ha sido actualizado!
    ${buttonTemplate({
      url: `${baseUrl}/proyecto/topic/${topic.id}`,
      text: 'Ver los cambios'
    })}
    <p>Muchas gracias por tu aporte.</p>
    <p>¡Sigamos mejorando juntos cada barrio de Vicente López!</p>
  `
})
