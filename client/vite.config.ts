import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert';
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    port:3000
  },
  plugins: [
    react(),
    mkcert(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
