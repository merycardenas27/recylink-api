const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    brandId: {
      type: Schema.ObjectId,
      ref: 'Brand',
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

module.exports = model('Pattern', schema);
