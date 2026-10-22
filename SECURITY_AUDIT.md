# PROKAT — Security Audit Report

**Date:** 2026-10-22  
**Auditor role:** Principal Cybersecurity Engineer (local code + dependency + live-header assessment)  
**Scope:** Repository `/Users/mircekspace/muj-projekt/PROKAT`, production site `https://www.prokat.cz`  
**Branch for remediation:** `security/hardening-2026-10-22`

---

## Executive Summary

PROKAT is a **static marketing website** built with **Astro 5.18.2** and deployed on **Vercel**. There is **no application PHP runtime**, no authentication, no database, no Supabase, and no custom API/serverless handlers in this repository.

### Overall posture

| Area | Status |
|------|--------|
| PHP2SHELL (CVE-2026-109618 / CVE-2026-109619) on the web app | **VERIFIED SECURE AGAINST TESTED ISSUE** — no PHP app/runtime in deployment |
| Local Homebrew PHP CLI on developer machine | **REQUIRES MANUAL ACTION** — CLI 8.5.9 &lt; 8.5.12 |
| Auth / session / IDOR / RLS | **NOT APPLICABLE** (static public site) |
| XSS / injection in first-party app code | **MITIGATED** — no `define:vars`, no user-controlled HTML sinks found |
| Security headers on production | **REMEDIATED AND TESTED** locally (headers added); live verification after deploy **REQUIRES MANUAL ACTION** |
| Dependency CVEs (Astro major) | **UNRESOLVED / MITIGATED by architecture** — critical Astro advisory requires Astro ≥ 7.2.8 (breaking) |
| Secrets in Git | **VERIFIED SECURE AGAINST TESTED ISSUE** — `.env*` gitignored; no tracked env files |

**This application is not “100% secure.”** Residual risk remains around dependency backlog and hosting-side controls not fully visible from the repo.

---

## Technology Inventory

| Component | Evidence |
|-----------|----------|
| Framework | Astro `5.18.2` (`package.json` / `node_modules`) |
| UI | Tailwind CSS 3.x via `@astrojs/tailwind` |
| Language | TypeScript/JavaScript (Astro components), static HTML output |
| Runtime (build) | Node.js `v25.9.0` (local), Vercel build (Node on CI) |
| Hosting | Vercel project `prokat`, aliases `www.prokat.cz` |
| Output mode | Static (`astro build` → `dist/`) |
| Auth | None |
| Database / Supabase | None |
| API routes | None (`src/pages` are `.astro` pages only) |
| Forms / uploads | None (contact via `mailto:` / `tel:`) |
| PHP in project | **None** (no `*.php`, no `composer.json`, no Dockerfile) |
| Local PHP binary | Homebrew CLI **8.5.9** at `/opt/homebrew/bin/php` — **not used by this site** |
| Python tooling | Offline `create_templates.py` (Office templates), not served |

### What was checked locally vs needs hosting access

| Check | Local | Needs hosting/dashboard |
|-------|-------|-------------------------|
| Source architecture, pages, components | Yes | — |
| npm audit | Yes | — |
| `.env*` tracking / gitignore | Yes | — |
| Live HTTP response headers | Yes (curl) | Full Vercel env / IAM review |
| PHP in deployment image | Inferred static | Confirm no Edge Middleware / custom runtime |
| Preview deployment protection | No | Vercel dashboard |
| Production log / WAF / Attack Mode | No | Vercel dashboard |

---

## Phase 2 — PHP2SHELL Assessment

Official advisories (CISA / CERT-EU / PHP project, Oct 2026) confirm:

- **CVE-2026-109618**, **CVE-2026-109619** — Critical, CVSS **9.2**, unauthenticated RCE in PHP **web** runtimes (FPM, mod_php, cgi, etc.).
- Patched releases: **8.5.12 / 8.4.27 / 8.3.36 / 8.2.35**.

### Application / production

| Finding | Detail |
|---------|--------|
| PHP in repo | Not found |
| PHP on Vercel deployment for this project | Static Astro assets only — **no PHP-FPM/mod_php** |
| Remote exploitation against www.prokat.cz via PHP2SHELL | **Not applicable** |

**Status:** `VERIFIED SECURE AGAINST TESTED ISSUE` for the PROKAT web application.

### Developer workstation

