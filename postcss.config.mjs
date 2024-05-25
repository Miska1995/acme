/** @type {import('postcss-load-config').Config} */
const config = {
  // Define the plugins to be used by PostCSS
  plugins: {
    // Include Tailwind CSS as a PostCSS plugin
    tailwindcss: {},
  },
};

// Export the PostCSS configuration object for use in the application
export default config;
