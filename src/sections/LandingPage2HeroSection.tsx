import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingPage2HeroSection() {
	return (
		<section className="pt-32 pb-24 bg-[#26235e] overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					<div className="max-w-2xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-[#4ed372]/30 bg-[#4ed372]/8"
						>
							<Package className="w-4 h-4 text-[#4ed372]" />
							<span className="text-[#4ed372] text-sm font-semibold uppercase tracking-[0.16em]">
								Categoria, ad esempio “Integratore naturale, Kit skincare o Dispositivo smart”
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
						>
							Nome prodotto, ad esempio “Kit viso riequilibrante per pelle sensibile”
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.15 }}
							className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl"
						>
							Inserisci qui il sottotitolo del prodotto, ad esempio “Formula quotidiana pensata per idratare, proteggere e riequilibrare la pelle”.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="flex flex-col sm:flex-row gap-4"
						>
							<Button
								asChild
								size="lg"
								className="bg-[#4ed372] hover:bg-[#66de88] text-[#26235e] font-bold px-8 transition-all"
							>
								<Link to="#">
									CTA, ad esempio “Acquista ora oppure Richiedi informazioni”
									<ArrowRight className="ml-2 w-5 h-5" />
								</Link>
							</Button>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.15 }}
						className="lg:pl-6"
					>
						<div className="bg-white/10 border border-white/15 overflow-hidden">
							<img
								src="/img/placeholder.png"
								alt="Immagine prodotto"
								className="w-full h-[420px] sm:h-[520px] object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
