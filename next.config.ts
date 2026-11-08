import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores unrelated lockfiles higher up the filesystem.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
