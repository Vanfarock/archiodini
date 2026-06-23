import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = "dist/client";
const shell = join(outDir, "_shell.html");

if (!existsSync(shell)) {
  console.error(
    "[prepare-gh-pages] Missing dist/client/_shell.html — enable tanstackStart.spa in vite.config.ts",
  );
  process.exit(1);
}

copyFileSync(shell, join(outDir, "index.html"));
copyFileSync(shell, join(outDir, "404.html"));
console.log("[prepare-gh-pages] Created index.html and 404.html");
