---
name: subagent-driven-development
description: Use when executing implementation plans with independent tasks in the current session
---

# Subagent-Driven Development

Execute plan by dispatching fresh subagent per task, with two-stage review after each: spec compliance review first, then code quality review.

**Why subagents:** You delegate tasks to specialized agents with isolated context. By precisely crafting their instructions and context, you ensure they stay focused and succeed at their task.

**Core principle:** Fresh subagent per task + two-stage review (spec then quality) = high quality, fast iteration

## When to Use

- Have an implementation plan with mostly independent tasks
- Want to stay in current session (vs. executing-plans for parallel sessions)
- Fresh subagent per task prevents context pollution

## The Process

1. **Read plan** — Extract all tasks with full text, note context, create TodoWrite
2. **Per task:**
   - Dispatch implementer subagent with full task text + context
   - If implementer asks questions → answer, re-dispatch
   - Implementer implements, tests, commits, self-reviews
   - Dispatch spec reviewer subagent → confirm code matches spec
   - Dispatch code quality reviewer subagent → approve quality
   - Fix any issues, re-review until approved
   - Mark task complete
3. **After all tasks** — Dispatch final code reviewer for entire implementation
4. **Finish** — Use superpowers:finishing-a-development-branch

## Model Selection

Use the least powerful model that can handle each role:

- **Mechanical tasks** (isolated functions, clear specs, 1-2 files): cheap/fast model
- **Integration tasks** (multi-file coordination, debugging): standard model
- **Architecture/design/review**: most capable model

## Handling Implementer Status

**DONE:** Proceed to spec compliance review.

**DONE_WITH_CONCERNS:** Read concerns before proceeding. If about correctness, address first.

**NEEDS_CONTEXT:** Provide missing context and re-dispatch.

**BLOCKED:** Assess blocker:
1. Context problem → provide more context, re-dispatch
2. Needs more reasoning → re-dispatch with more capable model
3. Task too large → break into smaller pieces
4. Plan is wrong → escalate to human

**Never** ignore an escalation or force retry without changes.

## Red Flags

**Never:**
- Start implementation on main/master without explicit user consent
- Skip reviews (spec compliance OR code quality)
- Proceed with unfixed issues
- Dispatch multiple implementation subagents in parallel (conflicts)
- Make subagent read plan file (provide full text instead)
- Skip review loops (reviewer found issues = implementer fixes = review again)
- **Start code quality review before spec compliance is approved**
- Move to next task while either review has open issues

**If subagent asks questions:**
- Answer clearly and completely
- Provide additional context if needed

**If reviewer finds issues:**
- Implementer (same subagent) fixes them
- Reviewer reviews again
- Repeat until approved

## Integration

**Required workflow skills:**
- **superpowers:using-git-worktrees** - Set up isolated workspace before starting
- **superpowers:requesting-code-review** - Code review template for reviewer subagents

**Subagents should use:**
- **superpowers:test-driven-development** - Subagents follow TDD for each task
