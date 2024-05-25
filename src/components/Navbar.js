import Link from 'next/link';

// Navbar component definition
export default function Navbar() {
return (
    <nav>
      {/* Link to the home page */}
    <Link href="/">Home</Link>
      {/* Link to the dashboard page */}
    <Link href="/dashboard">Dashboard</Link>
    </nav>
);
}
