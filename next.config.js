const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["storage.googleapis.com"],
    },

    async redirects() {
        return [
            {
                source: "/discord",
                destination: "https://discord.gg/CThpNQjucB",
                permanent: false,
            },
        ];
    },
};

module.exports = withPlausibleProxy()(nextConfig);
