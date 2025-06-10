const { defineConfig } = require("vite");
const preloader = require("js-log-print");
const react = require("@vitejs/plugin-react-swc");

module.exports = defineConfig({
  plugins: [react(), preloader()],
  server: {
    host: true, // This allows external access (e.g., LAN devices or 0.0.0.0)
    port: 3000, // Optional
  },
});
