/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "app/**/*.{ts,tsx}",
	  "components/**/*.{ts,tsx}",
	  "*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		//   background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		//   primary: {
		// 	DEFAULT: "hsl(var(--primary))",
		// 	foreground: "hsl(var(--primary-foreground))",
		//   },
		//   secondary: {
		// 	DEFAULT: "hsl(var(--secondary))",
		// 	foreground: "hsl(var(--secondary-foreground))",
		//   },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  primary: {
			light: "#3B82F6", // Blue-500
			dark: "#60A5FA", // Blue-400
		  },
		  secondary: {
			light: "#10B981", // Emerald-500
			dark: "#34D399", // Emerald-400
		  },
		  background: {
			light: "#F3F4F6", // Gray-100
			dark: "#1F2937", // Gray-800
		  },
		  surface: {
			light: "#FFFFFF", // White
			dark: "#374151", // Gray-700
		  },
		  text: {
			light: "#1F2937", // Gray-800
			dark: "#F9FAFB", // Gray-50
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  
  