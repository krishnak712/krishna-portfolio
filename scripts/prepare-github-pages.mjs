import { copyFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

await mkdir("dist", { recursive: true });
await copyFile("dist/index.html", "dist/404.html");
console.log("GitHub Pages fallback created: dist/404.html");
