"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import finxaLogo from "../finxa.wll.png";

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
		<header className="sticky top-0 z-40 border-b border-zinc-800 bg-black text-white">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-4">
				<div className="flex items-center justify-between gap-3 sm:justify-start">
					<Link href="/" className="inline-flex items-center" aria-label="Finxa home">
						<Image
							src={finxaLogo}
							alt="Finxa"
							priority
							className="h-6 w-auto sm:h-9"
						/>
					</Link>

					<button
						type="button"
						onClick={() => setIsMenuOpen((open) => !open)}
						className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-zinc-200 transition-colors hover:bg-white/10 sm:hidden"
						aria-expanded={isMenuOpen}
						aria-controls="site-mobile-menu"
						aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					>
						<span className="text-lg leading-none">{isMenuOpen ? "X" : "="}</span>
					</button>
				</div>

				<nav className="hidden flex-wrap items-center gap-2 text-sm text-zinc-200 sm:flex">
					{navLinks.map((item) => {
						const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`px-1 py-1 transition-colors ${
									isActive ? "text-white" : "text-white/90 hover:text-white"
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
					className={`mt-2 grid overflow-hidden transition-all duration-200 sm:hidden ${
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
