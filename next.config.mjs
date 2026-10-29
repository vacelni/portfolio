import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  poweredByHeader: false,
}

// Plugins are named by string so Turbopack can pass them to the MDX loader.
export default createMDX({ options: { remarkPlugins: [['remark-gfm']] } })(nextConfig)
