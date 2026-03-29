import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Finxa Commerce",
  description:
    "Read the draft privacy policy of Finxa Commerce and how information is collected and used.",
};

export default function Privacy() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-7 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy (Draft)</h1>
        <p className="mt-4 text-sm text-zinc-600">Last updated: March 2026</p>
      </section>

      <section className="space-y-4">
        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">1. Information We Collect</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            We may collect business contact details, account details, support communication
            and product usage signals needed to operate and improve Finxa Commerce.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">2. How Information Is Used</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Information is used to provide services, maintain account security, support customers
            and improve product reliability and experience quality.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">3. Information Sharing</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            We do not sell personal information. Data may be shared with trusted service providers
            that help operate the platform or when disclosure is required by law.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">4. Data Security</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            We apply standard technical and organizational safeguards to protect stored information.
            No system can guarantee absolute security, but we continuously improve our controls.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">5. Data Retention</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            We retain data for as long as needed to provide services, meet legal obligations,
            resolve disputes and enforce agreements. Retention periods may vary by data type.
          </p>
        </article>

        <article className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">6. Contact</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Questions about this policy can be submitted through the Contact page.
            This draft policy is informational and may be updated as the product evolves.
          </p>
        </article>
      </section>
    </div>
  );
}