import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-in-out",
                "slide-up": "slideUp 0.6s ease-out",
                "slide-down": "slideDown 0.6s ease-out",
                "slide-in-left": "slideInLeft 0.8s ease-out",
                "slide-in-right": "slideInRight 0.8s ease-out",
                float: "float 3s ease-in-out infinite",
                "float-slow": "float 6s ease-in-out infinite",
                "float-delayed": "float 3s ease-in-out 1s infinite",
                bounce: "bounce 2s ease-in-out infinite",
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                spin: "spin 3s linear infinite",
                "spin-slow": "spin 8s linear infinite",
                "spin-reverse": "spinReverse 8s linear infinite",
                wiggle: "wiggle 1s ease-in-out infinite",
                "scale-in": "scaleIn 0.5s ease-out",
                "scale-out": "scaleOut 0.5s ease-out",
                glow: "glow 2s ease-in-out infinite",
                "shimmer": "shimmer 2.5s infinite",
                "gradient-x": "gradientX 3s ease infinite",
                "gradient-y": "gradientY 3s ease infinite",
                "gradient-xy": "gradientXY 3s ease infinite",
                tilt: "tilt 10s infinite linear",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideInLeft: {
                    "0%": { transform: "translateX(-100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideInRight: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.9)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                scaleOut: {
                    "0%": { transform: "scale(1)", opacity: "1" },
                    "100%": { transform: "scale(0.9)", opacity: "0" },
                },
                glow: {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(102, 126, 234, 0.5)" },
                    "50%": { boxShadow: "0 0 40px rgba(118, 75, 162, 0.8)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-1000px 0" },
                    "100%": { backgroundPosition: "1000px 0" },
                },
                gradientX: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                gradientY: {
                    "0%, 100%": { backgroundPosition: "50% 0%" },
                    "50%": { backgroundPosition: "50% 100%" },
                },
                gradientXY: {
                    "0%, 100%": { backgroundPosition: "0% 0%" },
                    "25%": { backgroundPosition: "100% 0%" },
                    "50%": { backgroundPosition: "100% 100%" },
                    "75%": { backgroundPosition: "0% 100%" },
                },
                tilt: {
                    "0%, 50%, 100%": { transform: "rotate(0deg)" },
                    "25%": { transform: "rotate(1deg)" },
                    "75%": { transform: "rotate(-1deg)" },
                },
                spinReverse: {
                    "0%": { transform: "rotate(360deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};
export default config;
