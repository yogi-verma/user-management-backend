const mongoose = require('mongoose');

const SoftwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  accessLevels: {
    type: [String],
    required: true,
    enum: ['Read', 'Write', 'Admin'],
    default: ['Read'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Software', SoftwareSchema);