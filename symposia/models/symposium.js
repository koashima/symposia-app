const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String, 
  }, {
    timestamps: true
  });

const symposiumSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    comments: [commentSchema]
}, {
    timestamps: true
});
  

module.exports = mongoose.model('Symposium', symposiumSchema)