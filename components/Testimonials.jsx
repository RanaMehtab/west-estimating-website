'use client';

import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';

const TESTIMONIALS = [
  {
    quote:
      "We've used three estimating firms over the years and West is the only one we kept. The estimates come back clean, on time, and with assumptions documented so we know exactly what's in and out.",
    name: 'Marcus Rivera',
    role: 'Owner',
    company: 'Rivera Builders — Phoenix, AZ',
    rating: 5
  },
  {
    quote:
      'Tight schedule on a school renovation. Sent plans Friday afternoon, had a full division-7 takeoff in my inbox Monday. Won the bid by 4%.',
    name: 'Jenna Pirelli',
    role: 'Estimating Manager',
    company: 'Coastal Roofing — San Diego, CA',
    rating: 5
  },
  {
    quote:
      "Their MEP estimates are the best I've seen. They catch the low-voltage and fire-alarm scope that other estimators miss every time.",
    name: 'David Chen',
    role: 'VP Pre-Construction',
    company: 'Apex Mechanical — Austin, TX',
    rating: 5
  },
  {
    quote:
      'The bid package they assembled was cleaner than anything our own team has put together. Ownership approved it without a single follow-up question.',
    name: 'Priya Anand',
    role: 'Development Director',
    company: 'Anand Development Group — Dallas, TX',
    rating: 5
  },
  {
    quote:
      "We hand them the ugliest hand-marked plan sets and they still come back with a takeoff we'd stake our bid on. Fast turnaround, no drama.",
    name: 'Tom Whitfield',
    role: 'Project Executive',
    company: 'Whitfield Concrete — Denver, CO',
    rating: 5
  },
  {
    quote:
      'Their sitework and earthwork numbers caught a grading conflict our civil engineer had missed. That single catch paid for the estimate three times over.',
    name: 'Laura Simmons',
    role: 'Principal',
    company: 'Simmons Site Contractors — Tampa, FL',
    rating: 5
  }
];

function Stars({ rating }) {
  return (
    <div className="testi__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={14}
          strokeWidth={1.5}
          style={{ fill: i < rating ? 'var(--c-amber)' : 'transparent', color: 'var(--c-amber)' }}
        />
      ))}
    </div>
  );
}

function TestiCard({ t }) {
  return (
    <article className="testi__card">
      <Icon name="quote" size={26} className="testi__qmark" />
      <Stars rating={t.rating} />
      <blockquote className="testi__quote">"{t.quote}"</blockquote>
      <footer className="testi__by">
        <div className="testi__avatar" aria-hidden="true">
          {t.name.split(' ').map((p) => p[0]).join('')}
        </div>
        <div>
          <strong>{t.name}</strong>
          <span>{t.role}</span>
          <span className="testi__company">{t.company}</span>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  useReveal();

  // Duplicate the row so the marquee can loop seamlessly at -50%.
  const rowA = [...TESTIMONIALS, ...TESTIMONIALS];
  const rowB = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];

  return (
    <section className="testi section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What Clients Say</span>
          <h2>Estimates that win work — and earn return clients</h2>
        </div>
      </div>

      <div className="testi__marquee reveal">
        <div className="testi__track testi__track--a">
          {rowA.map((t, i) => (
            <TestiCard key={`a-${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div className="testi__marquee testi__marquee--reverse reveal">
        <div className="testi__track testi__track--b">
          {rowB.map((t, i) => (
            <TestiCard key={`b-${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        .testi__marquee {
          position: relative;
          overflow: hidden;
          margin-top: 32px;
          -webkit-mask-image: linear-gradient(90deg, transparent, black 6%, black 94%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 6%, black 94%, transparent);
        }
        .testi__marquee--reverse { margin-top: 20px; }
        .testi__track {
          display: flex;
          gap: 20px;
          width: max-content;
          padding: 6px 0;
          animation: testi-scroll 52s linear infinite;
        }
        .testi__track--b {
          animation-name: testi-scroll-reverse;
          animation-duration: 60s;
        }
        .testi__marquee:hover .testi__track {
          animation-play-state: paused;
        }
        @keyframes testi-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes testi-scroll-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .testi__card {
          position: relative;
          padding: 28px;
          width: 380px;
          flex-shrink: 0;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          transition: transform var(--t), box-shadow var(--t), border-color var(--t);
        }
        .testi__card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--c-border-strong);
        }
        .testi__qmark {
          color: var(--c-amber);
          opacity: 0.2;
          margin-bottom: 10px;
        }
        .testi__stars {
          display: flex;
          gap: 2px;
          margin-bottom: 14px;
        }
        .testi__quote {
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--c-text);
          line-height: 1.55;
          letter-spacing: -0.005em;
          margin-bottom: 22px;
          flex: 1;
        }
        .testi__by {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 18px;
          border-top: 1px solid var(--c-border);
        }
        .testi__avatar {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-ink);
          color: var(--c-amber);
          border-radius: 50%;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8125rem;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }
        .testi__by strong {
          display: block;
          font-family: var(--font-display);
          color: var(--c-ink);
          font-size: 0.875rem;
          line-height: 1.3;
        }
        .testi__by span {
          display: block;
          font-size: 0.75rem;
          color: var(--c-text-muted);
          line-height: 1.4;
        }
        .testi__company {
          font-family: var(--font-mono);
          font-size: 0.625rem !important;
          letter-spacing: 0.02em;
          color: var(--c-text-faint) !important;
          text-transform: uppercase;
          margin-top: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .testi__track { animation: none; }
          .testi__marquee { overflow-x: auto; }
        }
        @media (max-width: 640px) {
          .testi__card { width: 300px; padding: 22px; }
        }
      `}</style>
    </section>
  );
}
