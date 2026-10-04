# Masar Store API Docs

Production-grade docs + live playground for the **E-commerce Masar** backend,
generated from the Bruno collection. JavaScript only, App Router, Mica theme.

## Sources

- Bruno export: `./Ecommerce Masar/` (also accepted at `./bruno-export/`)
- Legacy HTML: `./Ecommerce Masar-documentation.html` (also accepted at `./docs.html`)
- Generated data: `data/api.json` + `data/search-index.json` via `scripts/parse-bruno.js`

## Setup

```bash
npm install
cp .env.example .env   # fill NEXT_PUBLIC_SITE_URL + ALLOWED_BASE_URLS
npm run parse          # regenerate data/api.json from .bru files
npm run dev            # http://localhost:3000
```

## Env vars

| Var | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | metadataBase, canonical, sitemap, OG | `http://localhost:3000` |
| `ALLOWED_BASE_URLS` | comma list the `/api/proxy` may forward to | both Vercel deployments from Bruno envs |

Never commit secrets. Tokens live in `localStorage` only.

## Scripts

- `npm run parse` — Bruno → `data/api.json` (prints group summary)
- `npm run build` — parse + `next build` (fully static docs)
- `npm run analyze` — build with `@next/bundle-analyzer`

## Deploy (Vercel)

1. Push repo, import in Vercel.
2. Set env: `NEXT_PUBLIC_SITE_URL=https://<your-domain>`,
   `ALLOWED_BASE_URLS=https://e-commerce-backend-masar.vercel.app` (the only real server).
3. Build command `npm run build`, output `.next`. No extra config needed.

## Manual steps

- Confirm YouTube (`https://youtube.com/@masar1424`) + portfolio
  (`https://osama.osamaoriginal77.workers.dev/`) links.
- `cm­dk` is listed but unused by the custom palette — safe to uninstall.
- Large example bodies (products list) are truncated only by display scroll, never edited.
