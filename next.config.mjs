import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file URL and convert it to a path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
