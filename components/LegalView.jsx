import Link from 'next/link';

export default function LegalView({ title, updated, children }) {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <div className="crumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>{title}</span>
            </div>
            <span className="eyebrow">Legal</span>
            <h1>{title}</h1>
            <p>Last updated: {updated}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-prose">{children}</div>
        </div>
      </section>

      <style>{`
        .legal-prose {
          max-width: 760px;
          margin: 0 auto;
        }
        .legal-prose h2 {
          font-size: 1.375rem;
          margin-top: 40px;
          margin-bottom: 12px;
        }
        .legal-prose h2:first-child { margin-top: 0; }
        .legal-prose p {
          font-size: 0.9375rem;
          line-height: 1.75;
          color: var(--c-text-muted);
          margin-bottom: 14px;
        }
        .legal-prose ul {
          margin: 0 0 14px 20px;
          color: var(--c-text-muted);
          font-size: 0.9375rem;
          line-height: 1.75;
        }
        .legal-prose a { color: var(--c-ink); text-decoration: underline; }
      `}</style>
    </>
  );
}
