const NEXT_ASSET_MARKER = '/_next/';

let runtimeBasePath: string | null = null;

function getRuntimeBasePath() {
  if (runtimeBasePath !== null) {
    return runtimeBasePath;
  }

  runtimeBasePath = '';

  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return runtimeBasePath;
  }

  const script = document.querySelector<HTMLScriptElement>('script[src*="/_next/"]');
  const src = script?.getAttribute('src');

  if (!src) {
    return runtimeBasePath;
  }

  const pathname = new URL(src, window.location.href).pathname;
  const markerIndex = pathname.indexOf(NEXT_ASSET_MARKER);

  if (markerIndex > 0) {
    runtimeBasePath = pathname.slice(0, markerIndex);
  }

  return runtimeBasePath;
}

export function resolvePublicAsset(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const runtimeBase = getRuntimeBasePath();
  const configuredBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const basePath = runtimeBase || configuredBase;

  if (!basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
