import Player from '../models/Player.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Signup Controller
export const signupPlayer = async (req, res) => {
  try {
    
    const { name, email, password, phone_number, position, height, weight } = req.body;

    // Check if the email already exists
    const existingPlayer = await Player.findOne({ email });
    if (existingPlayer) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new player
    const newPlayer = new Player({
      player_id: `PLAYER-${Date.now()}`,
      name,
      email,
      password: hashedPassword,
      phone_number,
      position,
      height,
      weight,
    });

    await newPlayer.save();
    res.status(201).json({ message: 'Player registered successfully', player: newPlayer });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

// Login Controller
export const loginPlayer = async (req, res) => {
  try {
    console.log('Login attempt:', req.body);
    const { email, password } = req.body;

    // Check if the player exists
    const player = await Player.findOne({ email });
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, player.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: player._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);

    res.status(500).json({ error: error.message });
  }
};