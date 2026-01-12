# Repository Guidelines

## Project Structure & Module Organization
This is a VitePress documentation site. Content lives under `docs/` with key areas in `docs/manual/` (organizer handbook), `docs/roles/` (role guides), `docs/theme/` (custom theme), `docs/public/` (static assets), and `docs/config.mts` (site config + plugins). The slide deck template is in `ai-ppt/` (edit `ai-ppt/index.html` and related assets). Utility scripts live in `scripts/`.

## Build, Test, and Development Commands
- `bun install`: install dependencies (Bun is the default toolchain here).
- `bun run docs:dev` or `bun run dev`: start the local VitePress dev server.
- `bun run docs:build`: build the static site.
- `bun run docs:preview`: preview the built site locally.
- `bun run docs:clean-hr [path]`: remove standalone `---` horizontal rules from Markdown.
- `bun run format`, `bun run lint`, `bun run check`: run Biome format/lint/check.

## Coding Style & Naming Conventions
Use Markdown frontmatter with `---` for page metadata, then standard headings and lists. Prefer kebab-case file names (e.g., `organizer-handbook.md`) and keep pages in the correct section directory. Links should use site-root paths like `/manual/organizer-handbook`. Follow the existing content tone (primarily Chinese with occasional emoji in headings) and keep edits focused.

## Testing Guidelines
There is no dedicated test suite. For validation, run `bun run lint` or `bun run check`, and use `bun run docs:build` or `bun run docs:preview` to catch content and build issues. For PPT changes, open `ai-ppt/index.html` in a browser to verify layout.

## Commit & Pull Request Guidelines
Commit history favors short, simple messages (often a brief English word or Chinese summary). Keep commits concise and descriptive; include scope if helpful (e.g., `docs: 更新路演投屏说明`). PRs should explain intent, list touched pages, and include screenshots for visual/theme/PPT changes. Link relevant issues or requirements when available.

## Automation & AI Editing
AI-assisted edits are encouraged in this repo. Keep changes scoped to the pages you touch and avoid unrelated formatting churn.
