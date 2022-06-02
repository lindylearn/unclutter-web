module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(0deg)" },
                    "30%": { transform: "rotate(2deg)" },
                    "60%": { transform: "rotate(-1deg)" },
                },
                slidein: {
                    "0%": { transform: "translate(400px)", opacity: "0" },
                    "100%": { transform: "translate(0)", opacity: "1" },
                },
                slideinSlightly: {
                    "0%": { transform: "translate(100px)", opacity: "0" },
                    "100%": { transform: "translate(0)", opacity: "1" },
                },
                fadein: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                wiggle: "wiggle 0.5s ease-in-out",
                slidein: "slidein 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                slideinSlightly:
                    "slideinSlightly 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                fadein: "fadein 0.2s linear",
            },
            screens: {
                desktop: { raw: "(hover: hover)" },
            },
        },
        fontFamily: {
            display: ["Poppins", "sans-serif"],
            text: ["Work Sans", "sans-serif"],
        },
    },
    plugins: [],
};
