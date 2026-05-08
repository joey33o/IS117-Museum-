type Rgb = { r: number; g: number; b: number };

const THEME_STYLE_PROPS = [
  '--scroll-progress',
  '--scroll-bg-color',
  '--scroll-text-color',
  '--scroll-surface-color',
  '--scroll-muted-text-color',
  '--scroll-border-color',
  '--scroll-accent-color',
  '--scroll-nav-blur',
] as const;

function toRgb(hex: string): Rgb {
  const normalized = hex.replace('#', '');
  const value = normalized.length === 3
    ? normalized
        .split('')
        .map((char) => char + char)
        .join('')
    : normalized;

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function mixColor(fromHex: string, toHex: string, progress: number) {
  const from = toRgb(fromHex);
  const to = toRgb(toHex);
  const ratio = Math.max(0, Math.min(1, progress));
  const r = Math.round(from.r + (to.r - from.r) * ratio);
  const g = Math.round(from.g + (to.g - from.g) * ratio);
  const b = Math.round(from.b + (to.b - from.b) * ratio);
  return `rgb(${r}, ${g}, ${b})`;
}

export function setSpaceEra(enabled: boolean) {
  if (typeof document === 'undefined') {
    return;
  }

  document.body.classList.toggle('is-space-era', enabled);
}

export function setScrollThemeProgress(progress: number) {
  if (typeof document === 'undefined') {
    return;
  }

  const rootBody = document.body;
  const clamped = Math.max(0, Math.min(1, progress));

  let textProgress = 0;
  if (clamped > 0.58) {
    textProgress = Math.min(1, (clamped - 0.58) / 0.42);
  }

  let accentProgress = 0;
  if (clamped > 0.2) {
    accentProgress = Math.min(1, (clamped - 0.2) / 0.8);
  }

  rootBody.style.setProperty('--scroll-progress', clamped.toFixed(4));
  rootBody.style.setProperty('--scroll-bg-color', mixColor('#f1e7d0', '#071326', clamped));
  rootBody.style.setProperty('--scroll-text-color', mixColor('#2b2622', '#eaf1ff', textProgress));
  rootBody.style.setProperty('--scroll-surface-color', mixColor('#f7efdc', '#10233f', clamped));
  rootBody.style.setProperty('--scroll-muted-text-color', mixColor('#5b5146', '#b9c9e8', clamped));
  rootBody.style.setProperty('--scroll-border-color', mixColor('#a88a57', '#6f8fc5', accentProgress));
  rootBody.style.setProperty('--scroll-accent-color', mixColor('#8d6f3f', '#8fb8ff', accentProgress));
  rootBody.style.setProperty('--scroll-nav-blur', `${(1 - clamped) * 4}px`);
}

export function clearScrollTheme() {
  if (typeof document === 'undefined') {
    return;
  }

  const rootBody = document.body;
  THEME_STYLE_PROPS.forEach((prop) => {
    rootBody.style.removeProperty(prop);
  });
}
