const dbReady = require('lib/models').ready

const Text = require('lib/models').Text

const textsData = [
	{ "name": "home-subtitle", "text": "Muchas Gracias" },
	{ "name": "home-subtitle-text", "text": "a las 76.477 personas que con su voto decidieron los 66 proyectos en los que vamos a invertir $ 110.000.000 del Presupuesto Participativo de Vicente López en 2020." },
	{ "name": "home-video1-mp4", "text": "https://cldup.com/pQZlAEpzw0.mp4" },
	{ "name": "home-video1-webm", "text": "https://cldup.com/b5-PScfd-V.webm" },
	{ "name": "home-video2-mp4", "text": "https://cldup.com/w4RSGFJStA.mp4" },
	{ "name": "home-video2-webm", "text": "https://cldup.com/0Cy2GaQ-cR.webm" },
	{ "name": "home-icono1-imagen", "text": "https://i.ibb.co/Fgf5xgb/foros-vecinales-icono.png" },
	{ "name": "home-icono1-titulo", "text": "¿Qué es?" },
	{ "name": "home-icono1-texto", "text": "El Presupuesto Participativo es una iniciativa que permite a cada uno de los vecinos de los 9 barrios del municipio proponer, debatir y decidir a través del voto en qué utilizar una parte del presupuesto municipal de inversión." },
	{ "name": "home-icono2-imagen", "text": "https://i.ibb.co/9VjQQHy/icon-propuestas.png" },
	{ "name": "home-icono2-titulo", "text": "¿Qué puedo proponer?" },
	{ "name": "home-icono2-texto", "text": "Estamos evaluando todas las propuestas que recibimos de los vecinos. Las propuestas factibles se convertirán en proyectos que serán sometidos a una votación desde el lunes 16 hasta el domingo 29 de septiembre de 2019. Puede votar cualquier mayor de 16 años que viva o trabaje en Vicente López en las urnas habilitadas en los 9 barrios de Vicente López. Los proyectos ganadores serán ejecutados en 2020." },
	{ "name": "home-icono3-imagen", "text": "https://i.ibb.co/BttPHbc/icon-seguimiento.png" },
	{ "name": "home-icono3-titulo", "text": "¿Cómo sigo los proyectos?" },
	{ "name": "home-icono3-texto", "text": "Podés seguir de forma fácil la evolución de los proyectos ganadores del presupuesto participativo de 2017 y 2018 y conocer su ejecución entrando acá: " }
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
            reject(new SaltearPromises())
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
