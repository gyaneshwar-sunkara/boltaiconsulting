/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    position: 'bottom-right',
  },
  /* The Work section was served from /projects while the nav called it
     "Work". Renamed for consistency; these keep every existing link,
     bookmark and index entry working. */
  async redirects() {
    return [
      { source: '/projects', destination: '/work', permanent: true },
      { source: '/projects/:slug', destination: '/work/:slug', permanent: true },
      /* Retired: the post promised a two-week build, which undercut the
         four-week commitment the whole site is priced around. The honest
         version of the same argument is why-we-quote-four-weeks. */
      {
        source: '/blog/web-application-development-2-weeks',
        destination: '/blog/why-we-quote-four-weeks',
        permanent: true,
      },
      /* Retitled: the old slug was not a URL to put on a proposal. */
      {
        source: '/blog/building-mvps-that-dont-suck',
        destination: '/blog/building-an-mvp-that-is-minimum-and-viable',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
