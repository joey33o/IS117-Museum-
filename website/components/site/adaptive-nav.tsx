"use client";

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/eras/earthbound-observers', label: 'Earthbound Observers' },
  { href: '/eras/cosmic-instruments', label: 'Cosmic Instruments' },
  { href: '/constellations', label: 'Constellations' },
  { href: '/eras/cosmic-instruments#era2-open-questions', label: 'Future Questions' },
];

export function AdaptiveNav() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || '');
    };

    updateHash();

    const hashTargets = navItems
      .map((item) => {
        const hashIndex = item.href.indexOf('#');
        if (hashIndex === -1) {
          return null;
        }

        const expectedPath = item.href.slice(0, hashIndex) || '/';
        const expectedHash = item.href.slice(hashIndex);

        if (expectedPath !== pathname) {
          return null;
        }

        return document.getElementById(expectedHash.slice(1));
      })
      .filter((target): target is HTMLElement => Boolean(target));

    const observer = hashTargets.length
      ? new IntersectionObserver(
          (entries) => {
            const visibleEntry = entries
              .filter((entry) => entry.isIntersecting)
              .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

            if (visibleEntry?.target.id) {
              setActiveHash(`#${visibleEntry.target.id}`);
            } else if (!window.location.hash) {
              setActiveHash('');
            }
          },
          {
            root: null,
            rootMargin: '-28% 0px -58% 0px',
            threshold: [0.1, 0.35, 0.6],
          },
        )
      : null;

    hashTargets.forEach((target) => observer?.observe(target));

    window.addEventListener('hashchange', updateHash);
    return () => {
      observer?.disconnect();
      window.removeEventListener('hashchange', updateHash);
    };
  }, [pathname]);

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

    const hasActiveSectionOnPath = navItems.some((item) => {
      const itemHashIndex = item.href.indexOf('#');
      if (itemHashIndex === -1) {
        return false;
      }

      const itemPath = item.href.slice(0, itemHashIndex) || '/';
      return itemPath === pathname && item.href.slice(itemHashIndex) === activeHash;
    });

    return pathname === href && !hasActiveSectionOnPath;
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
