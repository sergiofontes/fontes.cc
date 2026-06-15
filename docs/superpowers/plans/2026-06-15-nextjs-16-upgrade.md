# Next.js 12→16 + React 17→19 Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade fontes.cc from Next.js 12.1.0 / React 17 to the latest Next.js 16 / React 19 in one pass, keeping the Pages Router and the existing architecture.

**Architecture:** A single-page Next.js Pages Router app (plain JS, CSS Modules + SCSS). No routing or structural changes. The work is dependency bumps plus three small breaking-change fixes (`next/image` `fill` API, Swiper v9+ module import path, Turbopack-based SVGR config) and a docs refresh.

**Tech Stack:** Next.js 16, React 19, Swiper 12, react-scroll, @svgr/webpack 8, Sass/SCSS, Turbopack.

**Note on testing:** This repo has no test suite and no JS linter (see `AGENTS.md`). Verification for every task is `npm run build` (must compile) plus, for the final task, `npm run dev` with targeted manual checks. There is no unit-test step to write.

**Reference:** Design spec at `docs/superpowers/specs/2026-06-15-nextjs-16-upgrade-design.md`.

---

### Task 1: Bump dependencies and install

**Files:**
- Modify: `package.json` (dependency versions, written by npm)
- Modify: `package-lock.json` (written by npm)

- [ ] **Step 1: Install the new runtime and library versions**

Run:
```bash
npm install next@latest react@latest react-dom@latest swiper@latest react-scroll@latest typewriter-effect@latest
npm install -D @svgr/webpack@latest
```

Expected: install completes. `next` resolves to `16.x`, `react`/`react-dom` to `19.x`, `swiper` to `12.x`. There may be peer-dependency *warnings*, but there must be no `ERESOLVE` *error* that aborts the install. If `ERESOLVE` aborts, stop and report — do not paper over it with `--force`/`--legacy-peer-deps`.

- [ ] **Step 2: Confirm `next` is pinned, not floating**

Run: `node -e "const p=require('./package.json'); console.log(p.dependencies.next)"`
Expected: a version range like `^16.2.9` — NOT the string `latest`. If it still says `latest`, edit `package.json` to the caret range npm installed (check `npm ls next`), then run `npm install` again.

- [ ] **Step 3: Verify the resolved versions**

