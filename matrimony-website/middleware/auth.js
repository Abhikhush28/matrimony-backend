// middleware/auth.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'yourSecretKey';  // keep it in env var in real apps

function authMiddleware(req, res, next) {
  const rawHeader = req.header('Authorization');
  console.log('Raw Authorization Header:', rawHeader);

  const token = rawHeader?.replace('Bearer ', '').trim();
  console.log('Extracted Token:', token);

  if (!token) {
    return res.status(401).json({ error: 'Access denied, token missing' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log('JWT Error:', err.message);
    res.status(401).json({ error: 'Invalid token' });
  }
}


module.exports = authMiddleware;
