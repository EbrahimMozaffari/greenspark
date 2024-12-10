export default {
  darkMode: 'class', 
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#b9b26c', 
          DEFAULT: '#576d2c', 
          dark: '#3a461b', 
        },
        success: '#22863a', 
        warning: '#F59E0B', 
        danger: '#EF4444', 
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#9CA3AF',
          dark: '#4B5563',
        },
      },
    },
  },
  plugins: [],
};

// light: '#b9b26c', 
// DEFAULT: '#576d2c', 
// dark: '#889982', 