| Finding | Detail |
|---------|--------|
| `php -v` | `PHP 8.5.9` (Homebrew CLI, NTS) |
| Exposure | CLI only unless someone starts `php -S` / FPM against public interfaces |
| Action | Upgrade Homebrew PHP to **≥ 8.5.12** (`brew update && brew upgrade php`) and verify `php -v` |

**Status:** `REQUIRES MANUAL ACTION` (host machine, outside app deploy).

No public exploits were executed against any system.

---

## Vulnerability Register

### SEC-001 — Missing browser security headers (production)

- **Severity:** Medium  
- **Component:** Vercel static responses / `vercel.json`  
- **Description:** Live `https://www.prokat.cz` (pre-remediation) returned HSTS from platform but lacked CSP, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`.  
- **Evidence:** `curl -sI https://www.prokat.cz/` prior to header update.  
- **Impact:** Clickjacking risk; weaker XSS defense-in-depth; MIME sniffing.  
- **Remediation:** Site-wide security headers added in `vercel.json`. CSP allows `'unsafe-inline'` for script/style because Layout uses inline CSS/JS (`is:inline` + scroll script) — documented compatibility requirement.  
- **Verification:** Local smoke script validates `vercel.json`; live headers require deploy.  
- **Status:** `REMEDIATED AND TESTED` (config) / live `REQUIRES MANUAL ACTION` (deploy)  
- **Residual risk:** CSP not nonce/hash-based yet.

### SEC-002 — Astro dependency advisories including Critical AVIF RCE (GHSA-26w7-cxv4-gfx2)

- **Severity:** Critical (upstream) / **Medium residual for this app**  
- **Component:** `astro@5.18.2`  
- **Description:** npm audit aggregates multiple Astro issues; Critical RCE via AVIF image optimization fixed in Astro ≥ 7.2.8. Fix available only via **major** upgrade (`astro@7.4.2`, `isSemVerMajor: true`).  
- **Evidence:** `npm audit`; no `astro:assets` Image pipeline / untrusted uploads in app. Images are static files under `public/images`.  
- **Impact if exploited in vulnerable configs:** RCE at build/optimize time.  
- **Remediation performed:** Did **not** run `npm audit fix --force` (would break Tailwind 3 / Astro 5 stack without QA). Partial transitive fixes via safe `npm audit fix`.  
- **Proposed:** Scheduled upgrade path Astro 5 → 6.4.x → 7.4.x with full UI regression.  
- **Status:** `MITIGATED` by static architecture + no untrusted image optimization; `UNRESOLVED` for dependency version.  
- **Residual risk:** Supply-chain / future feature enablement of Astro Image service.

### SEC-003 — Transitive high/moderate npm vulnerabilities (build toolchain)

- **Severity:** High/Moderate (mostly tooling)  
- **Component:** vite, sharp, postcss, smol-toml, etc.  
- **Description:** Remaining issues after `npm audit fix` (11 reported) largely affect build/dev tooling, not the static runtime artifact.  
- **Remediation:** Safe `npm audit fix` applied; force upgrades deferred.  
- **Status:** `MITIGATED` / `UNRESOLVED` for full clear.  
- **Residual risk:** Compromised developer machine / malicious content during `astro build`.

### SEC-004 — Local `.env.local` with Vercel OIDC token

- **Severity:** Low (local)  
- **Component:** `.env.local`  
- **Description:** File exists locally with `VERCEL_OIDC_TOKEN` (length ~1241). Covered by `.env*` gitignore. Not tracked in Git.  
- **Impact:** Token theft if machine compromised.  
- **Remediation:** Confirmed gitignore; do not commit. Rotate token via Vercel if exposure suspected.  
- **Status:** `MITIGATED`  
- **Residual risk:** Local disk access.

### SEC-005 — Untracked business archives in working tree

- **Severity:** Low  
- **Component:** Root `*.zip`, `Dokumenty/`, certificates zip  
- **Description:** Large business documents present untracked; accidental `git add .` could publish sensitive files.  
- **Remediation:** Expanded `.gitignore` patterns.  
- **Status:** `REMEDIATED AND TESTED` (gitignore)  
- **Residual risk:** Files still on disk.

### SEC-006 — Platform `Access-Control-Allow-Origin: *` on static responses

