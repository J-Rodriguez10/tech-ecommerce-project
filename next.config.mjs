/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "quickstep007.myshopify.com",
      "cdn.shopify.com",
      "localhost", // useful for local dev
      "tech-ecommerce-project-backend.onrender.com" // Render backend for image proxy
    ]
  },
  experimental: {
    optimizeCss: false // Disable CSS minification to prevent styles from being altered
  }
}

export default nextConfig
