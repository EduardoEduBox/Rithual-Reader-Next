/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.discordapp.com", "lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'reader.rithual-wiki.com.br',
        port: '',
        pathname: '/caps/**',
      }
    ]
  },
};

module.exports = nextConfig;
