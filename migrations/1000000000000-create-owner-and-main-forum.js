
require('lib/models')()

const config = require('lib/config')
const ObjectID = require('mongoose').Types.ObjectId
const dbReady = require('lib/models').ready
const User = require('lib/models').User
const Forum = require('lib/models').Forum

const {adminMail, adminPass, forumProyectos} = config

const adminData = {
  email: adminMail,
  username: adminMail,
  firstName: 'Admin',
  //lastName: 'Apellido',
  password: adminPass,
  re_password: adminPass,
  locale: 'es'
  //reference: null,
}
const forumProyectosData = {
  name: forumProyectos,
  title: 'Proyectos',
  owner: null,
  //permissions: null,
  //body: null,
  //summary: null,
  //coverUrl: null
}
//new Forum().save(err => {})
//owner: req.user._id,

const mapPromises = (fn) => (array) => Promise.all( array.map(fn))
/**
 * Make any changes you need to make to the database here
 */
exports.up = function up (done) {
  dbReady()
    // Agregamos admin user a partir de variables de config/compose
    .then(() => {
      let adminUser = new User(adminData)
      adminUser.reference = adminData.reference
      adminUser.emailValidated = true
      return new Promise((resolve, reject) => {
        User.register(adminUser, adminData.password, function (err, user) {
          if (err) {
            console.error('add admin user failed at ', err)
            reject(new Error('add admin user failed'))
          }else{
            console.log('Saved admin user %s [%s]', user.email, user._id)
            resolve(user)
          }
        })
      })
    })
    // Agregamos forum principal (proyectos)
    .then((user) => {
      forumProyectosData.owner = user._id
      return new Promise((resolve, reject) => {
        let forumProyecto = new Forum(forumProyectosData)
        forumProyecto.save(err => {
          if (err) {
            console.error('add forum proyectos failed at ', err)
            reject(new Error('add forum proyectos failed'))
          }else{
            console.log('Saved forum proyectos [%s]', forumProyecto._id)
            resolve(forumProyecto)
          }
        })
      })
    })
    // Devolvemos al Migrator (de lib/migrations)
    .then(() => {
      console.log(`-- Agregados admin user y forum proyectos`)
      done();
    })
    .catch((err) => {
      console.log('-- Actualizacion de admin user y forum proyectos no funcionó! Error: ', err)
      done(err);
    })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
