'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon.jsx';
import CTA from './CTA.jsx';
import useReveal from '../hooks/useReveal.js';
import { blogPosts } from '../lib/blog.js';
import { photos } from '../lib/photos.js';

export default function BlogListView() {
  useReveal();

  return (
    <>
      <section className="page-head page-head--photo">
        <div className="page-head__photo" aria-hidden="true">
          <Image
            src={photos.blueprintOnSite.src}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          />
        </div>
        <div className="page-head__scrim" aria-hidden="true"></div>
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Blog</span>
            </div>
            <span className="eyebrow">Estimating Guides & Insights</span>
            <h1>Guides on cost estimation, takeoffs, and design coordination.</h1>
            <p>
              Practical, in-depth articles from our estimating team — written for contractors,
              developers, and design professionals who want to bid smarter.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-list section">
        <div className="container">
          <div className="blog-list__grid">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card reveal"
                style={{ '--reveal-delay': `${i * 60}ms` }}
              >
                <div className="blog-card__photo">
                  <Image
                    src={photos[post.image]?.src || photos.blueprints.src}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 90vw, 360px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="blog-card__body">
                  <span className="blog-card__category">{post.category}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="blog-card__link">
                    Read the guide
                    <Icon name="arrow" size={14} className="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
          .blog-list__grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .blog-card {
            display: flex;
            flex-direction: column;
            background: white;
            border: 1px solid var(--c-border);
            border-radius: var(--radius-lg);
            overflow: hidden;
            transition: transform var(--t), box-shadow var(--t), border-color var(--t);
            color: var(--c-text);
          }
          .blog-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow);
            border-color: var(--c-border-strong);
            color: var(--c-text);
          }
          .blog-card__photo {
            position: relative;
            aspect-ratio: 16 / 9;
          }
          .blog-card__body {
            padding: 28px 32px 32px;
          }
          .blog-card__category {
            display: inline-block;
            font-family: var(--font-mono);
            font-size: 0.6875rem;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--c-amber-deep);
            margin-bottom: 12px;
          }
          .blog-card h2 {
            font-size: 1.25rem;
            margin-bottom: 10px;
            color: var(--c-ink);
          }
          .blog-card p {
            font-size: 0.9375rem;
            line-height: 1.65;
            color: var(--c-text-muted);
            margin-bottom: 20px;
          }
          .blog-card__meta {
            display: flex;
            gap: 8px;
            font-family: var(--font-mono);
            font-size: 0.75rem;
            color: var(--c-text-faint);
            margin-bottom: 20px;
          }
          .blog-card__link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-family: var(--font-display);
            font-size: 0.9375rem;
            font-weight: 600;
            color: var(--c-amber-deep);
          }
          @media (max-width: 900px) {
            .blog-list__grid { grid-template-columns: 1fr; }
            .page-head--photo .page-head__inner { padding: 112px 0 64px; }
          }
        `}</style>
      </section>

      <CTA />
    </>
  );
}
