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
  <p>El proyecto "${topic.mediaTitle}" ha sido actualizado.
  <br>Para ver los cambios, lo invitamos a ingresar al siguiente link:
  <br><a href="https://presupuestoparticipativo.vicentelopez.gob.ar/proyecto/${topic.id}">https://presupuestoparticipativo.vicentelopez.gob.ar/proyecto/${topic.id}</a></p>
  <p>Muchas gracias,</p>
  <p>PRESUPUESTO PARTICIPATIVO DE VICENTE LOPEZ</p>
`.toString()
