const api = require('lib/db-api')

function findWithId (req, res, next, id) {
  api.about.find({ _id: id })
    .findOne()
    .exec()
    .then((faq) => {
      if (!faq) {
        const err = new Error(`faq ${id} not found.`)
        err.status = 404
        err.code = 'FAQ_NOT_FOUND'
        return next(err)
      }

      req.faq = faq

      next()
    })
    .catch(next)
}

exports.findById = function findById (req, res, next) {
  findWithId(req, res, next, req.params.id)
}
