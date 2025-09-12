import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import('tailwindcss').Config

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scans all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [react(),],
})
