"use client"; // This directive makes the component a client component

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
    const { data: session, status } = useSession(); // Hook to get session data and status

    // Display a loading message while the session status is loading
    if (status === "loading") {
        return <div>Loading...</div>;
    }

    // If there is no session (user is not authenticated), display a message and a link to the login page
    if (!session) {
        return (
            <div>
                <h1>You are not authenticated</h1>
                <Link href="/login">
                    <a className="text-blue-500 hover:underline">Login</a> {/* Link to the login page */}
                </Link>
            </div>
        );
    }

    // If the user is authenticated, display the dashboard
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p>Welcome, {session.user.email}</p> {/* Display the user's email */}
            {/* Button to sign out */}
            <button onClick={() => signOut()} className="bg-blue-500 text-white p-2 rounded">
                Sign out
            </button>
            {/* Link to add a new invoice */}
            <Link href="/dashboard/add-invoice">
                <a className="text-blue-500 hover:underline">Add Invoice</a>
            </Link>
        </div>
    );
}
