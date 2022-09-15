const debug = require('debug')
const log = debug('democracyos:ext:db-api:text')

const utils = require('lib/utils')
const about = require('lib/models').aboutUs
const pluck = utils.pluck

function find (query) {
  return about.find(Object.assign({
    deletedAt: null
  }, query))
}

function setAttributes (attrs, model) {
  Object.keys(attrs).forEach((key) => {
    model.set(key, attrs[key])
  })

  return model
}

exports.find = function find (query) {
  return about.find(Object.assign(query))
}

exports.create = function create (opts, attrs) {
  log('creating new faqs')

  const question = opts.faq.question
  const answer = opts.faq.answer

  return about
    .create({
      question,
      answer
    })
}

exports.edit = function edit (opts, attrs) {
  const faq = opts.faq
  const user = opts.user
  const forum = opts.forum

  return find()
    .findOne()
    .where({ _id: faq._id })
    .exec()
    .then(setAttributes.bind(faq, attrs))
    .then((about) => about.save())
}

exports.deleteOne = function deleteOne (opts) {
  const faq = opts.faq

  return find()
    .findOne()
    .where({ _id: faq._id })
    .deleteOne()
}

exports.all = function all (fn) {
  log('Looking for all faqs.')

  about
    .find()
    .sort('id')
    .exec(function (err, objs) {
      if (err) {
        log('Found error %j', err)
        return fn(err)
      }

      //log('Delivering all texts %j', pluck(objs, 'id'))
      //log('Delivering all texts %o', pluck(objs, 'name'))
      fn(null, objs)
    })
  return this
}

/* exports.get = function get (id, fn) {
  log('Looking for Text with id %s', id)

  Text
    .findById(id)
    .exec(function (err, obj) {
      if (err) {
        log('Found error %j', err)
        return fn(err)
      }

      log('Delivering Text %j', obj)
      fn(null, obj)
    })
  return this
}

exports.getIds = function get (ids, fn) {
  log('Looking for Texts with ids %o', ids)

  Text
    .find(ids)
    .exec(function (err, objs) {
      if (err) {
        log('Found error %j', err)
        return fn(err)
      }

      log('Delivering Texts')
      fn(null, objs)
    })
  return this
}

exports.getByName = function getByName (name, fn) {
  log('Looking for Text with name %s', name)

  Text
    .findOne({ name: name })
    .exec(function (err, obj) {
      if (err) {
        log('Found error %j', err)
        return fn(err)
      }

      log('Delivering Text %j', obj)
      fn(null, obj)
    })
  return this
}

exports.getByNames = function getByNames (names, fn) {
  log('Looking for Text with names %o', names)

  Text
    .find({ name: { $in: names } })
    .exec(function (err, obj) {
      if (err) {
        log('Found error %j', err)
        return fn(err)
      }

      log('Delivering Texts %o', obj.map(text => text.name))
      fn(null, obj)
    })
  return this
}

exports.create = function create (data, fn) {
  log('Creating new text')

  var text = new Text(data)
  text.save(function (err) {
    if (err) {
      log('Found error: %s', err)
      return fn(err)
    }

    log('Saved text with id %s', text.id)
    fn(null, text)
  })
}

exports.update = function update (forum, data, fn) {
  forum.set(data)
  return forum.save(fn)
} */
