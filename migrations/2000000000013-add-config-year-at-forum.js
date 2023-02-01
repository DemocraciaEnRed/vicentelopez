const dbReady = require('lib/models').ready

const Forum = require('lib/models').Forum
const config = require('lib/config')

/**
 * Make any changes you need to make to the database here
 */
class SaltearPromises { }
exports.up = function up (done) {
  dbReady()
  .then(() => {
    return new Promise((resolve, reject) => {
      Forum.findOne({ name: 'proyectos' }, (err, forumProyecto) => {
        if (err) reject(new Error(err))
        if (!forumProyecto) reject(new Error('No forum proyectos in it found'))

        forumProyecto.config.filterYear = '2018,2019,2020,2022,2023'
        

        Forum.collection.save(forumProyecto, (err) => {
          if (err) reject(new Error(err))
          resolve()
        })
      })
    })
  })
  // Devolvemos al Migrator (de lib/migrations)
  .then(() => {
    console.log(`-- Agregando años para los filtros por años en el forum config`)
    done()
  })
  .catch((err) => {
    if (err instanceof SaltearPromises) {
      done()
    } else {
      console.log('-- Agregando años para los filtros por años en el forum confg no funcionó! Error: ', err)
      done(err)
    }
  })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down (done) {
  done()
}
