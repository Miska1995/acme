/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Include all JavaScript, TypeScript, JSX, TSX, and MDX files in the pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Include all JavaScript, TypeScript, JSX, TSX, and MDX files in the components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Include all JavaScript, TypeScript, JSX, TSX, and MDX files in the app directory
  ],
  theme: {
    extend: {
      // Extend the default theme with custom background images
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Add a radial gradient background
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Add a conic gradient background
      },
    },
  },
  // Define plugins to be used with Tailwind CSS
  plugins: [],
};

