import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Finxa Commerce",
  description:
    "Learn about Finxa Commerce and the mission to help commerce operations teams execute reliably at scale.",
};

export default function About() {
  return (
    <div className="space-y-20">

      {/* Split Hero */}
      <section className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="section-band fade-up overflow-hidden rounded-3xl p-7 sm:p-10 lg:hidden">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            About Finxa
          </p>
          <h1 className="heading-display mt-5 text-4xl font-semibold leading-tight tracking-tight">
            Built to remove the chaos from daily operations
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
            Finxa Commerce exists to reduce operational friction for modern businesses.
            We focus on clarity, speed and dependable execution across daily commerce workflows,
            from intake and fulfillment coordination to support handoffs.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-slate-500">
            Put simply: Finxa Commerce helps businesses run operations with fewer manual follow-ups
            and clearer team accountability.
          </p>
          <div className="section-divider mt-6 pt-4">
            <p className="text-sm text-slate-600">What we focus on</p>
            <p className="mt-3 text-xl font-medium text-slate-900 leading-relaxed">
              Clear workflows, faster execution and reliable operations at scale.
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            About Finxa
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight leading-tight sm:text-5xl">
            Built to remove the chaos from daily operations
          </h1>
          <p className="mt-6 text-slate-600 max-w-lg">
            Finxa Commerce exists to reduce operational friction for modern businesses.
            We focus on clarity, speed and dependable execution across daily commerce workflows,
            from intake and fulfillment coordination to support handoffs.
          </p>
          <p className="mt-4 text-sm text-slate-500 max-w-lg">
            Put simply: Finxa Commerce helps businesses run operations with fewer manual follow-ups
            and clearer team accountability.
          </p>
        </div>

        {/* Visual Card */}
        <div className="hidden rounded-3xl bg-gradient-to-br from-sky-100 to-blue-50 p-8 border border-sky-200 lg:block">
          <p className="text-sm text-slate-500">What we focus on</p>
          <p className="mt-3 text-xl font-medium text-slate-900 leading-relaxed">
            Clear workflows, faster execution and reliable operations at scale.
          </p>
        </div>
      </section>

      {/* Big Statement Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Operations should feel structured, not stressful
        </h2>
        <p className="mt-4 text-slate-600">
          Finxa Commerce replaces scattered tools and unclear responsibilities
          with a single system designed for predictable execution.
        </p>
      </section>

      {/* Timeline Style (Mission / Approach / Promise) */}
      <section className="space-y-10 max-w-3xl mx-auto">
        
        <div className="flex gap-6">
          <div className="w-2 bg-sky-400 rounded-full"></div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Mission</p>
            <p className="mt-2 text-slate-700">
              Help teams move from fragmented tools to a single, structured operating model.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-2 bg-cyan-400 rounded-full"></div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Approach</p>
            <p className="mt-2 text-slate-700">
              Keep interfaces minimal, workflows practical and decision-making data-informed.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-2 bg-blue-400 rounded-full"></div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Promise</p>
            <p className="mt-2 text-slate-700">
              Deliver a platform that scales with your team without adding unnecessary complexity.
            </p>
          </div>
        </div>

      </section>

      {/* Alternating Feature Blocks */}
      <section className="space-y-12">
        
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-2xl bg-slate-900 text-white p-8">
            Operational clarity across teams
          </div>
          <p className="text-slate-600">
            Finxa Commerce ensures every team member understands their role,
            responsibilities and current priorities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <p className="order-2 text-slate-600 lg:order-1">
            Customers receive consistent and reliable communication,
            regardless of who is handling the request.
          </p>
          <div className="order-1 rounded-2xl bg-sky-100 p-8 lg:order-2">
            Consistent customer response quality
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-2xl bg-blue-100 p-8">
            Scalable workflows without extra overhead
          </div>
          <p className="text-slate-600">
            As your team grows, your processes remain efficient without adding unnecessary complexity.
          </p>
        </div>

      </section>

    </div>
  );
}