export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                heading: "var(--headingText)",
                nav: "var(--navText)",
                cta: "var(--cta-button)",
            },
        },
    },
    plugins: [],
};