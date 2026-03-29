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
        url: "/Finxa.wll.png",
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
      text: "Track orders, exceptions, fulfillment states and team workload from one live operations view.",
      tone: "border-sky-200 bg-sky-50/70",
    },
    {
      title: "Automated Workflows",
      text: "Automate repetitive tasks like order tagging, SLA routing and status updates with rule-based triggers.",
      tone: "border-cyan-200 bg-cyan-50/70",
    },
    {
      title: "Reliable Foundations",
      text: "Run with clear permissions, audit trails and dependable performance as your operation scales.",
      tone: "border-blue-200 bg-blue-50/70",
    },
  ];

  return (
    <div className="space-y-14">
      <section className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-10 shadow-[0_1px_0_#e5e5e5]">
        <p className="inline-flex rounded-full border border-sky-300 bg-sky-50 px-3 py-1 text-xs tracking-wide uppercase text-sky-900">
          Finxa Commerce Platform
        </p>
        <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-4xl">
          Run modern commerce operations without the spreadsheet chaos.
        </h1>
        <p className="mt-5 max-w-2xl text-zinc-600 text-base sm:text-lg">
          Finxa Commerce centralizes day-to-day execution for operations teams,
          so orders move faster, teams stay aligned and customers get consistent service.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Average onboarding</p>
            <p className="mt-1 text-lg font-semibold tracking-tight">7-10 days</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Team adoption</p>
            <p className="mt-1 text-lg font-semibold tracking-tight">2 weeks typical</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Support response</p>
            <p className="mt-1 text-lg font-semibold tracking-tight">Within 1 business day</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            View Pricing
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Talk to Sales
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className={`rounded-xl border p-6 ${feature.tone}`}
          >
            <h2 className="text-lg font-semibold tracking-tight">{feature.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">How teams use Finxa</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="border border-sky-200 bg-sky-50/70 rounded-lg p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Step 1</p>
            <p className="mt-2 font-medium">Centralize your workflow</p>
            <p className="mt-2 text-sm text-zinc-600">
              Connect your core processes into one workspace with shared context.
            </p>
          </div>

          <div className="border border-cyan-200 bg-cyan-50/60 rounded-lg p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Step 2</p>
            <p className="mt-2 font-medium">Create repeatable processes</p>
            <p className="mt-2 text-sm text-zinc-600">
              Turn tribal knowledge into clear playbooks your team can execute every day.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/60 rounded-lg p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Step 3</p>
            <p className="mt-2 font-medium">Scale with confidence</p>
            <p className="mt-2 text-sm text-zinc-600">
              Maintain quality and visibility even as order volume and headcount increase.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-zinc-900 via-slate-900 to-zinc-800 text-white p-7 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ready to modernize your commerce operations?
        </h2>
        <p className="mt-3 text-zinc-300 max-w-2xl">
          Compare plans, review implementation support and choose the setup that
          fits your current stage.
        </p>
        <Link
          href="/pricing"
          className="mt-6 inline-flex rounded-md bg-white px-5 py-2.5 text-sm hover:bg-zinc-200 transition-colors"
        >
          <h3 className = "font-medium text-black"> Compare Plans </h3>
        </Link>
      </section>
    </div>
  );
}