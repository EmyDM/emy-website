# EMY recovered website — Cloudflare Worker deployment

This repository is a recovered Vinext + Cloudflare Vite application, **not** a static Cloudflare Pages site. The existing Pages project publishes the repository root because its build command is empty; its successful deployments do not prove the application works.

## Preserved branches

- `main`: original static placeholder; do not overwrite until preview is verified.
- `site-recovery`: preserved original recovered source.
- `launch-preparation`: deployment preparation and fixes.

## Verified

- GitHub Actions `Verify EMY build` succeeded for `launch-preparation`.
- Asset audit reports missing original image, font, and publication files; the site will not be visually complete until these are restored.
- `pnpm build` runs Vinext. The package start command expects `dist/server/wrangler.json`.
- `app/api/inquiry/route.ts` expects a Cloudflare D1 binding named `DB`.
- `vite.config.ts` currently uses a placeholder D1 database ID (`00000000-0000-4000-8000-000000000000`). This must be replaced with a real D1 binding before the contact form can work in production.

## Manual deployment plan

1. In Cloudflare create a D1 database for inquiries and apply its schema, or temporarily disable the contact form route for preview. Do not deploy with a placeholder database ID.
2. Update the Cloudflare binding configuration in `vite.config.ts` to use the real D1 database ID. Verify any other app bindings and secrets.
3. In GitHub, configure repository Actions secrets `CLOUDFLARE_API_TOKEN` (least-privilege Workers Scripts edit token) and `CLOUDFLARE_ACCOUNT_ID`. Never paste tokens in chat or commit them to the repository.
4. Review the workflow `.github/workflows/deploy-worker.yml`, then manually trigger `Deploy EMY preview Worker` from the `launch-preparation` branch.
5. Inspect the generated `dist/server/wrangler.json` and deployment logs; verify pages, RU/EN/KZ routing, CSS, navigation, and contact form.
6. Restore missing original assets and retest.
7. Only after signoff, decide whether to route `emymeta.com` to the Worker. Keep the existing Pages deployment intact until then.

**Important:** This is a preparation workflow, not proof of a successful Worker deployment. The generated Worker configuration must be checked before the first live deployment.
