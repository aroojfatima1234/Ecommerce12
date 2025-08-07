/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        // Specify the files where Tailwind should look for classes
        './src/**/*.{html,js,ts,jsx,tsx}',
        './public/index.html',
      ],
      theme: {
        extend: {
          // Add or extend your theme properties here (e.g., colors, spacing, fonts)
        },
      },
      plugins: [
        // Add any custom or third-party Tailwind plugins here
      ],
    };