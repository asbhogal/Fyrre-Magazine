import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  eslint: {
    dirs: ["components", "src", "lib", "app", "e2e"],
  },
};

export default withPayload(nextConfig);
