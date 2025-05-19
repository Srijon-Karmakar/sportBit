const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club', // Reference to the Club schema
    unique: true, // Ensures one-to-one relationship
  },
  phone: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Manager', ManagerSchema);