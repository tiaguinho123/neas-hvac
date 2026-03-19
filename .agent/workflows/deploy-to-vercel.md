---
description: Deploy a Vite/React project from GitHub to Vercel with preflight checks
---

# GitHub → Vercel Deployment Skill

Use this workflow to safely deploy a Vite/React project from GitHub to a live Vercel URL.

---

## Phase 1 — Preflight Checks (run BEFORE pushing)

// turbo
1. **TypeScript check** — fail early on type errors:
   ```powershell
   npm run lint
   ```
   Fix any errors before continuing.

// turbo
2. **Production build test** — verify Vite builds without errors:
   ```powershell
   npm run build
   ```
   If this fails, fix errors before continuing. Do NOT push broken code.

3. **Check vercel.json exists** — required for SPA routing:
   ```powershell
   Test-Path vercel.json
   ```
   If missing, create it:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

4. **Check .gitignore excludes build artifacts**:
   ```powershell
   Select-String -Path .gitignore -Pattern "dist|node_modules"
   ```
   If missing, add both to .gitignore.

5. **Check for localhost URLs or hardcoded dev ports** in source:
   ```powershell
   Select-String -Path src -Pattern "localhost" -Recurse
   ```
   Remove any before deploying to production.

---

## Phase 2 — Commit & Push

// turbo
6. Stage all changes:
   ```powershell
   git add -A
   ```

// turbo
7. Commit with a descriptive message:
   ```powershell
   git commit -m "feat: <describe what changed>"
   ```

// turbo
8. Push to GitHub (triggers Vercel auto-deploy):
   ```powershell
   git push origin main 2>&1
   ```
   Note: PowerShell shows exit code 1 for git push even on success. Confirm success by looking for `main -> main` in the output.

---

## Phase 3 — Verify Deployment

9. **Check Vercel dashboard** for deployment status:
   - Go to https://vercel.com/dashboard
   - Find project → Deployments tab
   - Wait for green **Ready** badge (usually 10–30s for Vite projects)

10. **Test all key routes** directly in browser:
    ```
    https://<project>.vercel.app/
    https://<project>.vercel.app/<any-route>
    ```
    If subroutes return 404 → `vercel.json` SPA rewrite is missing (see step 3).

11. **Check for broken images**: open browser DevTools → Network tab → filter by "Img" → look for 404s.

12. **Check for localhost links**:
    Run in browser console:
    ```js
    Array.from(document.querySelectorAll('a')).filter(a => a.href.includes('localhost')).map(a => a.href)
    ```

---

## Common Errors & Fixes

| Error | Fix |
|---|---|
| `404` on direct URL navigation | Add `vercel.json` with `rewrites` (see step 3) |
| `git push` shows exit code 1 | Normal in PowerShell — check for `main -> main` in output |
| Build fails with TypeScript errors | Run `npm run lint` first, fix all errors |
| Images 404 on Vercel but work locally | Use absolute URLs or move assets to `public/` |
| `git commit` fails — "who are you" | Run `git config --global user.name` and `user.email` first |
| Vercel build fails — wrong framework | Set Framework Preset to **Vite** manually in Vercel settings |

---

## Notes

- **Auto-deploy**: Once connected, every `git push origin main` triggers a Vercel redeploy automatically.
- **Preview deploys**: Push to any branch other than `main` to get a preview URL without affecting production.
- **Custom domains**: Set in Vercel project → Settings → Domains.
- **Environment variables**: Set in Vercel project → Settings → Environment Variables (never commit `.env` files).
