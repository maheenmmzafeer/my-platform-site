import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Finxa Commerce",
  description: "Review the draft terms and conditions for using Finxa Commerce.",
};

export default function Terms() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-blue-200 bg-blue-50/60 p-7 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Terms of Service (Draft)</h1>
        <p className="mt-4 text-sm text-zinc-600">Last updated: March 2026</p>
      </section>

      <section className="space-y-4">
        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            By accessing or using Finxa Commerce, you agree to these terms and to use the
            service in compliance with applicable laws.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">2. Acceptable Use</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            You agree not to misuse the platform, attempt unauthorized access, interfere with
            service reliability or use the platform for unlawful activity.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">3. Account Responsibility</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            You are responsible for protecting account credentials and activities performed
            through your organization account.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">4. Changes to Terms</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            We may revise these terms as the product evolves. Continued use of the platform
            after updates indicates acceptance of the revised terms.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">5. Billing and Plan Changes</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Paid plans are billed according to your selected cycle. You can upgrade or change plans
            as your requirements evolve. Fees are non-refundable unless otherwise required by law.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">6. Service Availability</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            We work to maintain reliable service availability and performance. Planned maintenance,
            infrastructure events or factors beyond reasonable control may impact availability.
          </p>
        </article>
      </section>
    </div>
  );
}