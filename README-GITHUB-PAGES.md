# Krishna Portfolio — GitHub Pages (Static)

This copy of the portfolio is configured to run without Render, FastAPI, or PostgreSQL.

## What changed

- Portfolio content is bundled in `src/data/portfolioData.js`.
- FastAPI content requests were replaced with local data.
- Visitor tracking/location calls were removed from the public build.
- Contact form hands off to the visitor's email client with a `mailto:` link.
- React routing uses `HashRouter` so GitHub Pages does not need server-side route rewrites.
- Vite uses a relative base so the site works from a repository subpath.
- `dist/404.html` is generated as a fallback for GitHub Pages.
- `.env`, `node_modules`, and `dist` are not included in source control.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
```

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload this project and push the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Add a workflow that runs `npm ci`, `npm run build`, and publishes the `dist` folder.

## Important

The old Render PostgreSQL records are not part of this static copy. The portfolio data in `src/data/portfolioData.js` is based only on information available in the uploaded frontend/backend source and resume content.
