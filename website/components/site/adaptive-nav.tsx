"use client";

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  href: string;
  label: string;
  sectionId?: string;
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/eras/earthbound-observers', label: 'Earthbound Observers', sectionId: 'earthbound-observers' },
  { href: '/eras/cosmic-instruments', label: 'Cosmic Instruments', sectionId: 'cosmic-instruments' },
  { href: '/constellations', label: 'Constellations' },
] satisfies NavItem[];

const normalizePath = (path: string) => {
  if (path === '/') {
    return path;
  }

  return path.replace(/\/+$/, '');
};

const getItemPath = (href: string) => normalizePath(href.split('#')[0] || '/');

export function AdaptiveNav() {
  const pathname = normalizePath(usePathname());
  const [activeHash, setActiveHash] = useState('');
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || '');
    };

    updateHash();

    const sectionTargets = navItems
      .filter((item) => getItemPath(item.href) === pathname && item.sectionId)
      .map((item) => {
        const element = document.getElementById(item.sectionId as string);
        return element ? { id: item.sectionId as string, element } : null;
      })
      .filter((target): target is { id: string; element: HTMLElement } => Boolean(target));

    let animationFrame = 0;

    const updateActiveSection = () => {
      if (!sectionTargets.length) {
        setActiveSectionId(null);
        return;
      }

      const viewportMarker = window.innerHeight * 0.38;
      const currentTarget =
        sectionTargets
          .map((target) => ({
            ...target,
            top: target.element.getBoundingClientRect().top,
          }))
          .filter((target) => target.top <= viewportMarker)
          .sort((left, right) => right.top - left.top)[0] ?? sectionTargets[0];

      setActiveSectionId(currentTarget.id);
    };

    const requestActiveSectionUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener('hashchange', updateHash);
    window.addEventListener('scroll', requestActiveSectionUpdate, { passive: true });
    window.addEventListener('resize', requestActiveSectionUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('scroll', requestActiveSectionUpdate);
      window.removeEventListener('resize', requestActiveSectionUpdate);
    };
  }, [pathname]);

  const isItemActive = (item: NavItem) => {
    if (activeSectionId && item.sectionId) {
      return item.sectionId === activeSectionId;
    }

    if (item.href === '/') {
      return pathname === '/' && activeHash === '';
    }

    const hashIndex = item.href.indexOf('#');
    if (hashIndex !== -1) {
      const expectedPath = item.href.slice(0, hashIndex) || '/';
      const expectedHash = item.href.slice(hashIndex);
      return pathname === normalizePath(expectedPath) && activeHash === expectedHash;
    }

    return pathname === getItemPath(item.href);
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
            const active = isItemActive(item);
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
