console.log('Starting registration script...');

require('dotenv').config({ path: '.env.local' }); // Load environment variables from .env.local

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User'); // Adjust the path if necessary

const registerUser = async (email, password) => {
    try {
        console.log('Connecting to MongoDB...');
        // Connect to MongoDB using the connection string from the environment variable
        const MONGODB_URI = process.env.MONGODB_URI;
        console.log('MONGODB_URI:', MONGODB_URI); // Log the URI for debugging

        if (!MONGODB_URI) {
            console.error('MONGODB_URI is not defined');
            process.exit(1);
        }

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log(`User with email ${email} already exists.`);
            return;
        }

        // Hash the password before saving
        console.log('Hashing password...');
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user and save to the database
        console.log('Creating new user...');
        const user = new User({ email, password: hashedPassword });
        await user.save();

        console.log(`User ${email} registered successfully`);
    } catch (error) {
        console.error('Error registering user:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
};

// Register a user (adjust email and password as needed)
registerUser('user@example.com', 'password123');
