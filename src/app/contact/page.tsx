import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Finxa Commerce",
  description: "Contact Finxa Commerce for product walkthroughs, onboarding guidance and support inquiries.",
};

export default function Contact() {
  const formAction = process.env.NEXT_PUBLIC_FORMSPREE_URL || "#";

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-cyan-50 p-7 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact Finxa Commerce</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Tell us about your team, goals, or questions. We usually respond within one business day.
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-10">
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