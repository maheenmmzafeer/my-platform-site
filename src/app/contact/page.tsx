import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Finxa Commerce",
  description:
    "Contact Finxa Commerce for product walkthroughs, onboarding guidance and support inquiries.",
};

export default function Contact() {
  const formAction = process.env.NEXT_PUBLIC_FORMSPREE_URL || "#";

  return (
    <div className="space-y-16">

      {/* Hero */}
      <section className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-slate-500">
            Contact
          </p>

          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Contact Finxa Commerce
          </h1>

          <p className="mt-5 max-w-lg text-slate-700">
            Tell us about your needs and we will help you get started quickly
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-100 to-cyan-50 p-8">
          <p className="text-sm text-slate-600">Response Time</p>
          <p className="mt-2 text-xl font-medium text-slate-900">
            Within one business day
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">

        {/* Left Panel */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            Tell us about your team size, current workflow and key goals such as improving
            inventory accuracy or streamlining operations. Include any tools you are already
            using so we can give you more relevant recommendations.
          </p>
        </div>

        {/* Form */}
        <form
          action={formAction}
          method="POST"
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Finxa Commerce contact request"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={80}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={120}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={2500}
              rows={6}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
              placeholder="Tell us what you need help with"
            />
            <p className="text-xs text-slate-500">
              Minimum 10 characters
            </p>
          </div>

          <button
            type="submit"
            className="rounded-lg border border-slate-300 bg-slate-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
          >
            Send Message
          </button>

          {formAction === "#" && (
            <p className="text-xs text-slate-500">
              Form endpoint not configured yet
            </p>
          )}
        </form>

      </section>
    </div>
  );
}