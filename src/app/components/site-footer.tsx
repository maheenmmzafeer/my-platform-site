import Link from "next/link";

const footerLinks = [
	{ href: "/privacy", label: "Privacy" },
	{ href: "/terms", label: "Terms" },
	{ href: "/contact", label: "Contact" },
	{ href: "/faq", label: "FAQ" },
];

export function SiteFooter() {
	return (
		<footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-300">
			<div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:items-end">
				<div>
					<p className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-400">
						Finxa Commerce
					</p>
					<p className="mt-3 max-w-sm text-sm text-zinc-400">
						A modern operating layer for teams that care about clarity, consistency, and scale.
					</p>
					<p className="mt-4 text-xs text-zinc-500">© 2026 Finxa Commerce. All rights reserved.</p>
				</div>

				<nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:justify-self-end">
					{footerLinks.map((item) => (
						<Link key={item.href} href={item.href} className="text-zinc-300 transition-colors hover:text-white">
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</footer>
	);
}
