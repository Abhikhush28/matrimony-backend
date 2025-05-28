const User = require('../models/User');

// Create a new User
exports.createUser = async ( req ,  res ) => {
 try {
  const user = new User(req.body);
  await user.save();
  res.status(201). json(user);
 } catch (error) {
  res.status(400).json({error: error.message});
 }
}

// Get all users
exports.getAllUsers = async (req , res ) => {
 try {
  const users = await User.find();
  res.status(200).json(users)
 } catch {
  res.status(500).json({ error: error.message });
 }
};

// Get a user By ID
exports.getUserById = async (req , res) => {
 try {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found'});
  res.status(200).json(user);
  
 } catch (error) {
  res.status(500).json({ error: error.message});
 }
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
 try {
  const user = await User.findByIdAndUpdate(
   req.params.id,
   req.body,
   {new: true, runValidators: true }
  );
  if (!user) return res.status(404).json({ message: 'User not found' });
  
 } catch (error) {
  res.status(400).json({ error: error.message })
 }
};

// Delete a user by ID
exports.deleteUserById = async ( req, res ) => {
 try {
  const user = await User.findByIdAndDelete(req.params.id);
  if(!user) return res.status(404).json({message: 'User not found'});
  res.status(200).json({ message: 'User deleted successfully'})
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
}; 