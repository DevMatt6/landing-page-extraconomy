import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
	{ label: "Home", href: "/" },
	{ label: "Chi Siamo", href: "/chi-siamo" },
	{ label: "I Nostri Alloggi", href: "/alloggi" },
	{ label: "Lavora con Noi", href: "/lavora-con-noi" },
	{ label: "Contatti", href: "/contatti" },
];

const zoneLinks = [
	{ label: "Alloggi a Roma", href: "/alloggi?zona=roma" },
	{ label: "Alloggi a Fiumicino", href: "/alloggi?zona=fiumicino" },
];

export function Footer() {
	return (
		<footer className="bg-[#1C1C1E] text-white border-t border-[#C9A227]/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand */}
					<div className="lg:col-span-1">
						<div className="mb-4">
							<img src="/logo.svg" alt="Ervin Stay" className="h-12 w-auto" />
						</div>
						<p className="text-gray-400 text-sm leading-relaxed">
							Alloggi turistici a Roma e Fiumicino: B&B e appartamenti vacanze
							ben gestiti, puliti e pronti ad accoglierti in ogni momento.
						</p>
					</div>

					{/* Alloggi */}
					<div>
						<h3 className="text-[#C9A227] font-semibold uppercase text-sm tracking-widest mb-4">
							I Nostri Alloggi
						</h3>
						<ul className="flex flex-col gap-2">
							{zoneLinks.map((link) => (
								<li key={link.href}>
									<Link
										to={link.href}
										className="text-gray-400 text-sm hover:text-[#C9A227] transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-[#C9A227] font-semibold uppercase text-sm tracking-widest mb-4">
							Link Utili
						</h3>
						<ul className="flex flex-col gap-2">
							{quickLinks.map((link) => (
								<li key={link.href}>
									<Link
										to={link.href}
										className="text-gray-400 text-sm hover:text-[#C9A227] transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contatti */}
					<div>
						<h3 className="text-[#C9A227] font-semibold uppercase text-sm tracking-widest mb-4">
							Contatti
						</h3>
						<ul className="flex flex-col gap-3">
							<li className="flex items-start gap-2">
								<MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
								<span className="text-gray-400 text-sm">Roma e Fiumicino</span>
							</li>
							<li className="flex items-center gap-2">
								<Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
								<a
									href="tel:+393444324687"
									className="text-gray-400 text-sm hover:text-[#C9A227] transition-colors"
								>
									0039.344.43.24.687
								</a>
							</li>
							<li className="flex items-center gap-2">
								<Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
								<a
									href="mailto:kroiervis70@gmail.com"
									className="text-gray-400 text-sm hover:text-[#C9A227] transition-colors"
								>
									kroiervis70@gmail.com
								</a>
							</li>
						</ul>
						<a
							href="tel:+393444324687"
							className="mt-4 inline-block px-4 py-2 bg-[#C9A227] text-[#1C1C1E] text-xs font-bold"
						>
							Chiama ora
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-white/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
					<p className="text-gray-500 text-xs">
						&copy; {new Date().getFullYear()} Ervin Stay — Tutti i diritti
						riservati
					</p>
					<p className="text-gray-500 text-xs">
						Alloggi turistici a Roma e Fiumicino
					</p>
				</div>
			</div>
		</footer>
	);
}
