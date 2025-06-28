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

// Enable CORS for all routes - Updated to include HTTPS localhost:8080
app.use(cors({
  origin: [
    'http://localhost:8080', 
    'https://localhost:8080',
    'http://localhost:3000', 
    'http://localhost:5173',
    'https://localhost:5173'
  ],
  credentials: true
}));

app.use(express.json());

// Add a test route to check if server is working
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

app.use('/api/van', vanRouter); 
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes); 

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});