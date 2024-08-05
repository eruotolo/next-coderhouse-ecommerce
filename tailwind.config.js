/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                sm: '640px',
                // => @media (min-width: 640px) { ... }
                md: '768px',
                // => @media (min-width: 768px) { ... }
                lg: '1024px',
                // => @media (min-width: 1024px) { ... }
                xl: '1100px',
                // => @media (min-width: 1280px) { ... }
            },
            maxWidth: {
                '1200px': '1200px',
            },
        },
    },
    plugins: [],
};
