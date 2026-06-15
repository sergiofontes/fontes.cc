---
name: lean-bem
description: Apply the Lean BEM class-naming convention when writing, refactoring, or reviewing HTML, CSS, or SCSS. Lean BEM is a readability-focused adaptation of BEM where composed words use a single hyphen (.block-name), elements attach to their block with a single underscore (.block_element), and modifiers are standalone composable classes prefixed with a hyphen (-modifier). Use this skill whenever the user is naming CSS classes, building UI components, structuring a stylesheet, converting existing class names to Lean BEM, or auditing markup and styles for BEM compliance. Trigger it even when the user does not say "Lean BEM" by name but references BEM, block/element/modifier naming, or class names shaped like block_element or -modifier. If the user explicitly asks for classic Yandex BEM or getbem-style BEM instead, follow that and do not impose Lean BEM.
---

# Lean BEM

Lean BEM is a readability-focused adaptation of [BEM](https://en.bem.info/methodology/) (Block, Element, Modifier) created by Sérgio Fontes. BEM slices an interface into independent, reusable **blocks** built from **elements**, with **modifiers** describing appearance, state, or behavior. Lean BEM keeps that model but trims the punctuation so class names read cleaner.

This skill covers the **naming convention only**. It does not impose the wider CSS architecture rules from the methodology (where to set geometry, nesting depth, and so on). Stay focused on how names are formed.

## The whole convention in one line

- **Composed words** inside any name use a single hyphen: `block-name`, `element-name`, `-modifier-name`.
- **Elements** attach to their block with a single underscore: `block_element`.
- **Modifiers** are standalone classes prefixed with a single hyphen, used alongside the block or element class: `-modifier`.

So instead of classic BEM:

```html
<!-- Yandex BEM -->
<button class="button button__primary button__primary_disabled button_big">…</button>
<!-- getbem -->
<button class="button button__primary button__primary--disabled button--big">…</button>
```

Lean BEM is:

```html
<button class="button button_primary -disabled -big">…</button>
```

## Syntax at a glance

| Entity   | Pattern         | Example class    | Role                                              |
| -------- | --------------- | ---------------- | ------------------------------------------------- |
| Block    | `block-name`    | `.card`          | Independent, reusable component                   |
| Element  | `block_element` | `.card_title`    | A part of a block, meaningless on its own         |
| Modifier | `-modifier`     | `.-featured`     | A flag on a block or element, never used alone    |

## Block

An independent component that can be reused anywhere.

- Name it for **what it is**, not what it looks like. `button`, `icon`, `card` are good. `red`, `big`, `rounded` describe appearance and belong in a modifier instead.
- Join composed words with a single hyphen: `.search-form`, `.nav-bar`.
- Prefer the shortest clear name. Reach for `card` before `product-card` before `featured-product-card`. Extra words usually signal a modifier or a separate block.

```html
<button class="button">…</button>
```
```css
.button {…}
```

## Element

A part of a block that has no meaning on its own.

- Name it for its **purpose** inside the block (`label`, `title`, `item`), not its appearance.
- The full class is `block_element`, joined by a **single** underscore: `.button_label`, `.card_title`.
- Join composed words inside the element name with a hyphen: `.card_call-to-action`.
- An element belongs to a block, never to another element. Element names therefore **never** chain into a hierarchy. `.card_body_title` is wrong even when the markup nests. Flatten it to `.card_title` (or treat the inner thing as its own block).
- Elements can nest freely in the DOM; only the *names* stay flat. Keep CSS specificity low by styling each element class directly rather than nesting selectors.

```html
<button class="button">
  <span class="button_label">Download</span>
  <span class="icon icon_download"></span>
</button>
```
```css
.button {…}
.button_label {…}
.icon_download {…} /* element of the separate `icon` block */
```

## Modifier

A flag that changes the appearance, state, or behavior of a block or element.

- Name it for appearance (`-big`, `-dark`), state (`-disabled`, `-focused`), or behavior (`-switch-theme`).
- A modifier is a **standalone class** prefixed with a single hyphen, written *next to* the block or element class. It is composable: it can be added or removed without touching the base class. It must never appear on its own, because it only adjusts an existing entity rather than replacing it.
- Join composed words after the leading hyphen with single hyphens: `-switch-theme`, `-top-aligned`.
- In CSS, target a modifier by combining it with its base class so it only applies in context: `.button.-big {…}`, `.card_title.-muted {…}`. Do not separate them with a space (`.button .-big` is a descendant selector and will miss the target).

```html
<button class="button -big">
  <span class="button_label">Download</span>
  <span class="icon icon_download -big"></span>
</button>
```
```css
.button.-big {…}
.icon.-big {…}
```

## Lean BEM vs classic BEM

The mistakes almost always come from muscle memory for classic BEM. Watch these swaps:

| Concept           | Classic / getbem            | Lean BEM                       |
| ----------------- | --------------------------- | ------------------------------ |
| Element separator | `block__element` (double)   | `block_element` (single `_`)   |
| Modifier form     | `block--mod`, `block_mod`   | standalone `-mod` class        |
| Modifier in CSS   | `.block--mod`               | `.block.-mod`                  |
| Composed words    | varies                      | single hyphen `-`              |

If you ever write `__` or `--` in a class name, you have slipped back into classic BEM. Lean BEM uses neither.

## Cheat sheet

```
.block-name              ← block (purpose-named, hyphen for composed words)
.block-name_element      ← element (single underscore, one level only)
.-modifier               ← modifier (standalone, leading hyphen, used alongside)
.block.-modifier         ← how a modifier is targeted in CSS
```

This is identical for plain CSS and SCSS. In SCSS, resist the `&__el` / `&--mod` nesting habit from classic BEM. Because Lean BEM modifiers are separate classes and element names are flat, prefer writing the full classes (`.card {…} .card_title {…} .card.-featured {…}`) over deep `&` nesting, which keeps specificity flat and selectors greppable.

---

## Workflow: writing new components

1. Identify the **block**: the independent thing (`card`, `nav-bar`). Name it for purpose.
2. Identify its **elements**: parts that only make sense inside it. Name each `block_element`, flat.
3. Identify **modifiers**: variations of state or appearance. Make each a standalone `-modifier` class.
4. In markup, list the base class first, then any element class, then modifiers: `class="card card_body -featured"`.
5. In CSS/SCSS, style each block and element class directly; target modifiers as combined selectors (`.card.-featured`).

## Workflow: converting existing CSS to Lean BEM

When given existing class names (any convention), translate by category:

- Classic element `block__element` → `block_element` (collapse the double underscore).
- Modifier suffixes `block--mod`, `block_mod`, `block__el--mod` → pull the modifier out into a standalone `-mod` class applied alongside the base. Example: `card__title--muted` becomes `card_title` plus a separate `-muted`.
- Element chains `block__a__b` → flatten to `block_b` (the deepest meaningful part), or split off a new block if the inner part is reusable.
- Appearance-named blocks (`.red-box`) → rename for purpose and move the look into a modifier (`.box.-danger` or similar).
- Update both the markup and the selectors together, and convert modifier selectors to the combined form (`.block.-mod`). Show the before and after so the user can verify the mapping.

State assumptions you make about which token is the block vs a modifier, since that judgment is semantic and the user may want to correct it.

## Workflow: auditing for compliance

Run the bundled linter to catch the mechanical violations fast, then review the semantic ones by eye.

```bash
python3 scripts/lint_lean_bem.py path/to/file.html path/to/file.css
```

The linter flags syntax-level problems it can detect reliably: double-underscore elements (`__`), double-hyphen modifiers (`--`), and element-hierarchy chains (two or more underscores in one class). It reports the file, line, offending class, and a suggested fix.

It deliberately does **not** judge naming *meaning*, so after running it, check these by hand and report them:

- Blocks or elements named for appearance/state (`red`, `big`) instead of purpose.
- Modifier classes used alone, with no block or element class beside them.
- Modifier selectors written as descendants (`.block .-mod`) instead of combined (`.block.-mod`).

Present audit results as a list of findings (location, what is wrong, the fix), not a rewrite, unless the user asks you to apply the fixes.

## Common mistakes to avoid

- Writing `block__element` (double underscore). Use a single `_`.
- Writing modifiers as suffixes (`block--big`, `block_big`). Modifiers are standalone `-big` classes.
- Chaining elements (`menu_item_link`). Elements are one level: `menu_link`, or make `item` its own block.
- Naming blocks/elements by looks (`.blue-button`). Name by purpose, push the look into a modifier.
- Targeting modifiers with a space in CSS (`.button .-big`), which selects descendants. Combine them: `.button.-big`.
- Applying a modifier class with no base class next to it.
