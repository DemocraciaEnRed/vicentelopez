
require('lib/models')()

const ObjectID = require('mongoose').Types.ObjectId
const Tag = require('lib/models').Tag
const dbReady = require('lib/models').ready

const newTags = [
{ name:'  ACCESIBILIDAD', hash: 'accesibilidad', image: 'people', color: '#091A33' },
{ name:'ADULTOS MAYORES', hash: 'adultos-mayores', image: 'people', color: '#091A33' },
{ name:'MEDIO AMBIENTE', hash: 'medio-ambiente', image: 'people', color: '#091A33' },
{ name:'ANIMALES', hash: 'animales', image: 'people', color: '#091A33' },
{ name:'BARRIOS VULNERABLES', hash: 'barrios-vulnerables', image: 'people', color: '#091A33' },
{ name:'BASURA', hash: 'basura', image: 'people', color: '#091A33' },
{ name:'CIUDADANÍA', hash: 'ciudadanía', image: 'people', color: '#091A33' },
{ name:'CULTURA', hash: 'cultura', image: 'people', color: '#091A33' },
{ name:'DEPORTE', hash: 'deporte', image: 'people', color: '#091A33' },
{ name:'DISCAPACIDAD', hash: 'discapacidad', image: 'people', color: '#091A33' },
{ name:'EDUCACIÓN', hash: 'educación', image: 'people', color: '#091A33' },
{ name:'EMPLEO', hash: 'empleo', image: 'people', color: '#091A33' },
{ name:'ESPACIO PÚBLICO', hash: 'espacio-público', image: 'people', color: '#091A33' },
{ name:'ESPACIOS VERDES', hash: 'espacios-verdes', image: 'people', color: '#091A33' },
{ name:'HABITAT', hash: 'habitat', image: 'people', color: '#091A33' },
{ name:'ILUMINACIÓN', hash: 'iluminación', image: 'people', color: '#091A33' },
{ name:'INFRAESTRUCTURA', hash: 'infraestructura', image: 'people', color: '#091A33' },
{ name:'JÓVENES', hash: 'jóvenes', image: 'people', color: '#091A33' },
{ name:'OFICIOS', hash: 'oficios', image: 'people', color: '#091A33' },
{ name:'NIÑEZ', hash: 'niñez', image: 'people', color: '#091A33' },
{ name:'RAMPAS', hash: 'rampas', image: 'people', color: '#091A33' },
{ name:'RECICLAJE', hash: 'reciclaje', image: 'people', color: '#091A33' },
{ name:'SALUD', hash: 'salud', image: 'people', color: '#091A33' },
{ name:'SEGURIDAD', hash: 'seguridad', image: 'people', color: '#091A33' },
{ name:'SEMÁFOROS', hash: 'semáforos', image: 'people', color: '#091A33' },
{ name:'SEÑALIZACIÓN', hash: 'señalización', image: 'people', color: '#091A33' },
{ name:'SUSTENTABILIDAD', hash: 'sustentabilidad', image: 'people', color: '#091A33' },
{ name:'TRANSPORTE', hash: 'transporte', image: 'people', color: '#091A33' },
{ name:'VEREDAS', hash: 'veredas', image: 'people', color: '#091A33' },
{ name: 'CARAPACHAY', hash: 'carapachay', image: 'people', color: '#091A33' },
{ name: 'LA LUCILA', hash: 'la-lucila', image: 'people', color: '#091A33' },
{ name: 'MUNRO', hash: 'munro', image: 'people', color: '#091A33' },
{ name: 'OLIVOS', hash: 'olivos', image: 'people', color: '#091A33' },
{ name: 'VICENTE LOPEZ', hash: 'vicente-lopez', image: 'people', color: '#091A33' },
{ name: 'VILLA ADELINA', hash: 'villa-adelina', image: 'people', color: '#091A33' },
{ name: 'VILLA MARTELLI', hash: 'villa-martelli', image: 'people', color: '#091A33' },
{ name: 'FLORIDA ESTE', hash: 'florida-este', image: 'people', color: '#091A33' },
{ name: 'FLORIDA OESTE', hash: 'florida-oeste', image: 'people', color: '#091A33' },
] 

const mapPromises = (fn) => (array) => Promise.all( array.map(fn))
/**
 * Make any changes you need to make to the database here
 */
exports.up = function up (done) {
  dbReady()
    // .then(() => Tags. but Gmail couldn’t verify the actual source. Avoid clicking links or replying with sensitive information, unless you are sure that you actually sent this message. (No need to reset your password, the real sender does not actually have access to your account!collection.find({}).toArray())
    // .then(mapPromises(function (tags) {
    //   return Topic.collection.deleteMany({})
    // })
    .then(() => Tag.collection.deleteMany({}))
    .then(() => Tag.insertMany(newTags) )
    // .then( mapPromises(function(tags)) => return Tags.insertMany(newTags))
      // const action = {}
      // action.method = topic.votable ? 'vote' : ''
      // if (topic.votes) action.voteResults = topic.votes

      // action._id = new ObjectID()
      // return Topic.collection.findOneAndUpdate({ _id: topic._id }, {
      //   $unset: { votes: '', votable: '' }
      // }).then(() => Topic.collection.findOneAndUpdate({ _id: topic._id }, {
      //   $set: {
      //     action: action
      //   }
      // }))
    .then( function (results) {
      // const total = results.filter((v) => !!v).length
      console.log(`-- Eliminado y agregado los nuevos tags`)
      done();
    })
    .catch(function (err) {
      console.log('-- Actualizacion de tags no funcionó! Error: ', err)
      done(err);
    })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
