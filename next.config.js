/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SPRITES_ROOT: process.env.SPRITES_ROOT,
  },
  images: {
    domains: [
      new URL(process.env.SPRITES_ROOT).host
    ]
  },
  redirects: async () => [
    {
      source: "/pokemon",
      destination: "/",
      permanent: true,
    },
  ]
};
