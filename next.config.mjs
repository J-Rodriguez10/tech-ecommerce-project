/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["quickstep007.myshopify.com", "cdn.shopify.com", "localhost" ]
  },
  experimental: {
    optimizeCss: false // Disable CSS minification to prevent styles from being altered
  }
}

export default nextConfig
