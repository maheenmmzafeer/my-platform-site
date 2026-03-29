import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Finxa Commerce",
  description: "Answers to common questions about Finxa Commerce pricing, onboarding, security and support.",
};

export default function FAQ() {
  const questions = [
    {
      q: "What is Finxa Commerce?",
      a: "Finxa Commerce is software that helps your team run daily operations in one place. It replaces scattered spreadsheets and chat threads with clear workflows.",
    },
    {
      q: "What problems does it solve for a normal company?",
      a: "It helps when work is getting missed, ownership is unclear, or updates are spread across too many tools. Your team can track tasks, status and responsibilities clearly.",
    },
    {
      q: "Do we need a technical team to use it?",
      a: "No. Most teams start with basic setup and onboarding guidance. You can begin with simple workflows and expand over time.",
    },
    {
      q: "How long does setup usually take?",
      a: "Most teams get initial setup done in about 7 to 10 days, depending on how many workflows they want to configure.",
    },
    {
      q: "Which plan should we choose first?",
      a: "If you are a small team, start with Starter. If you need more automation and priority handling, choose Growth. Scale is best for larger multi-team operations.",
    },
    {
      q: "Can we start small and upgrade later?",
      a: "Yes. You can move to a higher plan as your team size and workflow complexity grow.",
    },
    {
      q: "How does support work?",
      a: "Starter includes standard support, Growth includes priority support, and Scale includes a dedicated success contact.",
    },
    {
      q: "Do you offer annual billing?",
      a: "Yes. Annual billing is available for teams that prefer a longer-term billing cycle.",
    },
    {
      q: "Is our business data secure?",
      a: "Finxa Commerce follows standard security practices and continuously improves protections for customer data.",
    },
    {
      q: "Can we request a walkthrough before buying?",
      a: "Yes. You can contact the team to schedule a walkthrough based on your current process and goals.",
    },
  ];

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-sky-200 bg-sky-50/60 p-7 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Plain-language answers to help you quickly understand what Finxa Commerce offers.
        </p>
      </section>

      <section className="grid gap-4">
        {questions.map((item) => (
          <article key={item.q} className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">{item.q}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{item.a}</p>
          </article>
        ))}
      </section>
    </div>
  );
}