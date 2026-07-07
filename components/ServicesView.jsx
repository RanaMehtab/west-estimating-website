'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from './ServiceCard.jsx';
import Process from './Process.jsx';
import CTA from './CTA.jsx';
import useReveal from '../hooks/useReveal.js';
import { photos } from '../lib/photos.js';

const CATEGORIES = ['All', 'Estimating', 'General Contractor', 'Sub-Contractor', 'Design'];

export default function ServicesView({ services }) {
  const [activeCategory, setActiveCategory] = useState('All');
  useReveal([activeCategory]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return services;
    return services.filter((s) => s.category === activeCategory);
  }, [services, activeCategory]);

  return (
    <>
      <section className="page-head page-head--photo">
        <div className="page-head__photo" aria-hidden="true">
          <Image
            src={photos.blueprints.src}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
        <div className="page-head__scrim" aria-hidden="true"></div>
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Services</span>
            </div>
            <span className="eyebrow">Our Services</span>
            <h1>Complete estimating coverage — every trade, every division.</h1>
            <p>
              From single-trade takeoffs to full GC estimates with all CSI divisions. Pick what you
              need, or call and we'll scope it together.
            </p>
          </div>
        </div>
      </section>

      <section className="svc-page section section--warm">
        <div className="container">
          <div className="svc-page__filter reveal" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`svc-page__filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="svc-page__filter-count">
                  {cat === 'All'
                    ? services.length
                    : services.filter((s) => s.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          <div className="svc-page__grid">
            {filtered.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="svc-page__empty">No services in this category yet.</p>
          )}
        </div>

        <style>{`
          .page-head--photo { padding: 0; overflow: hidden; }
          .page-head--photo .page-head__inner { padding: 140px 0 84px; }
          .page-head__photo { position: absolute; inset: 0; z-index: -3; }
          .page-head__scrim {
            position: absolute;
            inset: 0;
            background: linear-gradient(160deg, rgba(6, 26, 48, 0.94) 0%, rgba(10, 37, 64, 0.9) 55%, rgba(10, 37, 64, 0.82) 100%);
            z-index: -2;
          }
          .svc-page__filter {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 40px;
            padding-bottom: 32px;
            border-bottom: 1px solid var(--c-border);
          }
          .svc-page__filter-btn {
            padding: 9px 18px;
            background: white;
            border: 1px solid var(--c-border);
            border-radius: 100px;
            font-family: var(--font-display);
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--c-text);
            transition: all var(--t-fast);
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .svc-page__filter-btn:hover {
            border-color: var(--c-border-strong);
            background: var(--c-bg-alt);
          }
          .svc-page__filter-btn.is-active {
            background: var(--c-ink);
            color: white;
            border-color: var(--c-ink);
          }
          .svc-page__filter-count {
            font-family: var(--font-mono);
            font-size: 0.6875rem;
            padding: 2px 6px;
            background: rgba(0, 0, 0, 0.08);
            border-radius: 6px;
          }
          .svc-page__filter-btn.is-active .svc-page__filter-count {
            background: rgba(245, 158, 11, 0.25);
            color: var(--c-amber);
          }

          .svc-page__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .svc-page__empty {
            text-align: center;
            padding: 64px;
            color: var(--c-text-muted);
          }
          @media (max-width: 1024px) {
            .svc-page__grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 600px) {
            .svc-page__grid { grid-template-columns: 1fr; }
            .page-head--photo .page-head__inner { padding: 112px 0 64px; }
          }
        `}</style>
      </section>

      <section className="svc-band section">
        <div className="container svc-band__inner">
          <div className="svc-band__photo reveal">
            <Image
              src={photos.modernBuilding.src}
              alt={photos.modernBuilding.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="svc-band__text reveal">
            <span className="eyebrow">Every CSI Division</span>
            <h2>General Construction, MEP, Concrete, Structural Steel — and everything between.</h2>
            <p>
              Our estimators specialize in every CSI construction division and trade: General
              Construction, Mechanical, Electrical, Plumbing (MEP), Concrete, Masonry, Structural
              Steel, Metals, Lumber &amp; Framing, Roofing, Insulation, Drywall, Painting,
              Flooring, Doors &amp; Windows, Millwork, Equipment, Furnishings, Specialties, Fire
              Protection, Sitework, Earthwork, Utilities, HVAC, Landscaping, Demolition,
              Waterproofing, and many more.
            </p>
            <p>
              Serving contractors across all 50 states with accurate estimates, fast turnaround
              times, and competitive pricing.
            </p>
          </div>
        </div>

        <style>{`
          .svc-band__inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .svc-band__photo {
            position: relative;
            aspect-ratio: 4 / 3;
            border-radius: var(--radius-lg);
            overflow: hidden;
          }
          .svc-band__text h2 { margin: 12px 0 16px; }
          .svc-band__text p {
            font-size: 0.9375rem;
            line-height: 1.75;
            color: var(--c-text-muted);
            margin-bottom: 12px;
          }
          @media (max-width: 900px) {
            .svc-band__inner { grid-template-columns: 1fr; gap: 32px; }
          }
        `}</style>
      </section>

      <Process />
      <CTA />
    </>
  );
}
