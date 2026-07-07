'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon.jsx';
import CTA from './CTA.jsx';
import useReveal from '../hooks/useReveal.js';
import { photos } from '../lib/photos.js';

export default function GalleryDetailView({ item, related }) {
  useReveal([item]);

  const photo = item.photoKey ? photos[item.photoKey] : null;

  return (
    <>
      <section className={`page-head ${photo ? 'page-head--photo' : ''}`}>
        {photo && (
          <div className="page-head__photo" aria-hidden="true">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
          </div>
        )}
        {photo && <div className="page-head__scrim" aria-hidden="true"></div>}

        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/#in-the-field">In The Field</Link>
              <span className="sep">/</span>
              <span>{item.title}</span>
            </div>
            <span className="eyebrow">{item.tag}</span>
            <h1>{item.title}</h1>
            <p>{item.summary}</p>
          </div>
        </div>
      </section>

      <section className="gallery-detail section">
        <div className="container">
          <div className="gallery-detail__layout">
            <div className="gallery-detail__main reveal">
              {item.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <div className="gallery-detail__back">
                <Link href="/#in-the-field" className="btn btn--outline">
                  <Icon name="arrow" size={14} className="arrow arrow--back" />
                  Back to In The Field
                </Link>
              </div>
            </div>

            {related && (
              <aside className="gallery-detail__side reveal">
                <div className="gallery-detail__card">
                  <span className="gallery-detail__card-label">Related Service</span>
                  <h3>{related.title}</h3>
                  <p>{related.shortDescription}</p>
                  <Link href={`/services/${related.slug}`} className="btn btn--primary">
                    View Service
                    <Icon name="arrow" size={14} className="arrow" />
                  </Link>
                </div>
              </aside>
            )}
          </div>
        </div>

        <style>{`
          .gallery-detail__layout {
            display: grid;
            grid-template-columns: 1fr 320px;
            gap: 56px;
            align-items: start;
          }
          .gallery-detail__main p {
            font-size: 1rem;
            line-height: 1.8;
            color: var(--c-text-muted);
            margin-bottom: 20px;
            max-width: 68ch;
          }
          .gallery-detail__back { margin-top: 24px; }
          .arrow--back { transform: rotate(180deg); }
          .gallery-detail__card {
            position: sticky;
            top: 100px;
            background: var(--c-bg-alt);
            border: 1px solid var(--c-border);
            border-radius: var(--radius-lg);
            padding: 28px;
          }
          .gallery-detail__card-label {
            font-family: var(--font-mono);
            font-size: 0.6875rem;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--c-amber-deep);
          }
          .gallery-detail__card h3 { margin: 10px 0 10px; font-size: 1.125rem; }
          .gallery-detail__card p {
            font-size: 0.875rem;
            line-height: 1.6;
            color: var(--c-text-muted);
            margin-bottom: 20px;
          }
          @media (max-width: 900px) {
            .gallery-detail__layout { grid-template-columns: 1fr; }
            .gallery-detail__card { position: static; }
          }
        `}</style>
      </section>

      <CTA />
    </>
  );
}
