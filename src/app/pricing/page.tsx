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
      points: [
        "Core operations dashboard",
        "Basic workflow automation",
        "Email support",
        "Up to 3 users",
      ],
      tone: "border-sky-200 bg-sky-50/70",
    },
    {
      name: "Growth",
      price: "$49",
      subtitle: "For scaling operations",
      points: [
        "Advanced automation rules",
        "SLA and queue routing",
        "Priority support",
        "Up to 15 users",
      ],
      featured: true,
      tone: "border-cyan-300 bg-cyan-50/70",
    },
    {
      name: "Scale",
      price: "$129",
      subtitle: "For multi-team operations",
      points: [
        "Custom onboarding plan",
        "Dedicated success manager",
        "Advanced team permissions",
        "Unlimited users",
      ],
      tone: "border-blue-200 bg-blue-50/70",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Pricing built for momentum</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Choose a plan based on your team size and operational complexity. All
          plans include core platform capabilities and secure infrastructure.
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          Pricing shown is monthly per workspace. Annual plans are available with discounted rates.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={[
              "rounded-xl border p-6",
              plan.featured
                ? "border-cyan-600 shadow-[0_0_0_1px_#0891b2]"
                : plan.tone,
            ].join(" ")}
          >
            <h2 className="text-xl font-semibold tracking-tight">{plan.name}</h2>
            <p className="mt-1 text-sm text-zinc-600">{plan.subtitle}</p>
            <p className="mt-5 text-4xl font-semibold tracking-tight">{plan.price}</p>
            <p className="text-sm text-zinc-500">per month</p>

            <ul className="mt-5 space-y-2 text-sm text-zinc-700">
              {plan.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Get Started
            </Link>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-10 overflow-x-auto">
        <h2 className="text-2xl font-semibold tracking-tight">Plan comparison</h2>
        <table className="mt-5 w-full min-w-[620px] border-separate border-spacing-0 text-sm">
          <thead>
            <tr>
              <th className="text-left py-3 pr-4 border-b border-zinc-200">Feature</th>
              <th className="text-left py-3 px-4 border-b border-zinc-200">Starter</th>
              <th className="text-left py-3 px-4 border-b border-zinc-200">Growth</th>
              <th className="text-left py-3 pl-4 border-b border-zinc-200">Scale</th>
            </tr>
          </thead>
          <tbody className="text-zinc-700">
            <tr>
              <td className="py-3 pr-4 border-b border-zinc-100">Workflow automation</td>
              <td className="py-3 px-4 border-b border-zinc-100">Basic</td>
              <td className="py-3 px-4 border-b border-zinc-100">Advanced</td>
              <td className="py-3 pl-4 border-b border-zinc-100">Advanced</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 border-b border-zinc-100">SLA routing</td>
              <td className="py-3 px-4 border-b border-zinc-100">-</td>
              <td className="py-3 px-4 border-b border-zinc-100">Included</td>
              <td className="py-3 pl-4 border-b border-zinc-100">Included</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 border-b border-zinc-100">Team seats</td>
              <td className="py-3 px-4 border-b border-zinc-100">Up to 3</td>
              <td className="py-3 px-4 border-b border-zinc-100">Up to 15</td>
              <td className="py-3 pl-4 border-b border-zinc-100">Unlimited</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 border-b border-zinc-100">Support level</td>
              <td className="py-3 px-4 border-b border-zinc-100">Standard</td>
              <td className="py-3 px-4 border-b border-zinc-100">Priority</td>
              <td className="py-3 pl-4 border-b border-zinc-100">Dedicated</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Implementation support</td>
              <td className="py-3 px-4">Self-guided</td>
              <td className="py-3 px-4">Guided onboarding</td>
              <td className="py-3 pl-4">Custom rollout plan</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}