// Import mongoose for database interactions
import mongoose from "mongoose";

// Asynchronous function to connect to MongoDB
const connectDB = async () => {
  // Check if there is already an existing database connection
if (mongoose.connections[0].readyState) return; 

  // Connect to the MongoDB database using the connection string from environment variables
await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new unified topology engine
});
};

// Export the connectDB function for use in other parts of the application
export default connectDB;
