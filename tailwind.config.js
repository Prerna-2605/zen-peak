// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // adjust based on your project
    ],
    theme: {
        extend: {
            keyframes: {
                bioReveal: {
                    '0%': { clipPath: 'circle(0% at 0% 0%)' },
                    '100%': { clipPath: 'circle(150% at 0% 0%)' },
                },
            },
            animation: {
                bio: 'bioReveal 0.6s ease-out forwards',
            },
        },
    },
    plugins: [],
}