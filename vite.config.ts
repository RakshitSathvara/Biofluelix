import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Minimal typing for `process` so this config type-checks without @types/node.
declare const process: { env: Record<string, string | undefined> };

export default defineConfig({
  plugins: [react()],
  server: {
    // Honor a PORT env var (used by the preview harness) but keep 5173 as the
    // default for a normal `npm run dev`.
    port: Number(process.env.PORT) || 5173,
  },
});
