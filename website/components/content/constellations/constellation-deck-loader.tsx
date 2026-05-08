'use client';

import dynamic from 'next/dynamic';

const ClientConstellationDeck = dynamic(
  () => import('./constellation-deck').then((mod) => mod.ConstellationDeck),
  {
    ssr: false,
    loading: () => <div className="constellation-deck-placeholder full-bleed" aria-hidden="true" />,
  }
);

export function ConstellationDeckLoader() {
  return <ClientConstellationDeck />;
}
