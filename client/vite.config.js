import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@redux", replacement: path.resolve(__dirname, "src/redux") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") }, 
      { find: "@modules", replacement: path.resolve(__dirname, "src/modules") }, 
    ],
  },
  server: {
    port: 4500,
    open: true,
  },
});
