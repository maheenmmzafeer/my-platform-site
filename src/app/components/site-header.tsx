"use client";

import { useState } from "react";
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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/95 text-white backdrop-blur supports-[backdrop-filter]:bg-zinc-950/80">
			<div className="mx-auto w-full max-w-6xl px-4 py-4">
				<div className="flex items-center justify-between gap-3">
					<Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
						<span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
						<span>Finxa Commerce</span>
					</Link>

					<button
						type="button"
						onClick={() => setIsMenuOpen((open) => !open)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-zinc-200 transition-colors hover:bg-white/10 sm:hidden"
						aria-expanded={isMenuOpen}
						aria-controls="site-mobile-menu"
						aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					>
						<span className="text-lg leading-none">{isMenuOpen ? "X" : "="}</span>
					</button>
				</div>

				<nav className="mt-3 hidden items-center gap-1 text-sm text-zinc-300 sm:flex">
					{navLinks.map((item) => {
						const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-3 py-1.5 transition-colors ${
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

				<nav
					id="site-mobile-menu"
					className={`mt-3 grid overflow-hidden transition-all duration-200 sm:hidden ${
						isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="rounded-xl border border-white/10 bg-white/5 p-2">
						{navLinks.map((item) => {
							const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

							return (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setIsMenuOpen(false)}
									className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
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
					</div>
				</nav>
			</div>
		</header>
	);
}
