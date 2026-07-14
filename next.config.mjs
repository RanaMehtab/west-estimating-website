/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Running on a real Node.js server (Hostinger Node.js hosting), so
    // Next's built-in image optimizer works normally here.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },

  // 301 redirects from the old WordPress site's URLs to their closest match
  // on the new Next.js site. These are still indexed in Google and were
  // outranking the new homepage for brand-name searches — redirecting them
  // sends both visitors and search-engine authority to the right page
  // instead of a dead/old page, and tells Google to drop the old URL from
  // its index in favor of the new one.
  //
  // Add a new entry here for every other old WordPress URL you find still
  // indexed (Google Search Console → Pages report is the best place to see
  // the full list) — source is the exact old path, destination is where it
  // should land on the new site.
  async redirects() {
    return [
      { source: '/faqs', destination: '/', permanent: true },
      { source: '/faqs/', destination: '/', permanent: true },
      { source: '/roofing-estimating-services', destination: '/services/roofing-flooring-finishes', permanent: true },
      { source: '/roofing-estimating-services/', destination: '/services/roofing-flooring-finishes', permanent: true },
      { source: '/electrical-estimating-services', destination: '/services/mep-estimation', permanent: true },
      { source: '/electrical-estimating-services/', destination: '/services/mep-estimation', permanent: true },
      { source: '/preliminary-estimate', destination: '/services/cost-estimation', permanent: true },
      { source: '/preliminary-estimate/', destination: '/services/cost-estimation', permanent: true },
      { source: '/construction-estimating-services', destination: '/blog/construction-estimating-services', permanent: true },
      { source: '/construction-estimating-services/', destination: '/blog/construction-estimating-services', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true }
    ];
  }
};

export default nextConfig;
