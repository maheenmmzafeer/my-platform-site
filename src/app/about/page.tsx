import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Finxa Commerce",
  description:
    "Learn about Finxa Commerce and the mission to simplify how modern commerce teams operate.",
};

export default function About() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-sky-200 bg-sky-50/60 p-7 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About Finxa Commerce</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Finxa Commerce exists to reduce operational friction for modern businesses.
          We focus on clarity, speed, and dependable execution across daily commerce workflows.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-sky-200 bg-sky-50/70 p-6">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Mission</p>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Help teams move from fragmented tools to a single, structured operating model.
          </p>
        </article>
        <article className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-6">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Approach</p>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Keep interfaces minimal, workflows practical, and decision-making data-informed.
          </p>
        </article>
        <article className="rounded-xl border border-blue-200 bg-blue-50/70 p-6">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Promise</p>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Deliver a platform that scales with your team without adding unnecessary complexity.
          </p>
        </article>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-800 text-white p-7 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">Built for long-term growth</h2>
        <p className="mt-3 text-zinc-300 max-w-2xl">
          From early-stage teams to established operations, Finxa Commerce supports
          disciplined execution with a clear and adaptable product foundation.
        </p>
      </section>
    </div>
  );
}