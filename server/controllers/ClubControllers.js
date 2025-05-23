import Club from '../models/Club.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const signupClub = async (req, res) => {
  try {
    const { club_name, email, password, location, establish_date, phone_number, description } = req.body;

    // Check if the email already exists
    const existingClub = await Club.findOne({ contact_email: email });
    if (existingClub) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new club
    const newClub = new Club({
      club_id: `CLUB-${Date.now()}`,
      club_name,
      contact_email: email,
      password: hashedPassword,
      location,
      establish_date,
      phone_number,
      description,
    });

    await newClub.save();
    res.status(201).json({ message: 'Club registered successfully', club: newClub });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginClub = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the club exists
    const club = await Club.findOne({ contact_email: email });
    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, club.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: club._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};