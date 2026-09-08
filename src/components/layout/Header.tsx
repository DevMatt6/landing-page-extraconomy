import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems: { href: string; label: string }[] = [
	{ href: "/landingpage1", label: "Landing 1 — Contatto" },
	{ href: "/landingpage2", label: "Landing 2 — Prodotto" },
	{ href: "/landingpage3", label: "Landing 3 — Servizio" },
];

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 40);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#26235e] ${
				isScrolled
					? "shadow-lg py-3 border-b border-[#4ed372]/20"
					: "border-b border-white/10 py-5"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				{/* Logo */}
				<Link to="/" className="flex items-center">
					<img src="/logo.png" alt="LP-extraconomy" className="h-12 w-auto" />
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden lg:flex items-center gap-1">
					{navItems.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
								location.pathname === item.href
									? "text-[#4ed372]"
									: "text-white hover:text-[#4ed372]"
							}`}
						>
							{item.label}
						</Link>
					))}
					<a
						href="#"
						className="ml-3 flex items-center gap-2 px-5 py-2.5 bg-[#4ed372] text-[#26235e] text-sm font-bold hover:bg-[#66de88] transition-colors shadow-md"
					>
						CTA Personalizzata
					</a>
				</nav>

				{/* Mobile toggle */}
				<button
					className="lg:hidden p-2 text-white"
					onClick={() => setIsMobileMenuOpen((v) => !v)}
					aria-label="Menu"
				>
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Nav */}
			{isMobileMenuOpen && (
				<div className="lg:hidden bg-[#26235e] border-t border-white/10">
					<nav className="flex flex-col px-4 py-4 gap-1">
						{navItems.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								className={`px-3 py-2.5 text-sm font-semibold rounded-md ${
									location.pathname === item.href
										? "text-[#26235e] bg-[#4ed372]"
										: "text-white hover:bg-white/10"
								}`}
							>
								{item.label}
							</Link>
						))}
						<a
							href="tel:+393444324687"
							className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4ed372] text-[#26235e] text-sm font-bold text-center"
						>
							<Phone className="w-4 h-4" />
							Chiama ora
						</a>
					</nav>
				</div>
			)}
		</header>
	);
}
