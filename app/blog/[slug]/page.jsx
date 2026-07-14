import { notFound } from 'next/navigation';
import BlogPostView from '../../../components/BlogPostView.jsx';
import { blogPosts } from '../../../lib/blog.js';
import { blogContent } from '../../../lib/blogContent.js';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const Content = blogContent[slug];

  if (!post || !Content) notFound();

  return (
    <BlogPostView post={post}>
      <Content />
    </BlogPostView>
  );
}
