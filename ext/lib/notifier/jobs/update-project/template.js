const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw

const styles = raw(`
  <style>
    p { margin: 0; }
  </style>
`)

module.exports = ({
  topic,
}) => html`
  ${styles}
  <p>${topic.authorName},</p>
  <p>¡El estado de tu proyecto "${topic.mediaTitle}" ha sido actualizado!
  <br>Podrás ver los cambios haciendo click acá:
  <br><a href="https://presupuestoparticipativo.vicentelopez.gob.ar/propuesta/topic/${topic.id}">https://presupuestoparticipativo.vicentelopez.gob.ar/propuesta/topic/${topic.id}</a></p>
  <p>Muchas gracias por tu aporte. ¡Sigamos mejorando juntos cada barrio de Vicente López!</p>
  <p>
    PRESUPUESTO PARTICIPATIVO DE VICENTE LOPEZ<br>
    #PresupuestoParticipativo #VLParticipa.<br>
    <a href="https://presupuestoparticipativo.vicentelopez.gob.ar">https://presupuestoparticipativo.vicentelopez.gob.ar/</a>   
  </p>
`.toString()
