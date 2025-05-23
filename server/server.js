// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import playerRoutes from './routes/playerRoutes.js';
import clubRoutes from './routes/clubRoutes.js';
import managerRoutes from './routes/managerRoutes.js';
import cors from 'cors';




dotenv.config();
connectDB(); // This runs db.js internally

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/player', playerRoutes);
app.use('/club', clubRoutes);
app.use('/manager', managerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
