'use client';

import { useEffect, useRef, useState } from 'react';
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

function ChecklistRow({ group, isOpen, onToggle, index }) {
  const panelRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    setHeight(isOpen ? el.scrollHeight : 0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleResize() {
      if (panelRef.current) setHeight(panelRef.current.scrollHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className={`checklist__row reveal ${isOpen ? 'is-open' : ''}`} style={{ '--reveal-delay': `${index * 50}ms` }}>
      <button className="checklist__row-head" onClick={onToggle} type="button" aria-expanded={isOpen}>
        <span className="checklist__row-icon">
          <Icon name={group.icon} size={20} />
        </span>
        <span className="checklist__row-title">{group.title}</span>
        <span className="checklist__row-count">{group.items.length}</span>
        <span className="checklist__row-chevron">
          <Icon name={isOpen ? 'minus' : 'plus'} size={16} />
        </span>
      </button>
      <div className="checklist__row-panel" style={{ maxHeight: `${height}px` }}>
        <ul className="checklist__row-list" ref={panelRef}>
          {group.items.map((item) => (
            <li key={item}>
              <Icon name="check" size={14} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServiceChecklist() {
  useReveal();
  const [openIndex, setOpenIndex] = useState(0);

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

        <div className="checklist__list">
          {GROUPS.map((g, i) => (
            <ChecklistRow
              key={g.title}
              group={g}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .checklist__list {
          max-width: 820px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .checklist__row {
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: border-color var(--t), box-shadow var(--t);
        }
        .checklist__row.is-open {
          border-color: var(--c-border-strong);
          box-shadow: var(--shadow);
        }
        .checklist__row-head {
          width: 100%;
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          text-align: left;
        }
        .checklist__row-icon {
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
        .checklist__row-title {
          font-family: var(--font-display);
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--c-ink);
        }
        .checklist__row-count {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 9px;
          background: var(--c-bg-tint);
          color: var(--c-text-muted);
          border-radius: 100px;
        }
        .checklist__row-chevron {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-bg-alt);
          border-radius: var(--radius-sm);
          color: var(--c-ink);
          transition: background var(--t-fast), color var(--t-fast);
        }
        .checklist__row.is-open .checklist__row-chevron {
          background: var(--c-ink);
          color: var(--c-amber);
        }
        .checklist__row-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--t-slow) ease;
        }
        .checklist__row-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 4px 22px 22px 78px;
          margin: 0;
        }
        .checklist__row-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          font-size: 0.9375rem;
          color: var(--c-text);
          border-bottom: 1px dashed var(--c-border);
        }
        .checklist__row-list li:last-child { border-bottom: none; }
        .checklist__row-list svg { flex-shrink: 0; color: var(--c-amber-deep); }

        @media (max-width: 600px) {
          .checklist__row-head { grid-template-columns: auto 1fr auto; gap: 10px; padding: 16px; }
          .checklist__row-count { display: none; }
          .checklist__row-list { padding: 4px 16px 18px 16px; }
        }
      `}</style>
    </section>
  );
}
