// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login route
router.post('/login', authController.login);

// Logout is client-side (just remove token)

module.exports = router;
