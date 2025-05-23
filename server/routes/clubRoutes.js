import express from 'express';
import { signupClub, loginClub } from '../controllers/ClubControllers.js';

const router = express.Router();

router.post('/signup', signupClub);
router.post('/login', loginClub);

export default router;