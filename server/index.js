const express = require('express');
const connectDB = require('./db.js');
const dotenv = require('dotenv');
const cors = require('cors');

const vanRouter = require('./routes/vanRouter');
const userRoutes = require('./routes/userRouter');
const authRoutes = require('./routes/AuthRouter');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());app.use('/api/van', vanRouter); 
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes); 


connectDB();

app.get('/api/ping', (req, res) => {
  res.json({ msg: 'pong from server' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));