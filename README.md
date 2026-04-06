# Finxa Commerce Marketing Site 🚀

Finxa Commerce is a multi-page marketing website for an operations-focused commerce platform. The site presents the product, its pricing, common questions, company background and legal pages in a clean brochure-style layout built with modern React and Next.js.

## 🌐 Overview

Finxa Commerce is a modern, content-driven marketing website designed to communicate the value of an operations-focused commerce platform. It presents key product messaging, pricing and supporting information through a structured set of pages that guide users from discovery to action.

The site follows a clean, brochure-style approach, prioritizing clarity, visual hierarchy and responsive design to ensure a consistent experience across devices. Rather than functioning as a complex application, it focuses on delivering concise information, clear navigation and well-defined calls to action.

Built using the Next.js App Router and a component-based architecture, the project emphasizes maintainability, scalability and performance, making it suitable as a foundation for a production-ready SaaS marketing presence.

## 🔗 Live Demo

👉 [View Live Site](https://my-platform-site.vercel.app/)

## ✨ Scope

The site currently includes:

- A home page with a product summary, benefits and calls to action.
- A pricing page with tiered plans and plan comparison content.
- A FAQ page with common product and support questions.
- A contact page with a form that posts to an external endpoint when configured.
- An about page describing the product mission and operating philosophy.
- Privacy and terms pages with draft legal content.
- A custom not-found page.

## 🛠️ Tech Stack

- Next.js 16.2.1
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- Google Fonts via Next.js font optimization

## 📁 Project Structure

```text
src/
	app/
		globals.css          Global styling, design tokens, animations and base element styles
		layout.tsx           Root HTML shell, metadata and shared page frame
		not-found.tsx        404 page
		page.tsx             Home page
		about/page.tsx       About page
		contact/page.tsx     Contact page and form
		faq/page.tsx         FAQ page
		pricing/page.tsx     Pricing page
		privacy/page.tsx     Privacy policy page
		terms/page.tsx       Terms page
		components/
			site-header.tsx    Shared top navigation and mobile menu
			site-footer.tsx    Shared footer navigation and copyright area
public/                 Static assets
```

## 🧭 Routes

| Route | Purpose |
| --- | --- |
| / | Home page with product positioning, feature summaries, and primary CTAs |
| /pricing | Pricing tiers and comparison table |
| /faq | Common questions about product fit, support and billing |
| /contact | Contact form and sales/support entry point |
| /about | Company and product mission page |
| /privacy | Draft privacy policy |
| /terms | Draft terms of service |
| any unmatched route | Custom 404 page |

## 🔎 Metadata And SEO

Each major route exports Next.js metadata for page titles and descriptions. The root layout also defines Open Graph metadata for the site identity and primary landing page.

This setup gives the site meaningful browser titles and social preview data without adding a separate SEO layer.

## 🔌 External Integrations

The contact page supports form submission through an externally configured endpoint. If NEXT_PUBLIC_FORMSPREE_URL is not set, the form falls back to a placeholder action and shows a configuration hint in the UI.

There are no other runtime integrations in the current codebase.

## 🌍 Environment Variables

The only environment variable referenced in the app code is:

- NEXT_PUBLIC_FORMSPREE_URL: form submission endpoint used by the contact page

## 🚢 Deployment Profile

The repository is structured like a standard Next.js site intended for static content hosting or a managed deployment platform. The codebase is compatible with typical modern Next.js deployment workflows, but the repository itself does not include deployment infrastructure files beyond the app code and configuration.

## 👩‍💻 Maintainer Summary

This repository is best described as a polished SaaS marketing site with a strong content hierarchy, route-based composition and minimal dependencies beyond the Next.js stack.