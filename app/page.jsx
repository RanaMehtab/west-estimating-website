import Hero from '../components/Hero.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import Stats from '../components/Stats.jsx';
import PhotoShowcase from '../components/PhotoShowcase.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Process from '../components/Process.jsx';
import Trades from '../components/Trades.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import CTA from '../components/CTA.jsx';
import { services } from '../lib/services.js';

export const metadata = {
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid services={services} limit={8} />
      <Stats />
      <PhotoShowcase />
      <WhyChooseUs />
      <Process />
      <Trades />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
