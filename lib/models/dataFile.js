const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const dataFileSchema = new Schema({
  order: { type: Number },
  title: { type: String },
  description: { type: String },
  link: {type:String},
  publishedAt: { type: String },
  createdAt: { type: Date, default: Date.now }
})

/* dataFileSchema.statics.findByName = function (name, cb) {
  return this.findOne({ name: name }).exec(cb)
} */

/**
 * Make Schema `.toObject()` and
 * `.toJSON()` parse getters for
 * proper JSON API response
 */

dataFileSchema.set('toObject', { getters: true })
dataFileSchema.set('toJSON', { getters: true })
/**
 * Expose Model
 */

module.exports = function initialize (conn) {
  return conn.model('dataFile', dataFileSchema)
}
