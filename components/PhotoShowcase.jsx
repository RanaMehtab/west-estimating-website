'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';
import { photos } from '../lib/photos.js';

export default function PhotoShowcase() {
  useReveal();

  return (
    <section className="showcase section section--alt" id="in-the-field">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">In The Field</span>
          <h2>Every job site, every angle, every hour.</h2>
          <p>
            From sunrise walkthroughs to midnight pours — our estimators build their takeoffs
            around how work actually happens on your site.
          </p>
        </div>

        <div className="showcase__grid">
          {/* Aerial — drone view, top-down cost analysis */}
          <figure className="showcase__tile showcase__tile--wide reveal">
            <Link href="/gallery/drone-site-analysis" className="showcase__tile-link" aria-label="Read more about drone site analysis"></Link>
            <Image
              src={photos.aerialSite.src}
              alt={photos.aerialSite.alt}
              fill
              sizes="(max-width: 900px) 100vw, 66vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="showcase__scrim" aria-hidden="true"></div>
            <figcaption>
              <span className="showcase__tag">Drone View</span>
              <strong>Top-down site &amp; quantity analysis</strong>
              <span className="showcase__more">View details <Icon name="arrow" size={12} /></span>
            </figcaption>
          </figure>

          {/* Custom illustrated tile — cost-estimation app / tablet */}
          <div className="showcase__tile showcase__tile--app reveal">
            <Link href="/gallery/live-estimate-app" className="showcase__tile-link" aria-label="Read more about the on-site estimating app"></Link>
            <div className="showcase__app-grid" aria-hidden="true"></div>
            <div className="showcase__app-mock">
              <div className="showcase__app-dot"></div>
              <div className="showcase__app-row" style={{ width: '78%' }}></div>
              <div className="showcase__app-row" style={{ width: '54%' }}></div>
              <div className="showcase__app-row showcase__app-row--amber" style={{ width: '66%' }}></div>
              <Icon name="dollar" size={18} className="showcase__app-icon" />
            </div>
            <figcaption>
              <span className="showcase__tag">On-Site App</span>
              <strong>Live estimate, right on the tablet</strong>
              <span className="showcase__more">View details <Icon name="arrow" size={12} /></span>
            </figcaption>
          </div>

          {/* Team meeting */}
          <figure className="showcase__tile reveal">
            <Link href="/gallery/team-budget-meeting" className="showcase__tile-link" aria-label="Read more about team budget meetings"></Link>
            <Image
              src={photos.teamMeeting.src}
              alt={photos.teamMeeting.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="showcase__scrim" aria-hidden="true"></div>
            <figcaption>
              <span className="showcase__tag">Team Meeting</span>
              <strong>Talking budget, on site</strong>
              <span className="showcase__more">View details <Icon name="arrow" size={12} /></span>
            </figcaption>
          </figure>

          {/* Blueprints on site */}
          <figure className="showcase__tile reveal">
            <Link href="/gallery/plan-review-on-site" className="showcase__tile-link" aria-label="Read more about on-site plan review"></Link>
            <Image
              src={photos.blueprintOnSite.src}
              alt={photos.blueprintOnSite.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="showcase__scrim" aria-hidden="true"></div>
            <figcaption>
              <span className="showcase__tag">Plan Review</span>
              <strong>Walking the drawings on site</strong>
              <span className="showcase__more">View details <Icon name="arrow" size={12} /></span>
            </figcaption>
          </figure>

          {/* Night site */}
          <figure className="showcase__tile reveal">
            <Link href="/gallery/night-shift-site" className="showcase__tile-link" aria-label="Read more about night shift estimating"></Link>
            <Image
              src={photos.nightSite.src}
              alt={photos.nightSite.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="showcase__scrim showcase__scrim--dark" aria-hidden="true"></div>
            <figcaption>
              <span className="showcase__tag">Night Shift</span>
              <strong>Lit up, still on schedule</strong>
              <span className="showcase__more">View details <Icon name="arrow" size={12} /></span>
            </figcaption>
          </figure>

          {/* Modern building — clean visualization */}
          <figure className="showcase__tile reveal">
            <Link href="/gallery/modern-structural-builds" className="showcase__tile-link" aria-label="Read more about modern structural builds"></Link>
            <Image
              src={photos.modernBuilding.src}
              alt={photos.modernBuilding.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="showcase__scrim" aria-hidden="true"></div>
            <figcaption>
              <span className="showcase__tag">Modern Builds</span>
              <strong>Clean structure, clean numbers</strong>
              <span className="showcase__more">View details <Icon name="arrow" size={12} /></span>
            </figcaption>
          </figure>

          {/* Blueprints on table */}
          <figure className="showcase__tile reveal">
            <Link href="/gallery/takeoff-table" className="showcase__tile-link" aria-label="Read more about the takeoff process"></Link>
            <Image
              src={photos.blueprints.src}
              alt={photos.blueprints.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="showcase__scrim" aria-hidden="true"></div>
            <figcaption>
              <span className="showcase__tag">Takeoff Table</span>
              <strong>Every division, measured by hand</strong>
              <span className="showcase__more">View details <Icon name="arrow" size={12} /></span>
            </figcaption>
          </figure>

          {/* Custom illustrated tile — presentation-ready summary */}
          <div className="showcase__tile showcase__tile--summary reveal">
            <Link href="/gallery/bid-ready-summary" className="showcase__tile-link" aria-label="Read more about bid-ready summaries"></Link>
            <div className="showcase__summary-glow" aria-hidden="true"></div>
            <div className="showcase__summary-icon">
              <Icon name="check" size={22} />
            </div>
            <strong>Bid-ready, presentation-ready</strong>
            <p>Clean summaries your team can hand straight to ownership.</p>
            <span className="showcase__more showcase__more--dark">View details <Icon name="arrow" size={12} /></span>
          </div>
        </div>
      </div>

      <style>{`
        .showcase__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 220px;
          gap: 16px;
        }
        .showcase__tile {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
          isolation: isolate;
        }
        .showcase__tile-link {
          position: absolute;
          inset: 0;
          z-index: 5;
          cursor: pointer;
        }
        .showcase__tile:hover { box-shadow: var(--shadow-lg); }
        .showcase__more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity var(--t-fast), transform var(--t-fast);
        }
        .showcase__more svg { transition: transform var(--t-fast); }
        .showcase__tile:hover .showcase__more {
          opacity: 1;
          transform: translateY(0);
        }
        .showcase__tile:hover .showcase__more svg { transform: translateX(3px); }
        .showcase__more--dark { color: var(--c-ink); }
        .showcase__tile--wide {
          grid-column: span 2;
          grid-row: span 2;
        }
        .showcase__tile img { transition: transform var(--t-slow); }
        .showcase__tile:hover img { transform: scale(1.05); }
        .showcase__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 26, 48, 0) 40%, rgba(6, 26, 48, 0.82) 100%);
        }
        .showcase__scrim--dark {
          background: linear-gradient(180deg, rgba(6, 26, 48, 0.15) 0%, rgba(6, 26, 48, 0.9) 100%);
        }
        .showcase__tile figcaption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .showcase__tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--c-amber);
        }
        .showcase__tile figcaption strong {
          color: white;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.3;
        }

        /* App mock tile */
        .showcase__tile--app {
          background: var(--c-ink);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .showcase__app-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .showcase__app-mock {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: var(--radius);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .showcase__app-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--c-amber);
          margin-bottom: 4px;
        }
        .showcase__app-row {
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.18);
        }
        .showcase__app-row--amber { background: var(--c-amber); }
        .showcase__app-icon {
          position: absolute;
          top: 16px;
          right: 16px;
          color: var(--c-amber);
          opacity: 0.8;
        }
        .showcase__tile--app figcaption {
          position: static;
          padding: 0;
        }

        /* Summary tile */
        .showcase__tile--summary {
          background: linear-gradient(160deg, var(--c-amber) 0%, var(--c-amber-deep) 100%);
          color: var(--c-ink);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
        }
        .showcase__summary-glow {
          position: absolute;
          top: -40%;
          right: -20%;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, transparent 70%);
        }
        .showcase__summary-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-ink);
          color: var(--c-amber);
          border-radius: var(--radius);
        }
        .showcase__tile--summary strong {
          font-family: var(--font-display);
          font-size: 1.0625rem;
          font-weight: 800;
          line-height: 1.3;
        }
        .showcase__tile--summary p {
          font-size: 0.875rem;
          line-height: 1.5;
          color: rgba(10, 37, 64, 0.75);
        }

        @media (max-width: 900px) {
          .showcase__grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 200px;
          }
          .showcase__tile--wide { grid-column: span 2; grid-row: span 1; }
        }
        @media (max-width: 560px) {
          .showcase__grid { grid-template-columns: 1fr; }
          .showcase__tile--wide { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
