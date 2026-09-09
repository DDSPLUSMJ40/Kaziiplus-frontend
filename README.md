# Kazii+ Frontend

Static HTML/CSS/JS pages for Kazii+. No build step — every page is
self-contained and can be opened directly or served as static files.

## Current pages

**Product app** — `kazii-full-demo.html`

Single-file app: auth, workspace, product builder, inventory, and the
public site all live in one file as toggleable screens/panels.

**Redesign / marketing direction** — entry point `kazii-redesign.html`
- `kazii-redesign.html` — home
- `creators.html` — creators directory
- `suppliers.html` — suppliers directory
- `pricing.html` — pricing page

These two clusters share the same visual language (paper/ink color scheme,
Oswald/IBM Plex Mono/Work Sans fonts) but don't currently cross-link —
treat them as two separate entry points until that's reconciled.

## `archive/`

Earlier iterations kept for reference, not linked from the live pages:
- `site.html`, `auth.html`, `app.html`, `builder.html`, `inventory.html`,
  `jadewilliamson.html` — an earlier attempt at splitting the product app
  into separate pages, superseded by `kazii-full-demo.html`
- `kazii-alt-design.html` — a standalone landing page concept with a
  different color palette, not adopted

## Known follow-up

The two live clusters above should eventually be reconciled into one nav
(decide which is home, link the other's pages in) — that's a design
decision, not done as part of this reorganization.

## Backend

API calls (auth, products, etc.) go to the `kazii-backend` service — see
that repo for endpoints. Signup/login forms here currently simulate success
client-side and are not yet wired to the real API.
