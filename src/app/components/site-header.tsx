"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/contact", label: "Contact" },
	{ href: "/about", label: "About" },
];

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/95 text-white backdrop-blur supports-[backdrop-filter]:bg-zinc-950/80">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
				<Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
					<span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
					<span>Finxa Commerce</span>
				</Link>

				<nav className="-mx-1 flex overflow-x-auto pb-1 text-sm text-zinc-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					{navLinks.map((item) => {
						const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`shrink-0 rounded-full px-3 py-1.5 transition-colors ${
									isActive
										? "bg-white/15 text-white"
										: "text-zinc-300 hover:bg-white/10 hover:text-white"
								}`}
								aria-current={isActive ? "page" : undefined}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
