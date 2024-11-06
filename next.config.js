module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/exchange",
        permanent: true,
      },
    ];
  },
};
