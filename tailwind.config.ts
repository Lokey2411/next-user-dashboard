import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(circle, rgba(7,163,178,1) 0%, rgba(217,236,199,1) 60%)",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-card": "linear-gradient(151deg, #58126A 0%,#F6B2E1 60%)",
			},
			screens: {
				xs: "320px",
				fs: "100px",
			},
		},
	},
	plugins: [],
};
export default config;
