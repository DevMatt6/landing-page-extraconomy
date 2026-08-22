import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Chi Siamo", href: "/chi-siamo" },
	{ label: "I Nostri Alloggi", href: "/alloggi" },
	{ label: "Lavora con Noi", href: "/lavora-con-noi" },
	{ label: "Contatti", href: "/contatti" },
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
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1C1C1E] ${
				isScrolled
					? "shadow-lg py-3 border-b border-[#C9A227]/20"
					: "border-b border-white/10 py-5"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				{/* Logo */}
				<Link to="/" className="flex items-center">
					<img
						src="/logo.svg"
						alt="Ervin Stay"
						className="h-16 w-auto"
					/>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden lg:flex items-center gap-1">
					{navItems.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
								location.pathname === item.href
									? "text-[#C9A227]"
									: "text-white hover:text-[#C9A227]"
							}`}
						>
							{item.label}
						</Link>
					))}
					<a
						href="tel:+393444324687"
						className="ml-3 flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] text-[#1C1C1E] text-sm font-bold hover:bg-[#E0C05A] transition-colors shadow-md"
					>
						<Phone className="w-4 h-4" />
						Chiama ora
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
				<div className="lg:hidden bg-[#1C1C1E] border-t border-white/10">
					<nav className="flex flex-col px-4 py-4 gap-1">
						{navItems.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								className={`px-3 py-2.5 text-sm font-semibold rounded-md ${
									location.pathname === item.href
										? "text-[#1C1C1E] bg-[#C9A227]"
										: "text-white hover:bg-white/10"
								}`}
							>
								{item.label}
							</Link>
						))}
						<a
							href="tel:+393444324687"
							className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C9A227] text-[#1C1C1E] text-sm font-bold text-center"
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
