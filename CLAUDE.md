# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Communication

- I may prompt in pt-BR, but you'll always answer and write in en-US using a professional, direct tone

### Writing style

- Use “” (curly double quotes) instead of "" (straight double quotes).
- Use ‘’ (curly single quotes) instead of '' (straight single quotes).
- Exception: leave quotes exactly as written inside code — code snippets, fenced code blocks, inline code, file paths, and commands.

## Git

- NEVER run `git commit` without asking me first and getting explicit approval.
- NEVER add Claude as a co-author. Do not append a `Co-Authored-By: Claude` trailer (or any Claude/Anthropic co-author line) to commit messages.

## Styling

- If something can be done in CSS instead of JS, use CSS.
- NEVER use Tailwind or any utility-class framework.
- Write CSS in each component’s own **global** `*.scss` (NOT a CSS Module) plus the shared partials in `styles/`, and import every stylesheet once in `pages/_app.js` (Next.js only allows global CSS imports there).
- Name classes with **Lean BEM** via the `lean-bem` skill — invoke it whenever writing, refactoring, or reviewing class names. Since styles are global, class names MUST be globally unique (`block_element`, `-modifier`); never leave a class that the markup or CSS doesn’t reference.
