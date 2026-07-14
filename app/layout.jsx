import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import TopBar from '../components/TopBar.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './globals.css';

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display-family',
  display: 'swap'
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body-family',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono-family',
  display: 'swap'
});

const siteUrl = 'https://westestimating.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'West Estimating — Construction Cost Estimating & Takeoff Services',
    template: '%s · West Estimating'
  },
  description:
    'Professional construction cost estimating, quantity takeoffs, and design services for general contractors, subcontractors, and developers across the United States. 3–7 day turnaround, ±5% accuracy.',
  keywords: [
    'construction estimating',
    'quantity takeoff',
    'construction cost estimation',
    'general contractor estimates',
    'MEP estimating',
    'concrete takeoff'
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'West Estimating',
    title: 'West Estimating — Construction Cost Estimating & Takeoff Services',
    description:
      'Accurate quantity takeoffs and cost estimates for general contractors, subcontractors, and developers. 3–7 day turnaround.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1609867271967-a82f85c48531?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Commercial construction site with scaffolding'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'West Estimating — Construction Cost Estimating & Takeoff Services',
    description: 'Accurate quantity takeoffs and cost estimates. 3–7 day turnaround, ±5% accuracy.'
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', apple: '/images/logo.jpeg' }
};

export const viewport = {
  themeColor: '#0A2540',
  width: 'device-width',
  initialScale: 1
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'West Estimating',
  description:
    'Construction cost estimating, quantity takeoffs, and design services for general contractors, subcontractors, and developers.',
  url: siteUrl,
  telephone: '+1-737-770-7167',
  email: 'sales@westestimating.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5900 Balcones Dr Ste 4186',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78731',
    addressCountry: 'US'
  },
  areaServed: 'US',
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/westestimating?igsh=bTEybHZ2eTdnd29m&utm_source=qr',
    'https://www.facebook.com/share/1KZ5f2yPE7/?mibextid=wwXIfr',
    'https://www.linkedin.com/company/west-estimating-llc/'
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '16:00'
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
