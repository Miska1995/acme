import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Main content positioned relative to the overlay */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with bounce animation */}
        <img src="/exampleimage.png" alt="Logo" className="w-62 h-62 mb-8 animate-bounce" />
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to Miska's Financial Dashboard
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Manage your finances with ease and precision.
        </p>
        {/* Link to the login page */}
        <Link href="/login">
          <span className="text-lg text-white bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            To the login
          </span>
        </Link>
      </div>
    </div>
  );
}
