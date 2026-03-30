import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - Finxa Commerce",
  description:
    "Explore Finxa Commerce pricing plans, feature limits and support options for operations teams of different sizes.",
};

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      subtitle: "For early-stage teams",
      fit: "Best for teams currently managing operations in spreadsheets.",
      points: [
        "Core operations dashboard",
        "Basic workflow automation",
        "Email support",
        "Up to 3 users",
      ],
    },
    {
      name: "Growth",
      price: "$49",
      subtitle: "For scaling operations",
      fit: "Best for teams that need stronger process control and faster response times.",
      points: [
        "Advanced automation rules",
        "SLA and queue routing",
        "Priority support",
        "Up to 15 users",
      ],
      featured: true,
    },
    {
      name: "Scale",
      price: "$129",
      subtitle: "For multi-team operations",
      fit: "Best for larger companies running multiple teams and complex workflows.",
      points: [
        "Custom onboarding plan",
        "Dedicated success manager",
        "Advanced team permissions",
        "Unlimited users",
      ],
    },
  ];

  return (
    <div className="space-y-16">

      {/* Hero (About style) */}
      <section className="section-band fade-up relative overflow-hidden rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-sky-50 to-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sky-200/40 blur-2xl" />

        <p className="text-sm uppercase tracking-wider text-slate-500">
          Pricing
        </p>

        <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Flexible plans that scale with your operations
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">
          Choose a plan based on your team size and workflow complexity.
          Every plan helps you organize daily operations in one place.
        </p>

        <p className="mt-3 text-sm text-slate-500">
          Pricing is per workspace, billed monthly. Annual billing is available with discounted rates.
        </p>
      </section>

      {/* Plans */}
      <section className="section-band rounded-3xl p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={[
                "rounded-2xl border border-slate-200 bg-white p-6",
                plan.featured
                  ? "bg-sky-50/60 border-sky-200 shadow-sm"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold tracking-tight">
                  {plan.name}
                </h2>

                {plan.featured && (
                  <span className="rounded-full border border-sky-300 bg-sky-100 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-sky-900">
                    Most Popular
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-slate-600">{plan.subtitle}</p>
              <p className="mt-2 text-sm text-slate-500">{plan.fit}</p>

              <p className="mt-6 text-4xl font-semibold tracking-tight">
                {plan.price}
              </p>
              <p className="text-sm text-slate-500">per month</p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700 marker:text-slate-500">
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={[
                  "mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  plan.featured
                    ? "bg-sky-900 text-white hover:bg-sky-800"
                    : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
                ].join(" ")}
              >
                Start with {plan.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="section-band overflow-x-auto rounded-3xl p-7 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Plan comparison
        </h2>

        <table className="mt-5 w-full min-w-[620px] border-separate border-spacing-0 text-sm">
          <thead>
            <tr>
              <th className="border-b border-slate-200 py-3 pr-4 text-left">Feature</th>
              <th className="border-b border-slate-200 py-3 px-4 text-left">Starter</th>
              <th className="border-b border-slate-200 py-3 px-4 text-left">Growth</th>
              <th className="border-b border-slate-200 py-3 pl-4 text-left">Scale</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr>
              <td className="border-b border-slate-100 py-3 pr-4">Workflow automation</td>
              <td className="border-b border-slate-100 py-3 px-4">Basic</td>
              <td className="border-b border-slate-100 py-3 px-4">Advanced</td>
              <td className="border-b border-slate-100 py-3 pl-4">Advanced</td>
            </tr>
            <tr>
              <td className="border-b border-slate-100 py-3 pr-4">SLA routing</td>
              <td className="border-b border-slate-100 py-3 px-4">-</td>
              <td className="border-b border-slate-100 py-3 px-4">Included</td>
              <td className="border-b border-slate-100 py-3 pl-4">Included</td>
            </tr>
            <tr>
              <td className="border-b border-slate-100 py-3 pr-4">Team seats</td>
              <td className="border-b border-slate-100 py-3 px-4">Up to 3</td>
              <td className="border-b border-slate-100 py-3 px-4">Up to 15</td>
              <td className="border-b border-slate-100 py-3 pl-4">Unlimited</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* CTA */}
      <section className="overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Want a custom enterprise rollout?
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          Get dedicated migration support, custom integrations, and tailored onboarding.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Talk to sales
          </Link>

          <Link
            href="/faq"
            className="inline-flex rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Read FAQs
          </Link>
        </div>
      </section>

    </div>
  );
}