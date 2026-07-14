'use client';

import Icon from './Icon.jsx';
import useReveal from '../hooks/useReveal.js';

const GROUPS = [
  {
    title: 'Construction Estimation Services',
    icon: 'calculator',
    items: [
      'Quantity Takeoffs',
      'Material Takeoffs',
      'Labor Cost Estimates',
      'Equipment Cost Analysis',
      'Bid Estimates',
      'Budget Estimates',
      'Conceptual Estimates',
      'Value Engineering',
      'Change Order Estimates',
      'Procurement Assistance',
      'Bid Support Services'
    ]
  },
  {
    title: 'Architectural Design & CAD Drawings',
    icon: 'blueprint',
    items: [
      'Floor Plans',
      'Elevations',
      'Sections',
      'Site Plans',
      'Construction Drawings',
      'Permit Drawings',
      'As-Built Drawings',
      'Renovation Drawings',
      'Shop Drawings',
      'Detailed CAD Drafting Services'
    ]
  },
  {
    title: 'Structural Detailing Services',
    icon: 'frame',
    items: [
      'Structural Steel Detailing',
      'Reinforced Concrete Detailing',
      'Foundation Plans',
      'Framing Plans',
      'Rebar Detailing',
      'Structural Shop Drawings',
      'Connection Details',
      'Structural Coordination Drawings'
    ]
  },
  {
    title: 'MEP Drawings & Coordination Services',
    icon: 'bolt',
    items: [
      'Mechanical Drawings',
      'Electrical Drawings',
      'Plumbing Drawings',
      'HVAC Layouts',
      'MEP Coordination Drawings',
      'Construction Documentation',
      'Shop Drawings',
      'Clash Detection Support',
      'As-Built Drawings'
    ]
  }
];

export default function ServiceChecklist() {
  useReveal();

  return (
    <section className="checklist section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Complete Service List</span>
          <h2>Everything we offer, in one place.</h2>
          <p>
            From accurate cost estimating to architectural, structural, and MEP drawings — here is
            the full list of services we provide under one roof.
          </p>
        </div>

        <div className="checklist__groups">
          {GROUPS.map((g, gi) => (
            <div
              key={g.title}
              className="checklist__group reveal"
              style={{ '--reveal-delay': `${gi * 60}ms` }}
            >
              <div className="checklist__group-head">
                <span className="checklist__group-icon">
                  <Icon name={g.icon} size={20} />
                </span>
                <h3>{g.title}</h3>
              </div>
              <ul className="checklist__list">
                {g.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .checklist__groups {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .checklist__group {
          padding: 28px 30px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
        }
        .checklist__group-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--c-border);
        }
        .checklist__group-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-ink);
          color: var(--c-amber);
          border-radius: var(--radius);
        }
        .checklist__group-head h3 {
          font-size: 1.0625rem;
          margin: 0;
        }
        .checklist__list {
          list-style: none;
          display: grid;
          gap: 11px;
        }
        .checklist__list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9375rem;
          color: var(--c-text);
        }
        .checklist__list svg {
          flex-shrink: 0;
          color: var(--c-amber-deep);
        }

        @media (max-width: 900px) {
          .checklist__groups { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
