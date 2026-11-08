import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS to out/, which is
  // uploaded to Bluehost (Apache). No Node.js server is needed.
  output: "export",
  // Image optimisation needs a server, so images are served as-is.
  images: { unoptimized: true },
  // /about/ -> about/index.html, which Apache serves without rewrite rules.
  trailingSlash: true,
  // Pin the workspace root so Turbopack ignores unrelated lockfiles higher up the filesystem.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
