# weekend-pongistes-2026

Small static site for a weekend trip with friends. Next.js (App Router) + Tailwind, deployed free on Vercel.

## Live site

https://weekend-pongistes-2026-arnaudbrus-projects.vercel.app

## Editing — three ways, one repo

All three write to this same GitHub repo; every push to `main` auto-deploys to Vercel.

- **v0.dev** — prompt-based edits in the browser (or from a phone). Push from v0 → lands here.
- **Claude Code / local** — clone, edit, push. For larger or structural changes.
- **GitHub directly** — quick text tweaks in the web editor.

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
```

Requires Node 20+ and pnpm.

## Deployment

Vercel is connected to this repo and redeploys `main` on every push.

`vercel.json` pins the build command to `next build`. This overrides v0's default
`node .v0/inject-built-with-v0.mjs && next build`, whose script (a "Built with v0"
badge injector) lives only in v0's sandbox and isn't committed — so it broke the
Vercel build. Keep this override unless that script is ever added to the repo.
