import { services } from '../lib/services.js';
import { galleryItems } from '../lib/gallery.js';
import { blogPosts } from '../lib/blog.js';

const siteUrl = 'https://westestimating.com';

export default function sitemap() {
  const staticRoutes = ['', '/about', '/services', '/blog', '/contact', '/privacy', '/terms'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : path === '/privacy' || path === '/terms' ? 0.3 : 0.8
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const galleryRoutes = galleryItems.map((g) => ({
    url: `${siteUrl}/gallery/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticRoutes, ...serviceRoutes, ...galleryRoutes, ...blogRoutes];
}
