const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;
  console.log('Auth Header:', authHeader); // Debugging line
  console.log('Token:', req.headers['x-auth-token']); // Debugging line
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
