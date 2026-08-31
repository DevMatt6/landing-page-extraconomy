import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#26235e]">
			{/* Background image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
				style={{ backgroundImage: "url('/img/hero.jpg')" }}
			/>

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-[#26235e] via-[#26235e]/10 to-transparent" />

			{/* Content */}
			<div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
				<div className="max-w-3xl text-left">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 bg-[#4ed372]/15 px-4 py-1.5 mb-6"
					>
						<span className="w-2 h-2 bg-[#4ed372] animate-pulse" />
						<span className="text-[#4ed372] text-sm font-semibold">
							B&amp;B e Appartamenti Vacanze a Roma e Fiumicino
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
					>
						Ervin <span className="text-[#4ed372]">Stay</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.15 }}
						className="text-lg sm:text-xl text-gray-200 font-semibold mb-6"
					>
						Alloggi turistici a Roma e Fiumicino
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-base text-gray-300 mb-10 leading-relaxed max-w-xl"
					>
						Alloggi turistici a Roma, ideali per ogni esigenza e tipo di
						soggiorno. Grazie a LP-extraconomy, puoi contare su immobili ben
						gestiti, puliti e pronti ad accoglierti in ogni momento.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="flex flex-col sm:flex-row gap-4 justify-start"
					>
						<Button
							asChild
							size="lg"
							className="bg-[#4ed372] hover:bg-[#66de88] text-[#26235e] font-bold px-8 transition-all hover:scale-105"
						>
							<Link to="#">
								Scopri i nostri alloggi
								<ArrowRight className="ml-2 w-5 h-5" />
							</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="text-white border-white/40 bg-transparent hover:bg-white hover:text-[#26235e] px-8 transition-all"
						>
							<Link to="#">Contattaci</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
