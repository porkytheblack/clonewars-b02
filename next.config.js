/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    return config
  },
  experimental: {
    emotion: {
      sourceMap: true,
      autoLabel: true,
      
    }
  }
}

module.exports = nextConfig