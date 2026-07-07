import ServicesView from '../../components/ServicesView.jsx';
import { services } from '../../lib/services.js';

export const metadata = {
  title: 'Construction Estimating Services',
  description:
    'Quantity takeoffs, cost estimation, GC estimates, MEP, concrete, drywall, structural steel, and more — complete estimating coverage across every CSI division.',
  alternates: { canonical: '/services' }
};

export default function ServicesPage() {
  return <ServicesView services={services} />;
}
