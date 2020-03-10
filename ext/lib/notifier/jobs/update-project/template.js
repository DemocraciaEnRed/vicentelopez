const config = require('lib/config')
const utils = require('lib/utils')
const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw

const styles = raw(`
  <style>
    p { margin: 0; }
  </style>
`)

const baseUrl = utils.buildUrl(config)

module.exports = ({
  topic,
}) => html`
  ${styles}
  <p>${topic.authorName},</p>
  <p>¡El estado de tu proyecto "${topic.mediaTitle}" ha sido actualizado!
  <br>Podrás ver los cambios haciendo click acá:
  <br><a href="${baseUrl}/proyecto/topic/${topic.id}">${baseUrl}/proyecto/topic/${topic.id}</a></p>
  <p>Muchas gracias por tu aporte. ¡Sigamos mejorando juntos cada barrio de Vicente López!</p>
  <p>
    PRESUPUESTO PARTICIPATIVO DE VICENTE LOPEZ<br>
    #PresupuestoParticipativo #VLParticipa.<br>
    <a href="${baseUrl}">${baseUrl}/</a>
  </p>
`.toString()
