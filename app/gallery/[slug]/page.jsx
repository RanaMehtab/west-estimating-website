import { notFound } from 'next/navigation';
import GalleryDetailView from '../../../components/GalleryDetailView.jsx';
import { galleryItems, getGalleryItem } from '../../../lib/gallery.js';
import { services } from '../../../lib/services.js';

export function generateStaticParams() {
  return galleryItems.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getGalleryItem(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/gallery/${item.slug}` }
  };
}

export default async function GalleryDetailPage({ params }) {
  const { slug } = await params;
  const item = getGalleryItem(slug);

  if (!item) notFound();

  const related = services.find((s) => s.slug === item.relatedSlug) || null;

  return <GalleryDetailView item={item} related={related} />;
}
