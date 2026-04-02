import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Finxa Commerce",
  description: "Contact Finxa Commerce for product walkthroughs, onboarding guidance and support inquiries.",
};

export default function Contact() {
  const formAction = process.env.NEXT_PUBLIC_FORMSPREE_URL || "#";

  return (
    <div className="space-y-12 sm:space-y-14">
      <section className="section-band fade-up overflow-hidden rounded-3xl p-7 sm:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Contact
        </p>
        <h1 className="heading-display mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Contact Finxa Commerce
        </h1>
        <p className="mt-3 text-base font-medium text-slate-700 lg:hidden">
          Tell us about your team, goals, or questions. We usually respond within one business day.
        </p>
        <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
          Tell us about your team, goals, or questions. We usually respond within one business day.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-slate-500">
          Not sure where to start? Share your current process and we will suggest the best plan and workflow setup.
        </p>
      </section>

      <section className="section-band rounded-3xl p-7 sm:p-10">
        <form action={formAction} method="POST" className="space-y-5 max-w-2xl">
          <input type="hidden" name="_subject" value="New Finxa Commerce contact request" />

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={80}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={120}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
              placeholder="you@company.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={2500}
              rows={6}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
              placeholder="Tell us what you need help with"
            />
            <p className="text-xs text-zinc-500">Minimum 10 characters. Please include your team size and key goals.</p>
          </div>

          <button
            type="submit"
            className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Send Message
          </button>

          {formAction === "#" && (
            <p className="text-sm text-zinc-600">
              Form endpoint not configured yet. Add NEXT_PUBLIC_FORMSPREE_URL in your environment settings.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}