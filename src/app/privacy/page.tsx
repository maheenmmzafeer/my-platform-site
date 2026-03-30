import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Finxa Commerce",
  description:
    "Read the draft privacy policy of Finxa Commerce and how information is collected and used.",
};

export default function Privacy() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
          Privacy Policy (Draft)
        </h1>
        <p className="text-sm text-zinc-500">Last updated: March 2026</p>
      </section>

      {/* Layout */}
      <div className="grid gap-10 lg:grid-cols-[1fr_3fr]">

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-3 text-sm text-zinc-600">
            <p className="font-medium text-zinc-900">Sections</p>
            <ul className="space-y-2">
              <li>1. Information We Collect</li>
              <li>2. How Information Is Used</li>
              <li>3. Information Sharing</li>
              <li>4. Data Security</li>
              <li>5. Data Retention</li>
              <li>6. Contact</li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <section className="space-y-6">

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">1. Information We Collect</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              We may collect business contact details, account details, support communication
              and product usage signals needed to operate and improve Finxa Commerce.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">2. How Information Is Used</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              Information is used to provide services, maintain account security, support customers
              and improve product reliability and experience quality.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">3. Information Sharing</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              We do not sell personal information. Data may be shared with trusted service providers
              that help operate the platform or when disclosure is required by law.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">4. Data Security</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              We apply standard technical and organizational safeguards to protect stored information.
              No system can guarantee absolute security, but we continuously improve our controls.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">5. Data Retention</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              We retain data for as long as needed to provide services, meet legal obligations,
              resolve disputes and enforce agreements. Retention periods may vary by data type.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">6. Contact</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              Questions about this policy can be submitted through the Contact page.
              This draft policy is informational and may be updated as the product evolves.
            </p>
          </article>

        </section>
      </div>
    </div>
  );
}