const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');


const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Replaces body-parser

// MongoDB connection
mongoose.connect('mongodb+srv://sahuabhikhush:sahuabhi123@cluster0.adpsyur.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/auth', authRoutes);
// Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);  // Ex: POST /api/users, GET /api/users/:id

app.use('/api/profile', profileRoutes);



// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
