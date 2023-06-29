const dbReady = require('lib/models').ready

const dataFile = require('../lib/models').dataFile

const dataFiles = [
{ 'order': 0, 'title': 'Proyectos 2013-2023 por tipo (cantidad e inversión)', 'description':'Datos históricos de la cantidad de proyectos e inversión presupuestaria segmentado por temática.', 'publishedAt': 'Marzo de 2023', 'link': 'https://celeste.blob.core.windows.net/pp-vicentelopez/informes/proyectos-2013-2020_tipo-cantidad-inversion.xlsx' },
{ 'order': 1, 'title': 'Información sobre participación 2012-2019', 'description':'Datos de la cantidad de participantes, votantes por barrio y ratio con datos de población desde 2012 a 2019.', 'publishedAt': 'Marzo de 2020', 'link': 'https://celeste.blob.core.windows.net/pp-vicentelopez/informes/informacion_participacion.xlsx' },
{ 'order': 2, 'title': 'Resultados de la votación 2017', 'description':'Detalle de los proyectos ganadores en la votación de 2017. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.', 'publishedAt': 'Octubre de 2017', 'link': 'https://celeste.blob.core.windows.net/pp-vicentelopez/informes/resultados-escrutinio-2017.xlsx' },
{ 'order': 3, 'title': 'Resultados de la votación 2018', 'description':'Detalle de los proyectos ganadores y no ganadores en la votación de 2018. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.', 'publishedAt': 'Noviembre de 2018', 'link': 'https://celeste.blob.core.windows.net/pp-vicentelopez/informes/resultados-escrutinio-2018.xlsx' },
{ 'order': 4, 'title': 'Resultados de la votación 2019', 'description':'Detalle de los proyectos ganadores y no ganadores en la votación de 2019. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.', 'publishedAt': 'Noviembre de 2019', 'link': 'https://celeste.blob.core.windows.net/pp-vicentelopez/informes/Escrutinio-2019.xlsx' },
{ 'order': 5, 'title': 'Resultados de la votación 2021', 'description':'Detalle de los proyectos ganadores y no ganadores en la votación de 2021. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.', 'publishedAt': 'Noviembre de 2021', 'link': 'https://celeste.blob.core.windows.net/pp-vicentelopez/informes/Escrutinio-2021.xlsx' },
{ 'order': 6, 'title': 'Resultados de la votación 2022', 'description':'Detalle de los proyectos ganadores y no ganadores en la votación de 2022. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.', 'publishedAt': 'Noviembre de 2022', 'link': 'https://celeste.blob.core.windows.net/pp-vicentelopez/informes/Escrutinio-2022.xlsx' },

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
        dataFile.collection.count({}, (err, count) => {
          if (err) reject(new Error(err))
          if (count) {
            console.log(count);
            console.log('Ya hay (%s) preguntas y respuestas cargadas', count)
            reject(new SaltearPromises())
          }
          resolve()
        })
      })
    })
    // Agregamos preguntas y respuestas
    .then(() => dataFile.collection.insertMany(dataFiles))
    // Devolvemos al Migrator (de lib/migrations)
    .then(() => {
      console.log(`-- agregando archivos para la descarga en la seccion datos`)
      done()
    })
    .catch((err) => {
      if (err instanceof SaltearPromises) {
        done()
      } else {
        console.log('-- Actualizacion de acerca de no funcionó! Error: ', err)
        done(err)
      }
    })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done()
}
