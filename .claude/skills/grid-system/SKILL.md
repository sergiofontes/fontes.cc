---
name: grid-system
description: Use this project's responsive grid (styles/grid.scss) when laying out or reviewing component SCSS for fontes.cc. The grid is built with a single `grid` class on the container and placed via CSS custom properties (--columns, --gap, --columns-total). Covers the three layouts (mobile/tablet/desktop+), the outer gutter columns, and the centered max-width behavior. Use whenever building a section, placing elements with grid-column/grid-row, or adjusting responsive layout.
---

# Grid System (fontes.cc)

The whole layout runs on one CSS grid defined in `styles/grid.scss`. You build
it by putting the single `grid` class on a container — everything else is
driven by CSS custom properties, so you place children with `grid-column` and
never re-declare the grid itself.

```jsx
<section className={cn(style.intro, 'grid')}>…</section>
```

`.grid` is a global utility imported once in `pages/_app.js`. Component SCSS
files start with `@import "../../styles/scaffold"` to get `@include media(...)`.

## How the columns are laid out

Every layout is **N content columns flanked by two gutter columns**. The first
and last columns are the **external margin** — content normally lives between
them. The grid always spans the full screen width.

There are three layouts, switched by breakpoint:

| Layout     | Applies at     | `--columns` (content) | Gutter `--gap` |
| ---------- | -------------- | --------------------- | -------------- |
| Mobile     | default        | 4                     | `16px`         |
| Tablet     | `>tablet`      | 10                    | `30px`         |
| Desktop+   | `>desktop`     | 13                    | `30px`         |

`--columns-total` is `--columns + 2` (the content columns plus the two outer
gutter columns). Use it for full-bleed elements.

## Gutter is based on the base rem

`--gap` derives from the base font size (`--base`): `1rem` on mobile (`16px`),
`2rem` on tablet/desktop (`30px` at the `15px` base). The outer gutter
(`--gap-out`) is a larger multiple of the same base. So spacing scales with
typography rather than being hardcoded.

## Centered max-width behavior

Up to the `max` breakpoint the grid is fluid: the content columns are `1fr`
and stretch to fill the screen. Past `>max`, a maximum width kicks in — the
**content columns lock to a fixed width (`--column-max`)** and the **two outer
gutter columns become `1fr`**, absorbing the extra space. That keeps the grid
container centered on very large screens without a wrapper element.

(Mechanically: `grid-template-columns` goes from `0 repeat(--columns, 1fr) 0`
on mobile, to `--gap-delta repeat(--columns, 1fr) --gap-delta` past
`>phonemid`, to `1fr repeat(--columns, --column-max) 1fr` past `>max`.)

## Placing children

Place elements with `grid-column`, 1-indexed across `--columns-total`. Column
`1` is the left gutter; column `--columns + 2` is the right gutter. Reach for
the custom properties instead of raw numbers:

```scss
.case  { grid-column: 1 / span var(--columns-total); } // full-bleed, edge to edge
.body  { grid-column: 2 / span var(--columns); }        // inside the margins
```

Add responsive overrides inside `@include media(">tablet")` and
`@include media(">desktop")`, since the column count changes there and
placements usually need to change with it.

See `components/work/work.module.scss` (`.case` / `.image` full-bleed) and
`components/nav/nav.module.scss` (`2 / span var(--columns)`) for real usage.

Sections that need the rotated `<h2>` side-label and the
`.column`/`.columns`/`.divisor` content helpers add the `content` class too —
that layer lives in `styles/content.scss`. Class names follow the `lean-bem`
skill (`.block_element`, standalone `-modifier`).
