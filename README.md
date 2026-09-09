# Kazii+ Frontend

Static HTML/CSS/JS pages for Kazii+. No build step — every page is
self-contained and can be opened directly or served as static files.

## Current pages

There are two page clusters here. They share the same visual language
(paper/ink color scheme, Oswald/IBM Plex Mono/Work Sans fonts) but their nav
bars don't currently cross-link — treat them as two entry points into the
site rather than one unified nav until that's reconciled.

**Product app** (entry point: `site.html`)
- `site.html` — marketing home page
- `auth.html` — sign in / sign up
- `app.html` — logged-in workspace
- `builder.html` — product builder
- `inventory.html` — inventory view
- `jadewilliamson.html` — example creator storefront page

**Redesign / marketing direction** (entry point: `kazii-redesign.html`)
- `kazii-redesign.html` — home
- `creators.html` — creators directory
- `suppliers.html` — suppliers directory
- `pricing.html` — pricing page

## `archive/`

Earlier iterations kept for reference, not linked from the live pages:
- `kazii-full-demo.html` — the original single-file prototype (all screens
  as toggleable panels in one file) that the "Product app" pages above were
  later split out of
- `kazii-alt-design.html` — a standalone landing page concept with a
  different color palette, not adopted

## Known follow-up

The two page clusters above should eventually be reconciled into one nav
(decide which is home, link the other's pages in) — that's a design
decision, not done as part of this reorganization.

## Backend

API calls (auth, products, etc.) go to the `kazii-backend` service — see
that repo for endpoints. Signup/login forms here currently simulate success
client-side and are not yet wired to the real API.
