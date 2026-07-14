import Link from 'next/link';
import Icon from '../Icon.jsx';

const CONSIDERS = [
  'Material quantities',
  'Labor requirements',
  'Equipment and machinery',
  'Subcontractor costs',
  'Temporary works',
  'Site logistics',
  'General conditions',
  'Overhead',
  'Profit',
  'Contingencies, where appropriate'
];

const WHY_ESSENTIAL = [
  {
    title: 'Win More Competitive Bids',
    body: 'Contractors need competitive pricing without sacrificing profitability. Accurate estimating supports informed bidding decisions by reducing the risk of underestimating or overpricing work.'
  },
  {
    title: 'Improve Project Profitability',
    body: 'Reliable estimates help identify expected costs early, allowing project teams to manage budgets more effectively throughout construction.'
  },
  {
    title: 'Reduce Costly Errors',
    body: 'Incorrect quantities or overlooked scope items can result in expensive material shortages, schedule disruptions, and unplanned expenditures.'
  },
  {
    title: 'Support Better Procurement',
    body: 'Detailed quantity takeoffs allow purchasing teams to order appropriate material quantities, helping reduce waste and improve inventory management.'
  },
  {
    title: 'Enhance Project Planning',
    body: 'Accurate estimates provide valuable information for scheduling, resource allocation, and financial planning before construction begins.'
  }
];

// The "single list, with a sub-list under each item" breakdown of services.
const SERVICES = [
  {
    title: 'Quantity Takeoff Services',
    intro:
      'Quantity takeoff is one of the most important components of construction estimating. Our team carefully reviews construction drawings to calculate material quantities for every applicable trade. Organized takeoff reports help contractors prepare accurate bids and manage purchasing efficiently.',
    subLabel: 'Typical quantity takeoffs include:',
    sub: [
      'Concrete',
      'Reinforcing steel',
      'Structural steel',
      'Masonry',
      'Lumber',
      'Drywall',
      'Roofing',
      'Flooring',
      'Doors and hardware',
      'Painting',
      'Mechanical systems',
      'Plumbing systems',
      'Electrical systems',
      'Sitework',
      'Earthwork',
      'Landscaping'
    ]
  },
  {
    title: 'Commercial Construction Estimating',
    intro:
      'Commercial projects demand detailed planning and careful cost management. Each estimate is prepared by reviewing project drawings and specifications to provide organized cost information that supports competitive bidding.',
    subLabel: 'West Estimating supports projects such as:',
    sub: [
      'Office buildings',
      'Retail developments',
      'Shopping centers',
      'Educational facilities',
      'Healthcare buildings',
      'Hotels',
      'Warehouses',
      'Industrial buildings',
      'Mixed-use developments'
    ]
  },
  {
    title: 'Residential Construction Estimating',
    intro:
      'Residential estimating requires careful evaluation of architectural drawings, structural components, finishes, and building systems. Whether you\u2019re bidding on a single-family home or a multi-unit residential project, accurate estimating helps reduce uncertainty before construction begins.',
    subLabel: 'Our residential estimating services support:',
    sub: [
      'Custom homes',
      'Luxury residences',
      'Multi-family developments',
      'Apartment buildings',
      'Home additions',
      'Renovations',
      'Townhouse developments'
    ]
  }
];

const TRADES = [
  'Concrete',
  'Earthwork',
  'Sitework',
  'Structural Steel',
  'Masonry',
  'Carpentry',
  'Lumber',
  'Roofing',
  'Drywall',
  'Insulation',
  'Painting',
  'Flooring',
  'Doors, Frames & Hardware',
  'Mechanical (HVAC)',
  'Plumbing',
  'Electrical',
  'Fire Protection',
  'Landscaping'
];

const WHY_CHOOSE = [
  'Accurate quantity takeoffs',
  'Organized estimate reports',
  'Fast turnaround times',
  'Responsive communication',
  'Residential and commercial expertise',
  'Multi-trade estimating capabilities',
  'Integrated design and drafting support'
];

