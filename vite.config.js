import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import log from "js-log-print";

// https://vitejs.dev/config/
export default defineConfig({
    base:'/',
    plugins: [react(), tsconfigPaths(), log()],
});
