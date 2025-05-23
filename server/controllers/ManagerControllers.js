import Manager from '../models/Manager.model.js';
import Club from '../models/Club.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const signupManager = async (req, res) => {
  try {
    const { name, email, password, phone, club_id } = req.body;

    // Check if club_id exists
    const club = await Club.findOne({ club_id });
    if (!club) {
      return res.status(400).json({ message: 'Invalid club ID' });
    }

    // Check if email already exists
    const existingManager = await Manager.findOne({ email });
    if (existingManager) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Check if club already has a manager
    const clubHasManager = await Manager.findOne({ club: club._id });
    if (clubHasManager) {
      return res.status(400).json({ message: 'This club already has a manager' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create manager
    const newManager = new Manager({
      name,
      email,
      password: hashedPassword,
      phone,
      club: club._id,
    });

    await newManager.save();
    res.status(201).json({ message: 'Manager registered successfully', manager: newManager });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginManager = async (req, res) => {
  try {
    const { email, password } = req.body;
    const manager = await Manager.findOne({ email });
    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, manager.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: manager._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};