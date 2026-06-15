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

- NEVER use Tailwind (or any utility-class framework). Write CSS in each component's own `*.module.scss`, plus the shared partials in `styles/`.
- Name all classes with the **Lean BEM** convention via the `lean-bem` skill. Invoke that skill whenever writing, refactoring, or reviewing class names.
