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
    <div className="space-y-20">
      
      {/* Split Hero */}
      <section className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight leading-tight text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-slate-700 max-w-lg">
            Plain-language answers to help you quickly understand what Finxa Commerce offers.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-sky-100 to-blue-50 p-8 border border-sky-200">
          <p className="text-sm text-slate-600">Support & Guidance</p>
          <p className="mt-3 text-xl font-medium text-slate-900 leading-relaxed">
            We’re here to help you get the most from Finxa Commerce.
          </p>
        </div>
      </section>

      {/* Big Statement */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Answers for every stage of your journey
        </h2>
        <p className="mt-4 text-slate-700">
          From onboarding to scaling, these FAQs cover the most common questions teams have about using Finxa Commerce.
        </p>
      </section>

      {/* FAQ List */}
      <section className="space-y-10 max-w-3xl mx-auto">
        {questions.map((item, idx) => (
          <div key={item.q} className="flex gap-6 items-start">
            <div
              className={`w-2 rounded-full ${
                idx % 3 === 0
                  ? "bg-sky-400"
                  : idx % 3 === 1
                  ? "bg-cyan-400"
                  : "bg-blue-400"
              }`}
            ></div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Q{idx + 1}
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                {item.q}
              </h2>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}