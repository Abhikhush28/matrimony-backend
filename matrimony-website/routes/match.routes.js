const express = require('express');

const router = express.Router();
const matchController = require('../controllers/matchController');
// Create a new User
router.post('/create', matchController.createMatch);

// Get all users
router.get('/all', matchController.getAllMatches);

// Get a specific user by ID
router.get('/:id', matchController.getMatchById);

// Update a user by ID
router.put('/update/:id', matchController.updateMatchById);

router.delete('/delete/:id', matchController.deleteMatchById);

module.exports = router;

