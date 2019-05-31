const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw

const styles = raw(`
  <style>
    p { margin: 0; }
  </style>
`)

module.exports = ({
  topic, userName
}) => html`
  ${styles}
  <p>${userName},</p>
  <p>El proyecto "${topic.mediaTitle}" ha sido actualizado.
  <br>Podrás ver los cambios haciendo click acá:
  <br><a href="https://presupuestoparticipativo.vicentelopez.gob.ar/proyecto/topic/${topic.id}">https://presupuestoparticipativo.vicentelopez.gob.ar/proyecto/topic/${topic.id}</a></p>
  <p>¡Sigamos mejorando juntos cada barrio de Vicente López!</p>
  <p>
    PRESUPUESTO PARTICIPATIVO DE VICENTE LOPEZ<br>
    #PresupuestoParticipativo #VLParticipa.<br>
    <a href="https://presupuestoparticipativo.vicentelopez.gob.ar">https://presupuestoparticipativo.vicentelopez.gob.ar/</a>   
  </p>
  <p><small>Usted está recibiendo este email porque se encuentra suscripto a los cambios del mismo</small></p>
`.toString()
