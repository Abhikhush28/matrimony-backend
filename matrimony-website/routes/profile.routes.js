const express = require('express');

const router = express.Router();
const profileController = require('../controllers/profileController');
// Create a new User
router.post('/create', profileController.createUser);

// Get all users
router.get('/all', profileController.getAllUsers);

// Get a specific user by ID
router.get('/:id', profileController.getUserById);

// Update a user by ID
router.put('/update/:id', profileController.updateUserById);

router.delete('/delete/:id', profileController.deleteUserById);

module.exports = router;












