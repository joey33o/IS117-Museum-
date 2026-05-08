'use client';

import { createContext, useContext } from 'react';
import type { MotionValue } from 'framer-motion';

type ConstellationSlideContextType = {
  scrollYProgress: MotionValue<number> | null;
};

export const ConstellationSlideContext = createContext<ConstellationSlideContextType>({
  scrollYProgress: null,
});

export function useConstellationSlideContext() {
  return useContext(ConstellationSlideContext);
}
