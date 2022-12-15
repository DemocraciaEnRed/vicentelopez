const dbReady = require('lib/models').ready

const Text = require('lib/models').Text

const textsData = [
	{ "name": "info-reglamento-pdf", "text": "https://celeste.blob.core.windows.net/pp-vicentelopez/assets/reglamento-pp-vicente-lopez-2022.pdf" },
	{ "name": "info-votar-pdf", "text": "https://celeste.blob.core.windows.net/pp-vicentelopez/assets/como-votar-ppvl-2022.pdf" },
  { "name": "info-reuniones-pdf", "text": "/ext/lib/site/static-pages/flyer-reuniones-pp-2023.png" },
  { "name": "propuestas-reglamento-text", "text": "<ul><li id='ql-line-1'>Serán factibles las propuestas de obras o equipamiento para entidades sin fines de lucro (polideportivos, sociedades de fomento, centros de jubilados, espacios públicos, escuelas de gestión pública, centros de salud municipales, etc).</li><li>Serán factibles campañas o talleres sobre un tema específico cuya ejecución sólo sea durante el 2023.</li><li>No serán factibles las propuestas que impliquen un gasto corriente (recursos humanos que incrementen la planta municipal).</li><li>Cada propuesta se debe presentar para un solo barrio. (No se puede presentar una propuesta para todo el Municipio)</li><li>El presupuesto máximo de la propuesta no puede superar los $ 6.000.000.</li></ul>" },
  { "name": "projects-titleVotFin-text", "text": "Proyectos Ganadores 2023" },
  { "name": "projects-subtitleVotFin-text", "text": "Acá podés encontrar los proyectos a ejecutar en 2023" },

]

/**
 * Make any changes you need to make to the database here
 */
class SaltearPromises { }
exports.up = function up (done) {
  dbReady()
    // Primero chequear si ya no hay cosas cargadas
    .then(() => {
      return new Promise((resolve, reject) => {
        Text.collection.count({}, (err, count) => {
          if (err) reject(new Error(err))
          if (count) {
            console.log('Ya hay textos de portada cargados (%s), salteando migración', count)
           
          }
          resolve()
        })
      })
    })
    // Agregamos textos
    .then(() => Text.collection.insertMany(textsData))
    // Devolvemos al Migrator (de lib/migrations)
    .then(() => {
      console.log(`-- Agregados textos de portada`)
      done()
    })
    .catch((err) => {
      if (err instanceof SaltearPromises)
        done()
      else{
        console.log('-- Actualizacion de textos de portada no funcionó! Error: ', err)
        done(err)
      }
    })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
