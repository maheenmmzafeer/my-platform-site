import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Finxa Commerce",
  description: "Review the draft terms and conditions for using Finxa Commerce.",
};

export default function Terms() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
          Terms of Service (Draft)
        </h1>
        <p className="text-sm text-zinc-500">Last updated: 30th March 2026</p>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 lg:hidden">
          Acceptance of Terms, Acceptable Use, Account Responsibility, Changes to Terms, Billing and Plan Changes, Service Availability.
        </p>
      </section>

      {/* Layout */}
      <div className="grid gap-10 lg:grid-cols-[1fr_3fr]">

        {/* Side Navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-3 text-sm text-zinc-600">
            <p className="font-medium text-zinc-900">Sections</p>
            <ul className="space-y-2">
              <li>1. Acceptance of Terms</li>
              <li>2. Acceptable Use</li>
              <li>3. Account Responsibility</li>
              <li>4. Changes to Terms</li>
              <li>5. Billing and Plan Changes</li>
              <li>6. Service Availability</li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <section className="space-y-6">

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              By accessing or using Finxa Commerce, you agree to these terms and to use the
              service in compliance with applicable laws.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">2. Acceptable Use</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              You agree not to misuse the platform, attempt unauthorized access, interfere with
              service reliability or use the platform for unlawful activity.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">3. Account Responsibility</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              You are responsible for protecting account credentials and activities performed
              through your organization account.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">4. Changes to Terms</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              We may revise these terms as the product evolves. Continued use of the platform
              after updates indicates acceptance of the revised terms.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">5. Billing and Plan Changes</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              Paid plans are billed according to your selected cycle. You can upgrade or change plans
              as your requirements evolve. Fees are non-refundable unless otherwise required by law.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">6. Service Availability</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              We work to maintain reliable service availability and performance. Planned maintenance,
              infrastructure events or factors beyond reasonable control may impact availability.
            </p>
          </article>

        </section>
      </div>
    </div>
  );
}