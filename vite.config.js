import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allow connections from external devices
    port: 5137, // Optional: Specify the port if not already
  },
  plugins: [react()],
});
