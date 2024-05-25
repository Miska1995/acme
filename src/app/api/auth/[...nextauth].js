import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../../../../models/User"; // Adjust the path if necessary

const options = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('Authorizing user:', credentials.email); // Log the email of the user trying to authorize

        // Check if mongoose is connected, if not, connect to the database
        if (!mongoose.connection.readyState) {
          await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }).catch(err => {
            console.error('Failed to connect to MongoDB', err); // Log connection errors
            throw new Error('Database connection error'); // Throw a specific error for connection failure
          });
        }

        // Find the user by email
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          console.log('User not found:', credentials.email); // Log if the user is not found
          throw new Error("No user found"); // Throw an error if the user is not found
        }

        // Compare the provided password with the stored hashed password
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          console.log('Invalid password for user:', credentials.email); // Log if the password is invalid
          throw new Error("Invalid password"); // Throw an error if the password is invalid
        }

        console.log('Authorization successful for user:', credentials.email); // Log successful authorization
        return { id: user._id, email: user.email }; // Return the user id and email
      },
    }),
  ],
  session: {
    jwt: true, // Use JSON Web Tokens for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id; // Add the user id to the token if user is available
      return token; // Return the token
    },
    async session({ session, token }) {
      session.user.id = token.id; // Add the user id to the session from the token
      return session; // Return the session
    },
    async redirect({ url, baseUrl }) {
      return baseUrl; // Redirect to the home page after login
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Use the secret from environment variables
};

export default async (req, res) => {
  console.log('NextAuth API route hit'); // Log when the NextAuth API route is accessed
  return NextAuth(req, res, options); // Initialize NextAuth with the given options
};
