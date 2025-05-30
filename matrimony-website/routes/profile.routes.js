const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const authMiddleware = require('../middleware/auth'); // your JWT middleware

// Create Profile
router.post('/create', authMiddleware, async (req, res) => {
  try {
    const {
      bio, height, weight, religion, caste,
      mother_tongue, education, occupation, income,
      marital_status, children, country, state, city, profile_picture_url
    } = req.body;

    const profile = new Profile({
      user_id: req.user.userId, // ✅ set from token
      bio, height, weight, religion, caste,
      mother_tongue, education, occupation, income,
      marital_status, children, country, state, city, profile_picture_url
    });

    await profile.save();
    res.status(201).json({ message: 'Profile created successfully', profile });

  } catch (error) {
    console.error('Profile Creation Error:', error.message);
    res.status(500).json({ error: 'Failed to create profile' });
  }
});



// Update Profile
router.put('/update', authMiddleware, async (req, res) => {
  try {
    const updatedData = req.body;

    const updatedProfile = await Profile.findOneAndUpdate(
      { user_id: req.user.userId },     // ✅ Match profile by authenticated user's ID
      { $set: updatedData },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: 'Profile not found for this user' });
    }

    res.status(200).json({ message: 'Profile updated successfully', profile: updatedProfile });

  } catch (error) {
    console.error('Profile Update Error:', error.message);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});


// GET /api/profile/me
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user_id: req.user.userId }).populate('user_id', '-password');

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// DELETE /api/profile - delete the logged-in user's profile
router.delete('/', authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOneAndDelete({ user_id: req.user.userId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (err) {
    console.error('Delete Error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});



// Publicly accessible route to get profile by ID
router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id).populate('user_id', '-password');
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (err) {
    console.error('Get Profile by ID Error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
