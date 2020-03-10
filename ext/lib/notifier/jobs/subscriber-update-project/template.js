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
  topic, userName
}) => html`
  ${styles}
  <p>${userName},</p>
  <p>El proyecto "${topic.mediaTitle}" ha sido actualizado.
  <br>Podrás ver los cambios haciendo click acá:
  <br><a href="${baseUrl}/proyecto/topic/${topic.id}">${baseUrl}/proyecto/topic/${topic.id}</a></p>
  <p>¡Sigamos mejorando juntos cada barrio de Vicente López!</p>
  <p>
    PRESUPUESTO PARTICIPATIVO DE VICENTE LOPEZ<br>
    #PresupuestoParticipativo #VLParticipa.<br>
    <a href="${baseUrl}">${baseUrl}/</a>
  </p>
  <p><small>Usted está recibiendo este email porque se encuentra suscripto a los cambios del mismo</small></p>
`.toString()
