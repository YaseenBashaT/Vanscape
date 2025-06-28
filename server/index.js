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

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:8080', 'https://vanscape.netlify.app', 'https://vanscape-frontend.onrender.com'],
  credentials: true
}));

app.use(express.json());

// Add a test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working!', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/van', vanRouter); 
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

// 404 handler
app.use('*', (req, res) => {
  console.log('404 - Route not found:', req.originalUrl);
  res.status(404).json({ error: 'Route not found', path: req.originalUrl });
});

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the server at: http://localhost:${PORT}/api/test`);
  console.log(`Vans endpoint: http://localhost:${PORT}/api/van`);
});