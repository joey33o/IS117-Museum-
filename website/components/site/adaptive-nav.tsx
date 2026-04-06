"use client";

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/eras#earthbound-observers', label: 'Earthbound Observers' },
  { href: '/eras#cosmic-instruments', label: 'Cosmic Instruments' },
  { href: '/eras#era2-open-questions', label: 'Future Questions' },
];

export function AdaptiveNav() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || '');
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && activeHash === '';
    }

    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const expectedPath = href.slice(0, hashIndex) || '/';
      const expectedHash = href.slice(hashIndex);
      return pathname === expectedPath && activeHash === expectedHash;
    }

    return pathname === href;
  };

  return (
    <header className="adaptive-nav-shell adaptive-nav-shell--terrestrial" role="banner">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="adaptive-nav-inner">
        <Link href="/" className="adaptive-nav-brand">
          The Celestial Eye
        </Link>
        <nav aria-label="Primary" className="adaptive-nav-links">
          {navItems.map((item) => {
            const active = isItemActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`adaptive-nav-link${active ? ' is-active' : ''}`}
                aria-current={active ? (item.href === '/' ? 'page' : 'location') : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
