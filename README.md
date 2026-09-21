# Kazii+ Frontend

Static HTML/CSS/JS pages for Kazii+. No build step — every page is
self-contained and can be opened directly or served as static files.

## Current pages

**`kazii-full-demo.html` is the site.** Single-file app: marketing home,
auth, the creator workspace (Overview/Products/Orders/Storefront/Analytics),
the product Builder, inventory, and the public storefront all live in one
file as toggleable screens/panels. This is the only page linked from
production (`server.js` serves it at `/` and, via a catch-all, at any
creator's real storefront path).

The homepage's own nav (How it works / Suppliers / Creators / Pricing)
already covers those as internal views (`siteShowView()`) — there is no
separate marketing site.

## `archive/`

Earlier iterations kept for reference, not linked from the live pages:
- `site.html`, `auth.html`, `app.html`, `builder.html`, `inventory.html`,
  `jadewilliamson.html` — an earlier attempt at splitting the product app
  into separate pages, superseded by `kazii-full-demo.html`
- `kazii-alt-design.html` — a standalone landing page concept with a
  different color palette, not adopted
- `kazii-redesign.html`, `creators.html`, `suppliers.html`, `pricing.html` —
  a second visual direction (paper/ink color scheme, Oswald/IBM Plex
  Mono/Work Sans) that was never linked from the live site and duplicated
  ground `kazii-full-demo.html`'s own Suppliers/Creators/Pricing views
  already covered. Archived rather than reconciled into a shared nav,
  since there was nothing in them not already served by the real page.

## Backend

API calls go to the `kazii-backend` service (`API_BASE_URL` in
`kazii-full-demo.html`, currently `https://api.kaziiplus.com`) — see that
repo for endpoints.

Everything below is real and verified end-to-end against production, not
simulated, for a logged-in creator:

- **Auth** — real signup/login, JWT stored in `localStorage`
  (`kaziiToken`, `kaziiUser`, the latter including `storefrontSlug`).
- **Builder → real products** — Save/Publish create and update real
  products via `/products`, including an uploaded artwork layer as the
  product's print file.
- **Public storefront + checkout** — a creator's real slug
  (`kaziiplus.com/<slug>`) renders their real live products and runs a
  real Stripe Checkout, including shipping address collection.
- **Printful fulfillment** — a creator can connect a real Printful
  account, bind a product to a real catalog variant, and a paid order
  automatically creates a real Printful order.
- **Workspace dashboard** (Overview, Products, Orders, Analytics) — all
  real data once logged in.

**Logged-out visitors** (the homepage's "preview without account" links)
still see the original hardcoded demo data in these same screens —
that's intentional, not a bug: it's what lets prospective creators click
around before signing up.

**Not yet real:** the Suppliers tab / "Match Score" matching system —
no supplier directory or matching algorithm exists yet, backend or
otherwise. That's separate, larger scope (originally scoped as a later
phase), not a quick wiring job like everything above.
