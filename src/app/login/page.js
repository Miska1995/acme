"use client"; // This directive makes the component a client component

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Ensure correct hook from next/navigation
import { motion } from "framer-motion"; // Import framer-motion for animations
import Link from "next/link"; // Import Link for navigation

export default function Login() {
    const [email, setEmail] = useState(""); // State for storing the email input
    const [password, setPassword] = useState(""); // State for storing the password input
    const [error, setError] = useState(null); // State to handle error messages
    const router = useRouter(); // Use the hook from next/navigation

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Attempt to sign in with the provided credentials
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result.ok) {
            router.push("/dashboard"); // Redirect to the dashboard upon successful login
        } else {
            if (result.error === 'CredentialsSignin') {
                setError("Incorrect email or password. Please try again."); // Custom error message for incorrect credentials
            } else {
                setError("An unexpected error occurred. Please try again later."); // Generic error message for other issues
            }
            console.error(result.error); // Log the error to the console
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <motion.div 
                className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-2xl max-w-md w-full mx-4"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
            >
                <motion.h1 
                    className="text-4xl font-extrabold mb-6 text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    Login
                </motion.h1>
                {/* Form for user login */}
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col space-y-4 w-full"
                >
                    {/* Input field for email */}
                    <motion.input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        whileFocus={{ scale: 1.05 }}
                    />
                    {/* Input field for password */}
                    <motion.input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        whileFocus={{ scale: 1.05 }}
                    />
                    {error && <motion.div className="text-red-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{error}</motion.div>} {/* Display error message if any */}
                    {/* Submit button */}
                    <motion.button 
                        type="submit" 
                        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Login
                    </motion.button>
                </form>
                {/* Forgot Password Link */}
                <motion.div 
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                        Forgot Password?
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
