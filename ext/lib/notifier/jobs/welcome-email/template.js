const config = require('lib/config')
const utils = require('lib/utils')

const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw
// para inline-ar estilos css - https://github.com/Automattic/juice
const juice = require('juice');

const emailTemplate = require('ext/lib/notifier/responsive-html-email-template');
const buttonTemplate = require('ext/lib/notifier/responsize-email-button-template');

const baseUrl = utils.buildUrl(config)

module.exports = ({
  userName,
  validateUrl
}) => emailTemplate({
  body: html`
    <p>Hola <strong>${userName}</strong></p>
    <p>Por favor hacé click en el siguiente botón para terminar tu registro"</p>
    ${buttonTemplate({
      url: validateUrl,
      text: 'Validar cuenta'
    })}
    <p>Podrás informarte y comentar todos los proyectos del presupuesto participativo de Vicente López.</p>
    <p>Muchas gracias.</p>
    <p><i>PD: si no te diste de alta en <a href="${baseUrl}" target="_blank">${baseUrl}</a> podés ignorar este correo.</i></p>
  `
})
