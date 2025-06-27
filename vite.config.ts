import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import reactCompiler from "babel-plugin-react-compiler";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import tsConfigPaths from "vite-tsconfig-paths";

const ReactCompilerConfig = {
  target: "19",
};

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      target: "netlify",
    }),
    viteCompression(),
  ],
});
