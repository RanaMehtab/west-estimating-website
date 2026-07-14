'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon.jsx';
import Stats from './Stats.jsx';
import Trades from './Trades.jsx';
import CTA from './CTA.jsx';
import useReveal from '../hooks/useReveal.js';
import { photos } from '../lib/photos.js';

const INDUSTRIES = [
  'Residential Construction',
  'Commercial Construction',
  'Industrial Projects',
  'Multi-Family Developments',
  'Educational Facilities',
  'Healthcare Facilities',
  'Hospitality Projects',
  'Retail Developments',
  'Warehouses & Distribution Centers',
  'Government & Public Sector Projects'
];

const VALUES = [
  {
    icon: 'shield',
    title: 'Accuracy',
    body:
      "Every estimate is reviewed by a second senior estimator before it leaves the office. We document our assumptions so nothing's a black box."
  },
  {
    icon: 'clock',
    title: 'Speed',
    body:
      "Most takeoffs come back in 3–7 business days. When bid deadlines are tight, we offer 24-48 hour rush options without sacrificing quality."
  },
  {
    icon: 'team',
    title: 'Partnership',
    body:
      "We're not a black-box vendor. Direct line to the estimator on your job — quick call, fast answer, no support tickets."
  },
  {
    icon: 'dollar',
    title: 'Transparency',
    body:
      "Flat-fee pricing quoted in advance. What we quote is what you pay. No change orders on the estimate itself."
  }
];

