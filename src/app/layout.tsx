import "./globals.css";
import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 antialiased">
        <SiteHeader />

        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
            {children}
          </div>
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}