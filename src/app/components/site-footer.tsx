import Link from "next/link";

const footerLinks = [
	{ href: "/privacy", label: "Privacy" },
	{ href: "/terms", label: "Terms" },
	{ href: "/contact", label: "Contact" },
	{ href: "/faq", label: "FAQ" },
];

export function SiteFooter() {
	return (
		<footer className="border-t border-sky-100 bg-slate-950 text-slate-300">
			<div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:items-end sm:px-6 lg:px-8">
				<div>
					<p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300/85">
						Finxa Commerce
					</p>
					<p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
						Built for teams that want elegant operations, predictable execution and faster growth.
					</p>
					<p className="mt-4 text-xs text-slate-500">© 2026 Finxa Commerce. All rights reserved.</p>
				</div>

				<nav className="grid grid-cols-2 gap-x-7 gap-y-3 text-sm sm:justify-self-end">
					{footerLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-slate-300 transition-colors hover:text-sky-300"
						>
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</footer>
	);
}
