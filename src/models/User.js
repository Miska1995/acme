// Import mongoose for database interactions
const mongoose = require('mongoose');

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
  // Email field: required and must be unique
email: { type: String, required: true, unique: true },
  // Password field: required
password: { type: String, required: true },
});

// Create the User model if it doesn't already exist, otherwise use the existing model
const User = mongoose.models.User || mongoose.model("User", UserSchema);

// Export the User model for use in other parts of the application
module.exports = User;
