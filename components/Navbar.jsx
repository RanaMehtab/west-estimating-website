'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from './Icon.jsx';
import { services } from '../lib/services.js';

const CATEGORY_ORDER = [...new Set(services.map((s) => s.category))];

function NavItem({ href, exact = false, className = '', children }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname === href || pathname.startsWith(href + '/');
  return (
    <Link href={href} className={`${className} ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORY_ORDER[0]);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link href="/" className="nav__logo" aria-label="West Estimating — home">
          <span className="nav__logo-mark" aria-hidden="true">
            <Image src="/images/logo.jpeg" alt="" width={40} height={40} priority />
          </span>
          <span className="nav__logo-text">
            <span className="nav__logo-name">West Estimating</span>
            <span className="nav__logo-tagline">Construction Cost Experts</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <NavItem href="/" exact className="nav__link">
            Home
          </NavItem>
          <NavItem href="/about" className="nav__link">
            About
          </NavItem>
          <div
            className={`nav__dropdown ${servicesOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavItem
              href="/services"
              className="nav__link nav__link--has-arrow"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </NavItem>
            <div className="nav__menu" role="menu">
              <div className="nav__menu-head">
                <span className="eyebrow">Our Services</span>
                <h4>Complete estimating coverage</h4>
                <p>From conceptual budgets to bid-ready takeoffs across every trade.</p>
              </div>
              <div className="nav__menu-list">
                {CATEGORY_ORDER.map((cat) => {
                  const items = services.filter((s) => s.category === cat);
                  const isActive = activeCategory === cat;
                  return (
                    <div
                      key={cat}
                      className={`nav__menu-cat ${isActive ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveCategory(cat)}
                    >
                      <span className="nav__menu-cat-label">
                        {cat}
                        <Icon name="arrow" size={13} />
                      </span>

                      {isActive && (
                        <div className="nav__menu-flyout">
                          {items.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="nav__menu-flyout-item">
                              <Icon name={s.icon} size={16} />
                              <span>{s.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <Link href="/services" className="nav__menu-foot">
                View all services
                <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>
          <NavItem href="/contact" className="nav__link">
            Contact
          </NavItem>
          <NavItem href="/blog" className="nav__link">
            Blog
          </NavItem>
        </nav>

        <Link href="/contact" className="btn btn--primary nav__cta">
          Get a Free Quote
          <Icon name="arrow" size={14} className="arrow" />
        </Link>

        <button
          className="nav__burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      <div className={`nav__drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="nav__drawer-inner" aria-label="Mobile">
          <NavItem href="/" exact className="nav__drawer-link">
            Home
          </NavItem>
          <NavItem href="/about" className="nav__drawer-link">
            About
          </NavItem>
          <NavItem href="/services" className="nav__drawer-link">
            Services
          </NavItem>
          <NavItem href="/contact" className="nav__drawer-link">
            Contact
          </NavItem>
          <NavItem href="/blog" className="nav__drawer-link">
            Blog
          </NavItem>
          <Link href="/contact" className="btn btn--primary btn--lg nav__drawer-cta">
            Get a Free Quote
            <Icon name="arrow" size={16} className="arrow" />
          </Link>
        </nav>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: saturate(180%) blur(14px);
          -webkit-backdrop-filter: saturate(180%) blur(14px);
          border-bottom: 1px solid transparent;
          transition: box-shadow var(--t), border-color var(--t);
        }
        .nav--scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-bottom-color: var(--c-border);
          box-shadow: 0 4px 24px -8px rgba(10, 37, 64, 0.08);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          height: 76px;
        }
        .nav__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--c-ink);
          flex-shrink: 0;
        }
        .nav__logo:hover { color: var(--c-ink); }
        .nav__logo-mark {
          display: flex;
          flex-shrink: 0;
          border-radius: 9px;
          overflow: hidden;
        }
        .nav__logo-mark img { display: block; width: 40px; height: 40px; object-fit: cover; }
        .nav__logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .nav__logo-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1875rem;
          letter-spacing: -0.025em;
          color: var(--c-ink);
        }
        .nav__logo-tagline {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--c-text-muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .nav__links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav__link {
          position: relative;
          padding: 10px 16px;
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--c-text);
          border-radius: var(--radius-sm);
          transition: color var(--t-fast), background var(--t-fast);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .nav__link:hover {
          color: var(--c-ink);
          background: var(--c-bg-alt);
        }
        .nav__link.active {
          color: var(--c-ink);
        }
        .nav__link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 16px;
          right: 16px;
          height: 2px;
          background: var(--c-amber);
          border-radius: 1px;
        }
        .nav__link--has-arrow svg { transition: transform var(--t-fast); }
        .nav__dropdown.is-open .nav__link--has-arrow svg { transform: rotate(180deg); }

        .nav__dropdown {
          position: relative;
        }
        .nav__menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          width: 300px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: 20px;
          opacity: 0;
          visibility: hidden;
          transition: opacity var(--t), transform var(--t), visibility var(--t);
        }
        .nav__dropdown.is-open .nav__menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .nav__menu-head {
          padding: 0 4px 14px;
          margin-bottom: 8px;
          border-bottom: 1px solid var(--c-border);
        }
        .nav__menu-head h4 {
          font-size: 1rem;
          margin-bottom: 4px;
        }
        .nav__menu-head p {
          font-size: 0.8125rem;
          color: var(--c-text-muted);
          margin: 0;
        }
        .nav__menu-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .nav__menu-cat {
          position: relative;
        }
        .nav__menu-cat-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 12px 14px;
          border-radius: var(--radius);
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--c-text);
          cursor: default;
          transition: background var(--t-fast), color var(--t-fast);
        }
        .nav__menu-cat-label svg { color: var(--c-text-faint); flex-shrink: 0; }
        .nav__menu-cat.is-active .nav__menu-cat-label {
          background: var(--c-amber);
          color: var(--c-ink-deep);
        }
        .nav__menu-cat.is-active .nav__menu-cat-label svg { color: var(--c-ink-deep); }
        .nav__menu-flyout {
          position: absolute;
          top: -1px;
          left: calc(100% + 8px);
          width: 280px;
          background: white;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .nav__menu-flyout-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--c-text);
          transition: background var(--t-fast), color var(--t-fast);
        }
        .nav__menu-flyout-item svg { flex-shrink: 0; color: var(--c-amber-deep); }
        .nav__menu-flyout-item:hover {
          background: var(--c-bg-alt);
          color: var(--c-ink);
        }
        .nav__menu-foot {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          padding: 8px 12px;
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--c-amber-deep);
        }
        .nav__menu-foot:hover { color: var(--c-amber-deep); gap: 10px; }

        .nav__cta { padding: 11px 20px; font-size: 0.875rem; }
        .nav__burger {
          display: none;
          padding: 8px;
          color: var(--c-ink);
        }

        .nav__drawer {
          position: fixed;
          top: 76px;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          z-index: 49;
          transform: translateX(100%);
          transition: transform var(--t-slow);
          overflow-y: auto;
        }
        .nav__drawer.is-open {
          transform: translateX(0);
        }
        .nav__drawer-inner {
          display: flex;
          flex-direction: column;
          padding: 32px 24px;
          gap: 4px;
        }
        .nav__drawer-link {
          padding: 16px 4px;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--c-ink);
          border-bottom: 1px solid var(--c-border);
        }
        .nav__drawer-link.active { color: var(--c-amber-deep); }
        .nav__drawer-cta { margin-top: 24px; }

        @media (max-width: 1050px) {
          .nav__links { display: none; }
          .nav__cta { display: none; }
          .nav__burger { display: inline-flex; }
        }
        @media (max-width: 600px) {
          .nav__inner { height: 64px; }
          .nav__drawer { top: 64px; }
          .nav__logo-tagline { display: none; }
        }
      `}</style>
    </header>
  );
}
