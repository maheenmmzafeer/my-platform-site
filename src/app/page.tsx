import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finxa Commerce - Home",
  description:
    "Finxa Commerce helps operations teams run orders, inventory and customer workflows from one clear operating layer.",
  openGraph: {
    title: "Finxa Commerce - Home",
    description:
      "Finxa Commerce helps operations teams run orders, inventory and customer workflows from one clear operating layer.",
    type: "website",
    url: "https://my-platform-site.vercel.app/",
    siteName: "Finxa Commerce",
    images: [
      {
        url: "https://my-platform-site.vercel.app/Finxa.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  const features = [
    {
      title: "Unified Dashboard",
      text: "See all active orders, pending issues and team tasks in one place instead of separate spreadsheets.",
      metric: "One source of truth",
    },
    {
      title: "Automated Workflows",
      text: "Automatically assign tasks, route urgent cases and trigger updates so nothing gets missed.",
      metric: "Fewer manual handoffs",
    },
    {
      title: "Reliable Foundations",
      text: "Grow with clear permissions, activity history and structured processes as your team gets bigger.",
      metric: "Built to scale",
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-14">
      <section className="section-band fade-up overflow-hidden rounded-3xl p-7 sm:p-10">
        <p className="text-sm uppercase tracking-wider text-slate-500">
          Finxa Commerce Platform
        </p>
        <h1 className="heading-display mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Run modern commerce operations without the spreadsheet chaos.
        </h1>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              Finxa Commerce helps companies run day-to-day operations from one system.
              Instead of managing work in scattered sheets and chats, teams can track orders,
              assign tasks and keep customers updated from a shared workflow.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-slate-500">
              In simple terms: it is an operations management SaaS for teams handling order flow,
              issue resolution and customer communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white/80 p-5">
              <div>
                <dt className="text-slate-500">Average onboarding</dt>
                <dd className="heading-display mt-1 text-xl font-semibold tracking-tight">7-10 days</dd>
              </div>
              <div className="section-divider pt-4">
                <dt className="text-slate-500">Team adoption</dt>
                <dd className="heading-display mt-1 text-xl font-semibold tracking-tight">2 weeks typical</dd>
              </div>
              <div className="section-divider pt-4">
                <dt className="text-slate-500">Support response</dt>
                <dd className="heading-display mt-1 text-xl font-semibold tracking-tight">Within 1 business day</dd>
              </div>
           
          </div>
        </div>
      </section>

      <section className="section-band rounded-3xl p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr]">
          <div>
            <p className="text-sm text-slate-600">Core benefits</p>
            <h2 className="heading-display mt-4 text-3xl font-semibold tracking-tight">
              Clear information architecture for daily execution
            </h2>
            <p className="mt-4 text-slate-600">
              Instead of jumping through separate cards and modules everywhere, your team follows one predictable flow with contextual details where they are needed.
            </p>
          </div>

          <div className="space-y-5">
            {features.map((feature) => (
              <article key={feature.title} className="pt-5 first:pt-0">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{feature.metric}</p>
                <h3 className="heading-display mt-1 text-xl font-semibold tracking-tight text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="section-band rounded-3xl p-6 lg:col-span-2">
          <p className="text-sm text-slate-600">How it works</p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-3">
            <li className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Step 1</p>
              <p className="mt-2 font-medium text-slate-900">Centralize your workflow</p>
            </li>
            <li className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Step 2</p>
              <p className="mt-2 font-medium text-slate-900">Create repeatable processes</p>
            </li>
            <li className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Step 3</p>
              <p className="mt-2 font-medium text-slate-900">Scale with confidence</p>
            </li>
          </ol>
        </div>

        <div className="overflow-hidden rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="heading-display text-2xl font-semibold tracking-tight">
            Ready to modernize operations?
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Compare plans, review implementation support and pick the setup that fits your stage.
          </p>
          <Link
            href="/pricing"
            className="mt-6 inline-flex rounded-xl px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-300"
          >
            Compare Plans
          </Link>
        </div>
      </section>
    </div>
  );
}