# CLAUDE.md

Guidance for Claude Code (claude.ai/code) in this repo.

@AGENTS.md

## Communication

- I may prompt in pt-BR; always answer and write in en-US, professional and direct.
- Writing style: curly quotes “” and ‘’ instead of "" and '' — except inside code (snippets, fenced/inline code, paths, commands), where quotes stay as written.

## Git

- NEVER `git commit` without asking me first and getting explicit approval.
- NEVER add a `Co-Authored-By: Claude`/Anthropic trailer.
- No descriptions on small commits.

## Styling

- Prefer CSS over JS whenever a behavior can be done in CSS.
- NEVER use Tailwind or any utility-class framework.
- Name classes with **Lean BEM** via the `lean-bem` skill (invoke it when writing/refactoring/reviewing class names). Styles are global, so class names MUST be globally unique (`block_element`, `-modifier`); never leave a class the markup or CSS doesn’t reference.

(Comments and the SCSS/component conventions live in AGENTS.md, above.)
