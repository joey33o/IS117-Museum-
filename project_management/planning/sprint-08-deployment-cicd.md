# Sprint 08 — Deployment & CI/CD

**Estimate:** 1 hour

> **Lifecycle:** Move this file to `project_management/active/` when you start the first task. Move it to `project_management/complete/` once every AC checkbox is checked and `npm run build` passes.

---

## Goal

Configure `astro.config.mjs` with the GitHub Pages URL and create the GitHub Actions deploy workflow so the site publishes automatically on every push to `main`.

---

## Tasks

1. Update `astro.config.mjs`: add `site` and `base` pointing to the GitHub Pages URL.
2. Create `.github/workflows/deploy.yml` using the official `withastro/action`.
3. On GitHub: Settings → Pages → set Source to **GitHub Actions**.
4. Push to `main` and confirm the Actions run passes.
5. Visit the live URL and verify GSAP triggers work on the deployed build.

---

## Files

| File | Action |
|---|---|
| `astro.config.mjs` | Edit — add `site` and `base` values |
| `.github/workflows/deploy.yml` | Create |

---

## astro.config.mjs (final)

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://<YOUR_USERNAME>.github.io',
  base: '/<YOUR_REPO_NAME>/',
  integrations: [tailwind()],
});
```

> Replace `<YOUR_USERNAME>` and `<YOUR_REPO_NAME>` with real values before committing.

---

## deploy.yml

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## Acceptance Criteria

- [ ] `npm run build` succeeds locally with `site` and `base` set.
- [ ] GitHub Actions workflow triggers on push to `main` and shows a green check.
- [ ] Site is accessible at `https://<username>.github.io/<repo>/`.
- [ ] GSAP scroll trigger fires correctly on the live URL (not just localhost).
- [ ] All assets (images, CSS, JS) load without 404s on the deployed URL.

---

## Verification Steps

1. `npm run build` locally — confirm `dist/` is generated.
2. `npm run preview` — verify site works at `localhost:4321` using the built output.
3. Push to `main` — check Actions tab for a passing run.
4. Visit the published URL — run full scroll test.
5. DevTools → Network (Preserve log) — confirm zero 404s across a full scroll.

---

## What Not To Do (Scope Creep Prevention)

- Do **not** add environment variables or secrets for a static site — none are needed.
- Do **not** set up a staging or preview environment — one deployment target is sufficient.
- Do **not** configure a custom domain — the default GitHub Pages URL meets the spec.
- Do **not** add Lighthouse CI, automated tests, or any other jobs to the workflow.
- Do **not** use `npm run build -- --verbose` in CI; the plain build command is enough.
