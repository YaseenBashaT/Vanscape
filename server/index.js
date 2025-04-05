import express from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/api/ping', (req, res) => {
  res.json({ msg: 'pong from server' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
