import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Finxa Commerce",
  description: "Answers to common questions about Finxa Commerce plans, setup, and support.",
};

export default function FAQ() {
  const questions = [
    {
      q: "What is Finxa Commerce?",
      a: "Finxa Commerce is a SaaS platform that helps businesses manage operations, team workflows, and execution quality from one place.",
    },
    {
      q: "Who is Finxa Commerce built for?",
      a: "It is designed for growing businesses and teams that need better structure and visibility across day-to-day operations.",
    },
    {
      q: "Can we start small and upgrade later?",
      a: "Yes. You can begin with a smaller plan and move to a higher tier as your team and process complexity increase.",
    },
    {
      q: "Is onboarding included?",
      a: "Yes. Every plan includes guided onboarding, and higher plans include deeper implementation support.",
    },
    {
      q: "How does support work?",
      a: "Starter includes standard support, Growth includes priority support, and Scale includes a dedicated success contact.",
    },
    {
      q: "Is our business data secure?",
      a: "Finxa Commerce follows standard security practices and continuously improves infrastructure protections for customer data.",
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