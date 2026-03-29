import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Finxa Commerce",
  description: "Answers to common questions about Finxa Commerce pricing, onboarding, security and support.",
};

export default function FAQ() {
  const questions = [
    {
      q: "What is Finxa Commerce?",
      a: "Finxa Commerce is a SaaS platform for commerce operations teams to manage workflows, team execution and customer-facing processes in one workspace.",
    },
    {
      q: "Who is Finxa Commerce built for?",
      a: "It is designed for growing businesses that run recurring operational workflows and need better visibility, accountability and speed.",
    },
    {
      q: "Can we start small and upgrade later?",
      a: "Yes. You can begin with a smaller plan and move to a higher tier as your team and process complexity increase.",
    },
    {
      q: "How long does onboarding usually take?",
      a: "Most teams complete initial onboarding within 7 to 10 days, depending on workflow complexity and internal readiness.",
    },
    {
      q: "Is onboarding included?",
      a: "Yes. Every plan includes onboarding guidance, and higher plans include deeper implementation support and rollout planning.",
    },
    {
      q: "How does support work?",
      a: "Starter includes standard support, Growth includes priority support, and Scale includes a dedicated success contact.",
    },
    {
      q: "Do you offer annual billing?",
      a: "Yes. Finxa Commerce offers annual billing options for teams that prefer longer planning cycles.",
    },
    {
      q: "Is our business data secure?",
      a: "Finxa Commerce follows standard security practices and continuously improves infrastructure protections for customer data.",
    },
    {
      q: "Can we request a product walkthrough before choosing a plan?",
      a: "Absolutely. You can contact the team to schedule a walkthrough and discuss your operational requirements before committing.",
    },
  ];

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-sky-200 bg-sky-50/60 p-7 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Everything teams usually ask before adopting Finxa Commerce.
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