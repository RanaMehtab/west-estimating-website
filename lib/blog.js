/**
 * Central registry of blog posts. Each entry holds metadata for the blog
 * index page; the actual long-form content is rendered by a matching
 * component in components/blog/ and wired up in app/blog/[slug]/page.jsx.
 */
export const blogPosts = [
  {
    slug: 'construction-estimating-services',
    title: 'Construction Estimating Services: The Complete Guide to Accurate Cost Estimation',
    excerpt:
      'Why accurate construction estimating is the foundation of every profitable project — plus a full breakdown of our quantity takeoff, commercial, and residential estimating services.',
    seoTitle:
      'Construction Estimating Services | Accurate Quantity Takeoff & Cost Estimates | West Estimating',
    metaDescription:
      'Looking for professional construction estimating services? West Estimating provides accurate quantity takeoffs, commercial and residential cost estimates, and design-build support across the USA.',
    date: '2026-07-14',
    readTime: '8 min read',
    category: 'Estimating Guides'
  }
];
