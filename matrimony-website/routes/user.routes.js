const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/',  authMiddleware, userController.getAllUsers);

// Get a specific user by ID
router.get('/:id', userController.getUserById);

// Update a user by ID
router.put('/:id', userController.updateUserById);

// Delete a user by ID
router.delete('/:id', userController.deleteUserById);

module.exports = router;
