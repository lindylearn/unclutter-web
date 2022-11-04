const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/v2",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

module.exports = withPlausibleProxy()(nextConfig);
