/** @type {import('next').NextConfig} */



const nextConfig = {
  reactStrictMode: true,
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack'}],
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