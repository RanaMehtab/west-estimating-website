import AboutView from '../../components/AboutView.jsx';

export const metadata = {
  title: 'About Us',
  description:
    'West Estimating was founded by construction professionals who ran pre-construction departments at mid-sized GCs. Senior estimators, transparent pricing, fast turnaround.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return <AboutView />;
}