Run: `npm ls next react react-dom swiper react-scroll typewriter-effect @svgr/webpack`
Expected: `next@16.x`, `react@19.x`, `react-dom@19.x`, `swiper@12.x`, `react-scroll@1.9.x`, `typewriter-effect@2.22.x`, `@svgr/webpack@8.x`, with no `UNMET PEER DEPENDENCY` lines.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "Bump to Next.js 16, React 19, and latest deps"
```

Note: the build will not pass yet — Tasks 2–4 fix the breaking changes. That is expected; do not run `npm run build` here.

---

### Task 2: Configure SVGR through Turbopack in `next.config.js`

Next 16 makes Turbopack the default for `next dev` and `next build`. Turbopack ignores the `webpack()` hook, so the current SVGR setup would break every `import X from '*.svg'`. Add a Turbopack loader rule and keep the `webpack()` hook as a fallback.

**Files:**
- Modify: `next.config.js`

- [ ] **Step 1: Replace `next.config.js` with the Turbopack-aware config**

Full new file contents:
```js
module.exports = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add next.config.js
git commit -m "Wire SVGR through Turbopack for Next 16"
```

---

### Task 3: Update Swiper module imports

Swiper v9+ moved feature modules from the `swiper` entrypoint to `swiper/modules`. The `swiper/react` import and the `swiper/scss/*` CSS imports in `_app.js` are unchanged.

**Files:**
- Modify: `components/work/petplate.js:6`
- Modify: `components/work/tropical.js:6`

- [ ] **Step 1: Fix the import in `petplate.js`**

In `components/work/petplate.js`, change line 6 from:
```js
import { EffectCards, Pagination, Keyboard } from 'swiper';
```
to:
```js
import { EffectCards, Pagination, Keyboard } from 'swiper/modules';
```

- [ ] **Step 2: Fix the import in `tropical.js`**

In `components/work/tropical.js`, change line 6 from:
```js
import { EffectCards, Pagination, Keyboard } from 'swiper';
```
to:
```js
import { EffectCards, Pagination, Keyboard } from 'swiper/modules';
```

- [ ] **Step 3: Commit**

```bash
git add components/work/petplate.js components/work/tropical.js
git commit -m "Update Swiper module imports for v12"
```

---

### Task 4: Migrate `next/image` to the `fill` API

Next 13 redesigned `next/image`. Both work components use the legacy `layout="fill"`. Replace it with the `fill` boolean prop and add a `sizes` value to silence the perf warning. `placeholder="blur"` stays — blur data is auto-generated from the static PNG import. No CSS change is required: `.display` already sets `object-fit: cover !important`, the `.image` parent is `position: relative`, and the `.swiper` slide handles rounding/clipping.

**Files:**
- Modify: `components/work/petplate.js` (4 `<Image>` tags)
- Modify: `components/work/tropical.js` (3 `<Image>` tags)

- [ ] **Step 1: Update all 4 images in `petplate.js`**

For each of the four `<Image>` elements, replace the `layout="fill"` line with two lines (`fill` and `sizes`). For example, the first image becomes:
```jsx
<Image
  src={PetPlate1}
  className={style.display}
  fill
  sizes="(min-width: 768px) 60vw, 100vw"
  placeholder="blur"
  alt="Product display page of the 4-pack treats"
/>
```
Apply the identical `layout="fill"` → `fill` + `sizes="(min-width: 768px) 60vw, 100vw"` change to the other three `<Image>` tags (PetPlate2, PetPlate3, PetPlate4), leaving each `src`, `className`, `placeholder`, and `alt` untouched.

- [ ] **Step 2: Update all 3 images in `tropical.js`**

Apply the same change to each of the three `<Image>` tags. For example, the first becomes:
```jsx
<Image
  src={Tropical1}
  className={style.display}
  fill
  sizes="(min-width: 768px) 60vw, 100vw"
  placeholder="blur"
  alt="Tropical Ruby's home screen"
/>
```
Repeat for Tropical2 and Tropical3, leaving their `src`/`className`/`placeholder`/`alt` untouched.

- [ ] **Step 3: Verify no `layout="fill"` remains**

Run: `grep -rn 'layout="fill"' components`
Expected: no output (exit code 1).

- [ ] **Step 4: Commit**

```bash
git add components/work/petplate.js components/work/tropical.js
git commit -m "Migrate next/image to the fill API"
```

---

### Task 5: Update `AGENTS.md` to reflect the upgrade

**Files:**
- Modify: `AGENTS.md:7` (Node requirement)
- Modify: `AGENTS.md:38` (SVG/Turbopack note)

- [ ] **Step 1: Update the Node requirement**

In `AGENTS.md`, change line 7 from:
```
- `npm install` — install dependencies (requires Node.js >= 12.22.0)
```
to:
```
- `npm install` — install dependencies (requires Node.js >= 20.9.0)
```

- [ ] **Step 2: Update the SVG note**

In `AGENTS.md`, in the "SVGs and i18n" section, change:
```
SVGs are imported directly as React components via `@svgr/webpack` (configured in `next.config.js`). `next.config.js` also sets `i18n` to a single `en` locale (no actual translations exist).
```
to:
```
SVGs are imported directly as React components via `@svgr/webpack`. Under Next 16 (Turbopack by default) the loader is wired through `turbopack.rules` in `next.config.js`, with the legacy `webpack()` hook kept as a fallback. `next.config.js` also sets `i18n` to a single `en` locale (no actual translations exist).
```

- [ ] **Step 3: Commit**

```bash
git add AGENTS.md
git commit -m "Document Next 16 Node and Turbopack requirements"
```

---

### Task 6: Build and manual verification

**Files:** none (verification only)

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: build completes successfully with no errors. Warnings are acceptable. If the build fails on SVG imports, revisit Task 2; if it fails on Swiper, revisit Task 3; if it fails on `next/image`, revisit Task 4.

- [ ] **Step 2: Start the dev server**

Run: `npm run dev`
Expected: server starts at `http://localhost:3000` with no compile errors in the terminal.

- [ ] **Step 3: Manual checks in the browser**

Open `http://localhost:3000` and confirm:
- All SVGs render: nav symbol, nav arrow, the PetPlate/TropicalRuby logos, and any icons.
- Both Swiper galleries work: the cards effect swipes, pagination dynamic bullets show, and keyboard arrows move slides when a gallery is focused.
- The PetPlate and Tropical images fill their rounded frames with no clipping/overflow artifacts (the `fill` migration).
- Layout holds at a narrow (mobile) and wide (desktop) viewport width; no stray horizontal scrollbar.
- Focus rings are visible when tabbing through the nav links.

- [ ] **Step 4: Lint SCSS (sanity, unchanged stack)**

Run: `npx stylelint "**/*.scss"`
Expected: passes (or only pre-existing warnings). No new errors introduced by this work.

- [ ] **Step 5: Final confirmation**

Run: `git status`
Expected: clean working tree — all changes committed across Tasks 1–5. The upgrade is complete.

---

## Notes for the implementer

- **Optional cleanup (not required):** `components/work/work.module.scss:159` has a `.image > span { ... }` rule that targeted the wrapper the legacy `layout="fill"` used to emit. The new `fill` API renders the `<img>` directly, so this rule is now inert. Leave it unless you are also doing a styling pass; removing it is cosmetic and out of scope for this upgrade.
- **No `next/link` work:** the `<Link>` in `components/nav/nav.js` is from `react-scroll`, not `next/link`. Do not touch it.
- **Do not migrate to the App Router.** Pages Router is retained by design.
- **Dev tooling left frozen:** the spec marked bumping `sass` and the stylelint stack as optional. This plan intentionally leaves them at their current versions to avoid lint-config churn unrelated to the runtime upgrade. The SCSS lint check in Task 6 is a sanity pass on the unchanged stack.