- **Severity:** Low  
- **Component:** Vercel CDN responses  
- **Description:** Observed on HTML/asset responses. Not set in project `vercel.json`. Typical for public static assets.  
- **Status:** `NOT VERIFIED` whether dashboard override exists  
- **Residual risk:** Minimal for public marketing content (no cookies/auth).

### SEC-007 — Inline script/style requiring CSP unsafe-inline

- **Severity:** Low (design tradeoff)  
- **Component:** `src/layouts/Layout.astro`  
- **Description:** Critical CSS and scroll-reveal script are inline. Strict CSP without `'unsafe-inline'` would break UI.  
- **Remediation:** Documented in CSP; future work: extract to hashed static files.  
- **Status:** `MITIGATED`

---

## Application Security Notes (Phases 3–6)

| Threat class | Result |
|--------------|--------|
| SQLi / SSRF / RCE (app) | No DB/API/server code paths |
| XSS (first-party) | No `set:html` / `define:vars` / `innerHTML` sinks with user input |
| CSRF | No state-changing endpoints |
| AuthZ / IDOR / BOLA | N/A |
| File upload | N/A |
| Open redirect | Links use static/internal paths from data modules |
| Sessions / cookies | None set by app |

---

## Remediation Log

| Change | Reason |
|--------|--------|
| `vercel.json` — global security headers | SEC-001 |
| `.gitignore` — env, zips, docs, PRG, `.cursor` | SEC-004 / SEC-005 |
| `public/.well-known/security.txt` | Responsible disclosure contact |
| `scripts/security-smoke.mjs` | Regression checks |
| `npm audit fix` (no `--force`) | Reduce transitive vulns |
| `SECURITY_AUDIT.md` | This report |

### Tests performed (2026-10-22)

```text
node scripts/security-smoke.mjs
→ All smoke checks passed (PHP absence, gitignore, vercel headers)

npm run build
→ 11 page(s) built in ~2.2s — PASS

npm audit --omit=dev
→ 3 vulnerabilities remain (1 low, 1 high, 1 critical) — all require
  `npm audit fix --force` → astro@7.4.2 (breaking). Not applied.
```

---

## Deployment Checklist

1. Review diff on `security/hardening-2026-10-22`.  
2. Merge to `main` after approval.  
3. Deploy with `vercel --prod` **only with explicit authorization**.  
4. Verify live headers:
   ```bash
   curl -sI https://www.prokat.cz/ | rg -i 'content-security-policy|x-frame-options|x-content-type-options|referrer-policy|strict-transport'
   node scripts/security-smoke.mjs https://www.prokat.cz
   ```
5. Smoke-test homepage, `/kontakt`, `/sluzby/*`, video autoplay, mobile nav.  
6. **Rollback:** Redeploy previous Vercel deployment or `git revert` header commit.

---

## Outstanding Actions

1. **Authorize production deploy** of security headers.  
2. **Plan Astro major upgrade** (5 → 7.4.x) with UI QA — closes Critical GHSA-26w7-cxv4-gfx2 formally.  
3. **Upgrade local Homebrew PHP** to ≥ 8.5.12 (developer machine hygiene).  
4. Review Vercel dashboard: preview protection, team access, Attack Mode / WAF, env vars.  
5. Optional: remove `'unsafe-inline'` by externalizing Layout inline CSS/JS.  
6. Optional: Dependabot / OSV scheduled scans (tools not installed in this environment).

---

## Final Security Status

| Item | Status |
|------|--------|
| PHP2SHELL on PROKAT production app | **VERIFIED SECURE AGAINST TESTED ISSUE** |
| Auth/API/DB attack surface | **VERIFIED SECURE AGAINST TESTED ISSUE** (absent) |
| Security headers configuration | **REMEDIATED AND TESTED** (pending prod deploy) |
| Astro Critical CVE fully patched in lockfile | **UNRESOLVED** (mitigated by usage) |
| Secrets committed to Git | **VERIFIED SECURE AGAINST TESTED ISSUE** (within tested history/patterns) |
| Local PHP CLI patch level | **REQUIRES MANUAL ACTION** |
| Production deploy of this hardening | **REQUIRES MANUAL ACTION** |

**Ready for controlled production deployment of header/gitignore/security.txt changes:** YES, after explicit approval.  
**Ready to claim full dependency CVE closure:** NO — requires Astro major upgrade + QA.
