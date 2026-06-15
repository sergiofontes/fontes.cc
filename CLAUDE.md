# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Communication

- I may prompt in pt-BR, but you'll always answer and write in en-US using a professional, direct tone

## Styling

- NEVER use Tailwind (or any utility-class framework). Write CSS in each component's own `*.module.scss`, plus the shared partials in `styles/`.
- Name all classes with the **Lean BEM** convention via the `lean-bem` skill. Invoke that skill whenever writing, refactoring, or reviewing class names.
