import { Instagram, Facebook, Linkedin } from "lucide-react";

const socialLinks = [
	{ href: "#", label: "Instagram", icon: Instagram },
	{ href: "#", label: "Facebook", icon: Facebook },
	{ href: "#", label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
	return (
		<footer className="bg-[#26235e] text-white border-t border-[#4ed372]/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
					<div className="flex items-center">
						<img src="/logo.png" alt="Logo" className="h-12 w-auto" />
					</div>

					<div className="flex items-center gap-3 sm:justify-end">
						{socialLinks.map((item) => {
							const Icon = item.icon;

							return (
								<a
									key={item.label}
									href={item.href}
									aria-label={item.label}
									className="w-10 h-10 flex items-center justify-center border border-white/15 text-white hover:text-[#4ed372] hover:border-[#4ed372] transition-colors"
								>
									<Icon className="w-4 h-4" />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</footer>
	);
}
