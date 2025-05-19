import express from 'express';
import { signupPlayer, loginPlayer } from '../controllers/Player.controllers.js';

const router = express.Router();

// Signup Route
router.post('/signup', signupPlayer);

// Login Route
router.post('/login', loginPlayer);

export default router;