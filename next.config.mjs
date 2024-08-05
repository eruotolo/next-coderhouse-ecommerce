/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'f.fcdn.app',
                port: '',
            }
        ],
    },
    async redirects() {
        return [
            {
                source: '/product',
                destination: '/shop',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
