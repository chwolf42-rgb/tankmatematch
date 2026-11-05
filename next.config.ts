import { spawnSync } from "node:child_process";
import { join } from "node:path";
import type { NextConfig } from "next";

function generateShareImages(): void {
  // Vercel runs `next build`, which does not trigger npm's prebuild hook.
  if (!process.argv.includes("build")) return;
  const result = spawnSync(process.execPath, [join("node_modules", ".bin", "tsx"), "scripts/write-og.ts"], {
    stdio: "inherit",
    cwd: process.cwd(),
  });
  if (result.status !== 0) {
    throw new Error(`Share image generation failed (${result.status ?? "signal"})`);
  }
}

generateShareImages();

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  trailingSlash: false,
};

export default nextConfig;
