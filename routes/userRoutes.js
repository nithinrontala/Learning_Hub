const express = require('express');
const router = express.Router();
const { getAllStudents, getUserById, updateUserRole } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

// Protected routes
router.get('/students', authenticate, getAllStudents);
router.get('/:userId', authenticate, getUserById);
router.put('/:userId/role', authenticate, updateUserRole);

module.exports = router;
