import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finxa Commerce",
  description: "Modern commerce platform for growing brands and teams.",
  openGraph: {
    title: "Finxa Commerce",
    description: "Modern commerce platform for growing brands and teams.",
    type: "website",
    url: "https://finxa.store",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
        <header className="bg-black text-white border-b border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Finxa Commerce
            </Link>

            <nav className="flex flex-wrap items-center gap-2 text-sm text-zinc-200">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-1 py-1 text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
            {children}
          </div>
        </main>

        <footer className="bg-black text-zinc-300 border-t border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">
              © 2026 Finxa Commerce. All rights reserved.
            </p>

            <nav className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}