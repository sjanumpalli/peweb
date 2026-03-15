# PEWeb - Project Instructions

## Superpowers

This project uses the **Superpowers** framework for structured, disciplined AI-driven development.

**You have superpowers.** Before responding to ANY task, check if a skill applies:

1. **Building something new?** → Use `superpowers:brainstorming` first
2. **Implementing code?** → Use `superpowers:test-driven-development` (TDD is mandatory)
3. **Debugging a bug?** → Use `superpowers:systematic-debugging` (find root cause first)
4. **Executing a plan?** → Use `superpowers:subagent-driven-development`
5. **Completing work?** → Use `superpowers:requesting-code-review`
6. **Need isolation?** → Use `superpowers:using-git-worktrees`

Read the full skill protocol: invoke the `superpowers:using-superpowers` skill at session start.

### Key Rules

- **Never write code before brainstorming and getting design approval**
- **Never write production code without a failing test first** (TDD Iron Law)
- **Never propose fixes without root cause investigation** (Debugging Iron Law)
- **Always request code review** after completing tasks

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Package Manager:** pnpm
- **Testing:** (to be configured per feature)

## Project Structure

```
src/app/          — App Router pages and layouts
public/           — Static assets
.claude/skills/   — Superpowers skill definitions
docs/superpowers/ — Design specs and plans (created during brainstorming)
```
