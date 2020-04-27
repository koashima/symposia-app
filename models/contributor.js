const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chronicleSchema = new Schema(
  {
    book: {type: String},
    music: {type: String},
    movie: {type: String}
  }
);

const contributorSchema = new Schema(
  {    
    googleId: { type: String },
    name: { type: String },
    email: { type: String },
    avatar: { type: String },
    profile: [chronicleSchema],
    symposia: {type: Schema.Types.ObjectId, ref: 'Symposium'}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contributor', contributorSchema);
