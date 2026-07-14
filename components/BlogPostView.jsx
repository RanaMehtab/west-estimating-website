'use client';

import Link from 'next/link';
import Image from 'next/image';
import useReveal from '../hooks/useReveal.js';
import { photos } from '../lib/photos.js';

export default function BlogPostView({ post, children }) {
  useReveal();

  return (
    <>
      <section className="page-head page-head--photo">
        <div className="page-head__photo" aria-hidden="true">
          <Image
            src={photos[post.image]?.src || photos.blueprints.src}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
        </div>
        <div className="page-head__scrim" aria-hidden="true"></div>
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="sep">/</span>
              <span>{post.title}</span>
            </div>
            <span className="eyebrow">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-head__meta">
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
          .post-head__meta {
            display: flex;
            justify-content: center;
            gap: 10px;
            font-family: var(--font-mono);
            font-size: 0.8125rem;
            color: rgba(255, 255, 255, 0.65);
            margin-top: 4px;
          }
          @media (max-width: 600px) {
            .page-head--photo .page-head__inner { padding: 112px 0 64px; }
          }
        `}</style>
      </section>

      <section className="post-detail section">
        <div className="container post-detail__container">{children}</div>

        <style>{`
          .post-detail__container {
            max-width: 780px;
            margin: 0 auto;
          }
        `}</style>
      </section>
    </>
  );
}
