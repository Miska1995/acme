// Import global CSS styles
import './globals.css';

// RootLayout component definition, which wraps the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Render the child components */}
        {children}
      </body>
    </html>
  );
}
