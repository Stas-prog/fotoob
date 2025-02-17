/** @type {import('next').NextConfig} */
import 'dotenv/config'
const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        API_URL: process.env.API_URL
    },
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io'
            }
        ]
    }
};

export default nextConfig;
