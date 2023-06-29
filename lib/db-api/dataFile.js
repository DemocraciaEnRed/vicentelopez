const debug = require('debug')
const log = debug('democracyos:ext:db-api:text')

const utils = require('lib/utils')
const { object } = require('prop-types')
const dataFile = require('lib/models').dataFile
const pluck = utils.pluck

function find (query) {
  return dataFile.find(Object.assign({
    deletedAt: null
  }, query))
}

function setAttributes (attrs, model) {
  Object.keys(attrs).forEach((key) => {
    model.set(key, attrs[key])
  })

  return model
}

function autoIncrement () {
  return dataFile.find().sort('-order').limit(1).then((file) => file[0].order + 1)
}

exports.find = function find (query) {
  return dataFile.find(Object.assign(query))
}

exports.create = function create (opts, attrs) {
  log('creating new files')

  const fileToCreate = {
      title : opts.file.title,
      description : opts.file.description,
      publishedAt : opts.file.publishedAt,
      link : opts.file.link,

  }

  return autoIncrement()
  .then((order) => {
    fileToCreate.order = order
    dataFile.create(fileToCreate)
})
}

exports.edit = function edit (opts, attrs) {
  const file = opts.file

  return find()
    .findOne()
    .where({ _id: file.id })
    .exec()
    .then(setAttributes.bind(file, attrs))
    .then((datafile) => datafile.save())
}

exports.deleteOne = function deleteOne (opts) {
  const file = opts.file

  return find()
    .findOne()
    .where({ _id: file._id })
    .deleteOne()
}

exports.updateMany = function updateMany (opts, attrs) {
  const files = opts.files
  return Promise.resolve(
    files.forEach((file, idx) => {
      if (file.id !== attrs[idx].id) {
        return find()
          .findOne()
          .where({ _id: attrs[idx].id })
          .exec()
          .then(setAttributes.bind(file, attrs[idx]))
          .then((dataFile) => dataFile.save())
      }
    })
  )
}

exports.all = function all (fn) {
  log('Looking for all files.')

  dataFile
    .find()
    .sort('order')
    .exec(function (err, objs) {
      if (err) {
        log('Found error %j', err)
        return fn(err)
      }

      fn(null, objs)
    })
  return this
}
