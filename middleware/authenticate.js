const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.id;
    
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authenticate;
