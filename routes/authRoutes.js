const express = require('express');
const router = express.Router();
const { signup, login, googleLogin, getMe } = require('../controllers/authController');
const authenticate = require('../middleware/authenticate');

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/google', googleLogin);

// Protected routes
router.get('/me', authenticate, getMe);

module.exports = router;