export default function ConstructionEstimatingGuide() {
  return (
    <article className="post">
      <p className="post__lead">
        In today's competitive construction industry, success begins long before the first shovel
        hits the ground. Every profitable project starts with one critical element — an accurate
        construction estimate. Whether you're a general contractor preparing a competitive bid, a
        subcontractor pricing your trade, a developer evaluating project feasibility, or an
        architect planning a new development, accurate estimating is the foundation of sound
        decision-making.
      </p>
      <p>
        Construction projects involve hundreds or even thousands of individual cost items.
        Materials, labor, equipment, subcontractors, permits, logistics, and project schedules all
        influence the final project cost. Even small errors during the estimating phase can affect
        profitability, delay project execution, or reduce your chances of winning bids.
      </p>
      <p>
        At <strong>West Estimating</strong>, we help construction professionals across the United
        States make informed decisions through reliable construction estimating and quantity
        takeoff services. Our experienced team prepares detailed estimates for residential,
        commercial, and selected industrial projects, enabling clients to submit competitive bids,
        manage budgets more effectively, and plan projects with greater confidence.
      </p>

      <h2>What Are Construction Estimating Services?</h2>
      <p>
        Construction estimating is the process of calculating the anticipated cost of completing a
        construction project based on project drawings, specifications, scope, and other available
        information.
      </p>
      <p>A professional estimate typically considers:</p>
      <ul className="post__list">
        {CONSIDERS.map((item) => (
          <li key={item}>
            <Icon name="check" size={14} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p>The goal is to provide an organized, realistic projection of project costs before construction begins.</p>

      <h2>Why Accurate Construction Estimating Is Essential</h2>
      <p>
        A well-prepared estimate is much more than a pricing document. It serves as the financial
        roadmap for the entire project. Professional construction estimating helps organizations:
      </p>
      <div className="post__why-grid">
        {WHY_ESSENTIAL.map((w) => (
          <div key={w.title} className="post__why-card">
            <h3>{w.title}</h3>
            <p>{w.body}</p>
          </div>
        ))}
      </div>

      <h2>Our Construction Estimating Services</h2>
      <p>
        West Estimating provides comprehensive estimating solutions tailored to the needs of
        construction professionals across the United States.
      </p>

      {/* Single list of services, each with its own sub-list */}
      <ol className="post__services">
        {SERVICES.map((s) => (
          <li key={s.title} className="post__services-item">
            <h3>{s.title}</h3>
            <p>{s.intro}</p>
            <p className="post__sub-label">{s.subLabel}</p>
            <ul className="post__sub-list">
              {s.sub.map((item) => (
                <li key={item}>
                  <Icon name="check" size={13} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2>Construction Trades We Support</h2>
      <p>
        West Estimating prepares estimates and quantity takeoffs for a wide range of construction
        trades, including:
      </p>
      <ul className="post__list post__list--cols">
        {TRADES.map((t) => (
          <li key={t}>
            <Icon name="check" size={14} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <p>
        This broad experience allows us to support projects involving multiple disciplines under
        one coordinated estimating process.
      </p>

      <h2>Beyond Estimating: Design &amp; Drafting Support</h2>
      <p>
        Accurate estimating starts with quality construction documents. In addition to estimating
        services, West Estimating also provides professional design and drafting support, including
        architectural drafting, structural design, MEP design, and sitework design.
      </p>
      <p>
        By combining design expertise with estimating knowledge, we help clients improve
        coordination during the planning stage and support more efficient project development.
      </p>

      <h2>Why Choose West Estimating?</h2>
      <p>
        Construction professionals trust West Estimating because we focus on delivering dependable
        estimating solutions supported by industry knowledge and attention to detail. Our clients
        value:
      </p>
      <ul className="post__list">
        {WHY_CHOOSE.map((item) => (
          <li key={item}>
            <Icon name="check" size={14} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p>
        We understand that every project is different. Our objective is to provide estimating
        information that helps clients make informed decisions and prepare competitive bids with
        confidence.
      </p>

      <div className="post__cta">
        <div>
          <h3>Ready for an accurate estimate?</h3>
          <p>Send us your plans and get a detailed, organized estimate back in days, not weeks.</p>
        </div>
        <Link href="/contact" className="btn btn--primary btn--lg">
          Request a Quote
          <Icon name="arrow" size={16} className="arrow" />
        </Link>
      </div>

      <style>{`
        .post { font-size: 1rem; }
        .post h2 {
          margin: 48px 0 16px;
          font-size: 1.5rem;
        }
        .post h2:first-of-type { margin-top: 8px; }
        .post h3 { font-size: 1.0625rem; margin-bottom: 8px; }
        .post p {
          line-height: 1.75;
          color: var(--c-text);
          margin-bottom: 16px;
        }
        .post__lead {
          font-size: 1.125rem;
          color: var(--c-text-muted);
          line-height: 1.75;
        }

        .post__list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 20px;
          margin: 20px 0 24px;
        }
        .post__list--cols { grid-template-columns: repeat(3, 1fr); }
        .post__list li,
        .post__sub-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.9375rem;
          color: var(--c-text);
        }
        .post__list svg,
        .post__sub-list svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: var(--c-amber-deep);
        }

        .post__why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 24px 0 8px;
        }
        .post__why-card {
          padding: 22px 24px;
          background: var(--c-bg-warm);
          border: 1px solid var(--c-border);
          border-radius: var(--radius);
        }
        .post__why-card p { margin: 0; font-size: 0.9375rem; color: var(--c-text-muted); }

        /* Single unified list of services, each holding a sub-list */
        .post__services {
          list-style: decimal;
          padding-left: 22px;
          margin: 24px 0 8px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .post__services-item::marker {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--c-amber-deep);
        }
        .post__services-item h3 { margin-bottom: 8px; }
        .post__services-item > p { margin-bottom: 10px; }
        .post__sub-label {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--c-ink);
          margin-bottom: 10px !important;
        }
        .post__sub-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 20px;
          padding: 18px 20px;
          background: var(--c-bg-alt);
          border-radius: var(--radius);
          margin: 0;
        }

        .post__cta {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: center;
          margin-top: 48px;
          padding: 32px;
          background: var(--c-ink);
          border-radius: var(--radius-lg);
          color: white;
        }
        .post__cta h3 { color: white; margin-bottom: 4px; }
        .post__cta p { color: rgba(255, 255, 255, 0.75); margin: 0; }

        @media (max-width: 700px) {
          .post__list,
          .post__list--cols,
          .post__sub-list,
          .post__why-grid { grid-template-columns: 1fr; }
          .post__cta { grid-template-columns: 1fr; text-align: center; }
        }
      `}</style>
    </article>
  );
}
