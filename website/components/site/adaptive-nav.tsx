"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/era-1', label: 'Earthbound Observers' },
  { href: '/era-2', label: 'Cosmic Instruments' },
  { href: '/important-figures', label: 'Important Figures' },
];

export function AdaptiveNav() {
  const pathname = usePathname();

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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`adaptive-nav-link${pathname === item.href ? ' is-active' : ''}`}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
