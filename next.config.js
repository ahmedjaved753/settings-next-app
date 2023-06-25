/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/entities",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
