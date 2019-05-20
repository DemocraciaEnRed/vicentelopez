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
  <p>Llego una nueva propuesta "${topic.mediaTitle}" al presupuesto participativo de Vicente López.</p>
  <br />
  <h1>${topic.mediaTitle}</h1>
  <p>
  Nombre y apellido: ${topic.nombre}<br>
  Documento: ${topic.documento}<br>
  Telefono: ${topic.telefono}<br>
  Email: ${topic.email}<br>
  </p>
  <h1>Barrio</h1>
  <p>${topic.barrio}</p>
  <h1>Tags</h1>
  <p>${topic.tags.join(', ')}</p>
  <h1>Problema</h1>
  <p>${topic.problema}</p>
  <h1>Solución</h1>
  <p>${topic.solucion}</p>
  <h1>Beneficios</h1>
  <p>${topic.beneficios}</p>
  <br />
  <p>Muchas gracias,</p>
  <p>PRESUPUESTO PARTICIPATIVO DE VICENTE LOPEZ</p>
`.toString()
