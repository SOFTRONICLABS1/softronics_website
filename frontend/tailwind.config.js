// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primary': {
//           50: '#eff6ff',
//           100: '#dbeafe',
//           200: '#bfdbfe',
//           300: '#93c5fd',
//           400: '#60a5fa',
//           500: '#0066ff',
//           600: '#0052cc',
//           700: '#0041a3',
//           800: '#003d99',
//           900: '#003366',
//         },
//         'secondary': {
//           50: '#faf5ff',
//           100: '#f3e8ff',
//           200: '#e9d5ff',
//           300: '#d8b4fe',
//           400: '#c084fc',
//           500: '#7c3aed',
//           600: '#6d28d9',
//           700: '#5b21b6',
//           800: '#4c1d95',
//           900: '#3730a3',
//         },
//         'dark': {
//           50: '#f8fafc',
//           100: '#f1f5f9',
//           200: '#e2e8f0',
//           300: '#cbd5e1',
//           400: '#94a3b8',
//           500: '#64748b',
//           600: '#475569',
//           700: '#334155',
//           800: '#1e293b',
//           900: '#0f172a',
//         }
//       },
//       fontFamily: {
//         'sans': ['Inter', 'system-ui', 'sans-serif'],
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY = amber/orange from your logo center
        primary: {
          50: "#FFF7E8",
          100: "#FFE9C2",
          200: "#FFD185",
          300: "#FFB64D",
          400: "#FFA018",
          500: "#F7A51B", // brand amber
          600: "#DB8E12",
          700: "#B9720C",
          800: "#8F5607",
          900: "#733F05",
        },

        // SECONDARY = cyan from the outer arcs
        secondary: {
          50: "#EAFBFF",
          100: "#D3F6FF",
          200: "#A9ECFA",
          300: "#7FDDF3",
          400: "#57CFEA",
          500: "#46C3E3", // brand cyan
          600: "#2AA6C8",
          700: "#1D85A4",
          800: "#176A83",
          900: "#114E5F",
        },

        // DARK = neutral gray family centered on #5A5A5A from the ring
        dark: {
          50: "#F7F7F7",
          100: "#EDEDED",
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#8F8F8F",
          500: "#5A5A5A", // brand dark gray
          600: "#3F3F3F",
          700: "#2E2E2E",
          800: "#1C1C1C",
          900: "#0A0A0A",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
