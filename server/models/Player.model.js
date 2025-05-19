// models/Player.js
import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  player_id: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone_number: String,
  position: String,
  height: Number,
  weight: Number,
 
  join_date: {
    type: Date,
    default: Date.now,
  },
  club_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club',
  },
  // models/Player.js
status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Performance',
    unique: true,
  }
  
});

export default mongoose.model('Player', playerSchema);
