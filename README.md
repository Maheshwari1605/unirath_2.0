# Unirath

Unirath Infotech – outsourcing and process management company website.

## Setup

```bash
npm install
cp .env.example .env
# Edit .env and set VITE_GOOGLE_APPS_SCRIPT_URL for the contact form (see docs/GOOGLE_SHEETS_SETUP.md)
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview production build locally
```

## Deploy to GitHub Pages

1. **Create a new repo on GitHub** (e.g. `unirath`).

2. **Push this project** (from the project root):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/unirath.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

4. **Trigger deploy**
   - Every push to `main` will build and deploy.
   - Or run the workflow manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**

5. **Site URL**
   - Project site: `https://YOUR_USERNAME.github.io/unirath/`
   - If your repo is named `username.github.io`, change in `.github/workflows/deploy.yml` the `VITE_BASE` to `/` (no repo name).

**Note:** The contact form uses a proxy in dev. On GitHub Pages (static) you need either:
- The same Google Apps Script URL in the built app (form will POST to the script; CORS may block it), or
- A small backend that receives form submissions and forwards to your script, and set `VITE_CONTACT_API_URL` to that backend when building.

---

## Deploy to Render

This is a **static site** (Vite/React). Render must deploy it as a **Static Site**, not a Web Service.

**If you see “Cannot find module server.js”:** the service was created as a **Web Service** (Node server). Fix it:

1. **Option A – Use the Blueprint (recommended)**  
   The repo has a `render.yaml` that defines a **static** site. In Render Dashboard:
   - Delete the current **Web Service** (or create a new service from the repo).
   - **New** → **Blueprint** → connect the same repo. Render will create a **Static Site** from `render.yaml`.

2. **Option B – Change the existing service in the dashboard**  
   - Open your service → **Settings**.
   - **Environment**: change type from **Web Service** to **Static Site** (if your plan allows).
   - Or create a **new Static Site**: **New** → **Static Site** → connect repo.
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - Add a **Rewrite** rule: `/*` → `/index.html` (for SPA routes like `/about`, `/contact`).

After deploy, add `VITE_GOOGLE_APPS_SCRIPT_URL` in the Render **Environment** tab if you want the contact form to work (no proxy on Render; form will POST directly to Google Apps Script).
