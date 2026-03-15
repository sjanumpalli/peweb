const superpowers = [
  {
    icon: "🧠",
    title: "Deep Codebase Understanding",
    description:
      "Reads and reasons over your entire codebase with a 200K–1M token context window. Understands architecture, patterns, and dependencies before suggesting changes.",
    tag: "Core",
  },
  {
    icon: "🏗️",
    title: "Micro-Task Planning",
    description:
      "Breaks complex features into manageable 2–5 minute tasks. Each task is scoped, validated, and executed with precision — no overwhelm, no missed steps.",
    tag: "Superpowers Plugin",
  },
  {
    icon: "🧪",
    title: "Test-Driven Development",
    description:
      "Enforces TDD with hard gates — if code is written before tests, it gets deleted and restarted tests-first. Coverage jumps to 85–95% automatically.",
    tag: "Superpowers Plugin",
  },
  {
    icon: "🤖",
    title: "Subagent-Driven Development",
    description:
      "Launches specialized subagents for parallel task execution. Each undergoes two-stage review for spec compliance and code quality.",
    tag: "Superpowers Plugin",
  },
  {
    icon: "💬",
    title: "Socratic Brainstorming",
    description:
      "Reflective design sessions before any code is written. Claude asks clarifying questions, explores trade-offs, and validates assumptions.",
    tag: "Superpowers Plugin",
  },
  {
    icon: "🔍",
    title: "Automated Code Reviews",
    description:
      "Every generated change gets a detailed review identifying potential issues, security concerns, and actionable suggestions for improvement.",
    tag: "Superpowers Plugin",
  },
  {
    icon: "🔒",
    title: "Checkpoints & Hard Gates",
    description:
      "Step-by-step validation at every phase. No assumptions, no skipping ahead — each milestone is verified before progressing.",
    tag: "Superpowers Plugin",
  },
  {
    icon: "🌳",
    title: "Git Worktree Isolation",
    description:
      "Tasks are isolated into separate Git worktrees, preventing conflicts and enabling focused, parallel execution without cross-contamination.",
    tag: "Superpowers Plugin",
  },
];

const stats = [
  { value: "46%", label: "Most Loved by Devs" },
  { value: "41x", label: "Faster (chardet 7.0)" },
  { value: "96.8%", label: "Accuracy Achieved" },
  { value: "85–95%", label: "Test Coverage" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-zinc-950 to-indigo-950/30" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <div className="mb-6 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
            Claude Code + Superpowers Plugin
          </div>
          <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Superpowers
            </span>{" "}
            for Claude Codr
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Claude Code is reshaping software development — deep codebase
            understanding, agentic workflows, and structured discipline that
            turns an AI assistant into your most capable team member.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://docs.anthropic.com/en/docs/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-violet-600 px-7 font-medium text-white transition-colors hover:bg-violet-500"
            >
              Get Claude Code
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="https://github.com/jesseobrien/superpowers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-zinc-700 px-7 font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Superpowers Plugin
            </a>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-6 py-10"
            >
              <span className="text-3xl font-bold text-violet-400">
                {stat.value}
              </span>
              <span className="text-sm text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Superpowers Grid */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Full Arsenal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Core Claude Code capabilities paired with the open-source
            Superpowers plugin for structured, disciplined AI-driven
            development.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {superpowers.map((sp) => (
            <article
              key={sp.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-violet-500/40 hover:bg-zinc-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-3xl" role="img" aria-label={sp.title}>
                  {sp.icon}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    sp.tag === "Core"
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "bg-violet-500/10 text-violet-400"
                  }`}
                >
                  {sp.tag}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                {sp.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {sp.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Real-World Impact
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              These aren&apos;t theoretical gains — teams and solo developers
              are shipping dramatically faster.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
              <p className="mb-4 text-lg font-semibold text-violet-400">
                chardet 7.0.0
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Shipped March 4, 2026 — 41x faster than previous version, 96.8%
                accuracy (up 2.3 points), and closed more open issues in one
                release than the prior decade combined.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
              <p className="mb-4 text-lg font-semibold text-violet-400">
                Solo Dev, Team Output
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                One developer delivered a project scoped as &quot;4 people x 6
                months&quot; in just 2 months working alone using the
                Superpowers workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-sm text-zinc-600">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            className="text-zinc-400 hover:text-white"
          >
            Next.js
          </a>{" "}
          &middot; Exploring superpowers for Claude Codr
        </p>
      </footer>
    </div>
  );
}
