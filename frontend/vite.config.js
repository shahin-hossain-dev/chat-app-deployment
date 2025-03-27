import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      // I have handled cors origin policy from backend by cors middleware
      // here is another way for cors origin policy ignore for /api routes, target is the main route
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