export default function AboutView() {
  useReveal();

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>About</span>
            </div>
            <span className="eyebrow">About West Estimating</span>
            <h1>Estimators who actually know construction.</h1>
            <p>
              West Estimating is a leading construction estimating and takeoff company providing
              professional estimation, quantity takeoff, and design services to contractors
              throughout the United States.
            </p>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="container">
          <div className="about__story">
            <div className="about__story-text reveal">
              <span className="eyebrow">Our Story</span>
              <h2>Built by estimators, for estimators.</h2>
              <p>
                We support General Contractors, Subcontractors, Developers, Architects, and
                Construction Firms with accurate, detailed, and cost-effective estimates for
                residential, commercial, industrial, and institutional projects.
              </p>
              <p>
                Our team specializes in all CSI construction divisions and trades — General
                Construction, Mechanical, Electrical, Plumbing (MEP), Concrete, Masonry, Structural
                Steel, Metals, Lumber &amp; Framing, Roofing, Insulation, Drywall, Painting,
                Flooring, Doors &amp; Windows, Millwork, Equipment, Furnishings, Specialties, Fire
                Protection, Sitework, Earthwork, Utilities, HVAC, Landscaping, Demolition,
                Waterproofing, and many more.
              </p>
              <p>
                In addition to estimating services, we provide architectural drawings,
                construction drawings, drafting, and design support to help clients streamline
                project planning and bid preparation. Using industry-leading software and proven
                estimating methodologies, we deliver precise quantity takeoffs and cost estimates
                that help our clients win more projects and maximize profitability.
              </p>
              <div className="about__story-actions">
                <Link href="/contact" className="btn btn--primary">
                  Work with us
                  <Icon name="arrow" size={14} className="arrow" />
                </Link>
                <Link href="/services" className="btn btn--outline">
                  See our services
                </Link>
              </div>
            </div>

            <div className="about__story-visual reveal">
              <div className="about__plan">
                <Image
                  src={photos.teamMeeting.src}
                  alt={photos.teamMeeting.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  style={{ objectFit: 'cover' }}
                  className="about__plan-photo"
                />
                <div className="about__plan-scrim" aria-hidden="true"></div>
                <div className="about__plan-grid" aria-hidden="true"></div>
                <div className="about__plan-content">
                  <span className="about__plan-tag">On the Job · Estimating Team</span>
                  <h3>15+ years</h3>
                  <p>Field experience on our estimating team — average</p>
                  <div className="about__plan-stats">
                    <div>
                      <strong>$2.4B</strong>
                      <span>Total estimated value</span>
                    </div>
                    <div>
                      <strong>3,400+</strong>
                      <span>Projects delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision section">
        <div className="container">
          <div className="vision__grid">
            <div className="vision__card reveal">
              <span className="eyebrow">Our Vision</span>
              <h2>A trusted global partner for construction design and estimating.</h2>
              <p>
                Our vision is to become a trusted global partner for construction design and
                estimating services by delivering innovative solutions, technical excellence, and
                exceptional client service. We strive to help our clients make informed decisions
                and achieve successful project outcomes through accuracy, efficiency, and
                professional integrity.
              </p>
            </div>

            <div className="vision__industries reveal">
              <span className="eyebrow">Industries We Serve</span>
              <h3>No project is too small or too complex.</h3>
              <p>
                We approach every project with the same level of professionalism, dedication, and
                attention to detail — across every sector we support.
              </p>
              <ul className="vision__industries-list">
                {INDUSTRIES.map((ind) => (
                  <li key={ind}>
                    <Icon name="check" size={14} />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <style>{`
          .vision__grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 56px;
          }
          .vision__card h2 { margin: 12px 0 16px; }
          .vision__card p {
            font-size: 1rem;
            line-height: 1.75;
            color: var(--c-text-muted);
          }
          .vision__industries {
            padding: 32px;
            background: var(--c-bg-alt);
            border: 1px solid var(--c-border);
            border-radius: var(--radius-lg);
          }
          .vision__industries h3 { margin: 10px 0 8px; font-size: 1.25rem; }
          .vision__industries > p {
            font-size: 0.9375rem;
            color: var(--c-text-muted);
            line-height: 1.65;
            margin-bottom: 20px;
          }
          .vision__industries-list {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px 16px;
          }
          .vision__industries-list li {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9375rem;
            color: var(--c-text);
          }
          .vision__industries-list svg { color: var(--c-amber-deep); flex-shrink: 0; }

          @media (max-width: 900px) {
            .vision__grid { grid-template-columns: 1fr; gap: 32px; }
          }
          @media (max-width: 520px) {
            .vision__industries-list { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <section className="values section section--warm">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What We Stand For</span>
            <h2>Four things we don't compromise on.</h2>
          </div>
          <div className="values__grid">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="values__card reveal"
                style={{ '--reveal-delay': `${i * 60}ms` }}
              >
                <div className="values__icon">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Trades />
      <CTA />

      <style>{`
        .about__story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about__story-text h2 { margin-bottom: 20px; }
        .about__story-text p {
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .about__story-actions {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .about__plan {
          position: relative;
          aspect-ratio: 4 / 5;
          background: var(--c-ink);
          color: white;
          border-radius: var(--radius-lg);
          padding: 36px;
          overflow: hidden;
          isolation: isolate;
        }
        .about__plan-photo { z-index: -3; }
        .about__plan-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 26, 48, 0.55) 0%, rgba(6, 26, 48, 0.88) 78%, rgba(6, 26, 48, 0.97) 100%);
          z-index: -2;
        }
        .about__plan-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(245, 158, 11, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.12) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: -1;
        }
        .about__plan-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .about__plan-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--c-amber);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 6px 12px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 100px;
          display: inline-flex;
          align-self: flex-start;
          margin-bottom: 24px;
        }
        .about__plan h3 {
          color: white;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 12px;
          line-height: 1;
        }
        .about__plan p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 1rem;
          max-width: 24ch;
          margin-bottom: auto;
        }
        .about__plan-stats {
          display: flex;
          gap: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          margin-top: 24px;
        }
        .about__plan-stats strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--c-amber);
          line-height: 1.2;
          font-variant-numeric: tabular-nums;
        }
        .about__plan-stats span {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .values__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .values__card {
          padding: 28px 24px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          transition: transform var(--t), box-shadow var(--t);
        }
        .values__card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow);
        }
        .values__icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-bg-tint);
          color: var(--c-ink);
          border-radius: var(--radius);
          margin-bottom: 16px;
        }
        .values__card h3 {
          font-size: 1.0625rem;
          margin-bottom: 8px;
        }
        .values__card p {
          font-size: 0.9375rem;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .about__story { grid-template-columns: 1fr; gap: 56px; }
          .about__plan { max-width: 480px; }
          .values__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .values__grid { grid-template-columns: 1fr; }
          .about__plan { padding: 28px; }
        }
      `}</style>
    </>
  );
}
