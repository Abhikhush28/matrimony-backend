// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'yourSecretKey'; // Use env variable in real apps

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });
    console.log('User:', user);
    console.log('Entered password:', password);
    console.log('Stored password:', user?.password);

    // const isMatch = await bcrypt.compare(password, user.password);
   const isMatch = await bcrypt.compare('mypassword123', user.password);
   console.log('Type of password:', typeof password);
   console.log('Password from req.body:', password);

    console.log('Password match:', isMatch);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    user.last_login = new Date();
    await user.save();

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
