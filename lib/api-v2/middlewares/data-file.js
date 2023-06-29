const debug = require('debug')
const log = debug('democracyos:ext:db-api:text')

const api = require('lib/db-api')

function findWithId (req, res, next, id) {
  api.dataFile.find({ _id: id })
    .findOne()
    .exec()
    .then((file) => {
      if (!file) {
        const err = new Error(`file ${id} not found.`)
        err.status = 404
        err.code = 'FILE_NOT_FOUND'
        return next(err)
      }

      req.file = file

      next()
    })
    .catch(next)
}

exports.findById = function findById (req, res, next) {
  findWithId(req, res, next, req.params.id)
}

exports.findAll = function findAll (req, res, next) {
  api.dataFile.all((err, obj) => {
    if (err) {
      const err = new Error(`files not found.`)
      err.status = 404
      err.code = 'FILE_NOT_FOUND'
      return next(err)
    }
    let newObj = obj.map(({ id, order }) => { return { 'id': id, 'order': order } })
    req.files = newObj
    next()
  })
}
