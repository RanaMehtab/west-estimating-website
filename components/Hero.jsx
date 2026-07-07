'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon.jsx';
import { photos } from '../lib/photos.js';

export default function Hero() {
  return (
    <section className="hero">
      {/* Big background photo */}
      <div className="hero__photo" aria-hidden="true">
        <Image
          src={photos.aerialSite.src}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>
      <div className="hero__scrim" aria-hidden="true"></div>
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--secondary" aria-hidden="true"></div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <span className="hero__dot" aria-hidden="true"></span>
            Construction Estimating · Nationwide
          </span>
          <h1 className="hero__title">
            Accurate estimates.<br />
            <span className="hero__title-accent">Winning bids.</span>
          </h1>
          <p className="hero__lead">
            Quantity takeoffs and cost estimates for general contractors, subcontractors, and
            developers. Detailed division-by-division, delivered in days — not weeks.
          </p>

          <div className="hero__actions">
            <Link href="/contact" className="btn btn--primary btn--lg">
              Get a Free Quote
              <Icon name="arrow" size={16} className="arrow" />
            </Link>
            <Link href="/services" className="btn btn--ghost btn--lg">
              See All Services
            </Link>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <Icon name="shield" size={18} />
              <span>NDA on every project</span>
            </div>
            <div className="hero__trust-item">
              <Icon name="clock" size={18} />
              <span>3–7 day turnaround</span>
            </div>
            <div className="hero__trust-item">
              <Icon name="check" size={18} />
              <span>±5% accuracy</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          color: white;
          padding: 140px 0 160px;
          overflow: hidden;
          isolation: isolate;
          min-height: 640px;
          display: flex;
          align-items: center;
        }
        .hero__photo {
          position: absolute;
          inset: 0;
          z-index: -3;
        }
        .hero__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            rgba(6, 26, 48, 0.88) 0%,
            rgba(10, 37, 64, 0.72) 32%,
            rgba(10, 37, 64, 0.42) 58%,
            rgba(10, 37, 64, 0.25) 100%
          );
          z-index: -2;
        }
        .hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 1100px 600px at 30% 50%, black 30%, transparent 80%);
          pointer-events: none;
          z-index: -1;
        }
        .hero__glow {
          position: absolute;
          top: 20%;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, transparent 65%);
          pointer-events: none;
          z-index: -1;
        }
        .hero__glow--secondary {
          top: auto;
          bottom: -120px;
          left: -80px;
          right: auto;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(56, 130, 199, 0.2) 0%, transparent 70%);
        }

        .hero__inner {
          position: relative;
        }

        .hero__content {
          max-width: 640px;
        }

        .hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.04em;
          margin-bottom: 24px;
          backdrop-filter: blur(4px);
        }
        .hero__dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--c-amber);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(245, 158, 11, 0.8);
        }
        .hero__title {
          color: white;
          font-size: clamp(2.5rem, 5.5vw, 4.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin-bottom: 24px;
          text-shadow: 0 2px 28px rgba(0, 0, 0, 0.35);
        }
        .hero__title-accent {
          background: linear-gradient(135deg, var(--c-amber) 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero__lead {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1875rem;
          line-height: 1.7;
          max-width: 52ch;
          margin-bottom: 36px;
          text-shadow: 0 1px 16px rgba(0, 0, 0, 0.3);
        }
        .hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .hero__trust {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
        }
        .hero__trust-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
        }
        .hero__trust-item svg { color: var(--c-amber); }

        @media (max-width: 1024px) {
          .hero { padding: 120px 0 96px; min-height: 560px; }
        }
        @media (max-width: 600px) {
          .hero { padding: 96px 0 72px; min-height: 480px; }
          .hero__trust { gap: 16px; }
        }
      `}</style>
    </section>
  );
}
