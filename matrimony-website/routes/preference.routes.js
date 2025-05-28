const express = require('express');

const router = express.Router();
const prefrenceController = require('../controllers/partnerPreferenceController');
// Create a new User
router.post('/create', prefrenceController.createPartnerPreference);

// Get all users
router.get('/all', prefrenceController.getAllPartnerPreferences);

// Get a specific user by ID
router.get('/:id', prefrenceController.getPartnerPreferenceById);

// Update a user by ID
router.put('/update/:id', prefrenceController.updatePartnerPreferenceById);

router.delete('/delete/:id', prefrenceController.deletePartnerPreferenceById);

module.exports = router;

