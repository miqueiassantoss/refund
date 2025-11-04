import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' //Antes era React

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()], //Antes era React
})
