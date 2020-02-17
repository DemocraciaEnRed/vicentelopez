const { Schema } = require('mongoose')

module.exports = function topicsAttrs (ForumSchema) {
  const AttrSchema = new Schema({
    name: { type: String, maxlength: 32, minlength: 1, required: true },
    title: { type: String, maxlength: 128, minlength: 1, required: true },
    description: { type: String, maxlength: 256 },
    mandatory: { type: Boolean },
    description: { type: String, maxlength: 256 },
    // nuevos
    order: { type: Number, default: 9999 },
    group: { type: String, default: '', maxlength: 128 },
    groupOrder: { type: Number, default: 0 },
    width: { type: Number, default: 6 },
    icon: { type: String, default: '', maxlength: 128 }
  }, { discriminatorKey: 'kind', _id: false })

  ForumSchema.add({
    topicsAttrs: [AttrSchema]
  })

  const topicsAttrs = ForumSchema.path('topicsAttrs')

  topicsAttrs.discriminator('Number', new Schema({
    min: { type: Number, required: true, default: 0 },
    max: { type: Number, required: true, default: 32 }
  }, { _id: false }))

  topicsAttrs.discriminator('String', new Schema({
    min: { type: Number, required: true, default: 0 },
    max: { type: Number, required: true, default: 128 }
  }, { _id: false }))

  topicsAttrs.discriminator('LongString', new Schema({
    min: { type: Number, required: true, default: 0 },
    max: { type: Number, required: true, default: 5000 }
  }, { _id: false }))

  topicsAttrs.discriminator('Enum', new Schema({
    options: [{
      name: { type: String, maxlength: 128, minlength: 1 },
      title: { type: String, maxlength: 128, minlength: 1 }
    }]
  }, { _id: false }))

  topicsAttrs.discriminator('Boolean', new Schema({}, { _id: false }))
}
