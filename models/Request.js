const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  software: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Software',
    required: true,
  },
  accessType: {
    type: String,
    required: true,
    enum: ['Read', 'Write', 'Admin'],
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Cancelled'],
    default: 'Pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('Request', RequestSchema);