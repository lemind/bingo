import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import checker from "vite-plugin-checker"
import path from "path"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
      }
    })
  ],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`
    }
  }
})