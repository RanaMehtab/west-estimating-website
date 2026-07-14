import BlogListView from '../../components/BlogListView.jsx';

export const metadata = {
  title: 'Estimating Guides & Insights',
  description:
    'In-depth guides on construction cost estimating, quantity takeoffs, and design coordination — from the West Estimating team.',
  alternates: { canonical: '/blog' }
};

export default function BlogPage() {
  return <BlogListView />;
}
