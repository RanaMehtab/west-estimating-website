'use client';

import Link from 'next/link';
import useReveal from '../hooks/useReveal.js';

export default function BlogPostView({ post, children }) {
  useReveal();

  return (
    <>
      <section className="page-head">
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
          .post-head__meta {
            display: flex;
            justify-content: center;
            gap: 10px;
            font-family: var(--font-mono);
            font-size: 0.8125rem;
            color: rgba(255, 255, 255, 0.65);
            margin-top: 4px;
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
