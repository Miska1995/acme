/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React's Strict Mode to highlight potential problems in the application
    reactStrictMode: true,
    
    // Enable the SWC compiler to minify the JavaScript code
    swcMinify: true,
};

// Export the Next.js configuration object for use in the application
export default nextConfig;
