import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingPage1HeroSection() {
	return (
		<section className="pt-32 pb-24 bg-[#26235e] overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
					<div className="lg:col-span-7 max-w-3xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center px-4 py-1.5 mb-6 border border-[#4ed372]/30 bg-[#4ed372]/10"
						>
							<span className="text-[#4ed372] text-sm font-semibold uppercase tracking-[0.16em]">
								Studio Rossi & Associati — Commercialisti
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
						>
							La tua contabilità in ordine, ogni mese, senza pensieri
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.15 }}
							className="text-lg sm:text-xl text-white/80 font-medium mb-8 max-w-2xl"
						>
							Gestiamo dichiarazioni, scadenze e adempimenti per freelance, professionisti con Partita IVA e piccole imprese. Tu lavora — al resto pensiamo noi.
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
								className="bg-[#4ed372] hover:bg-[#66de88] text-[#26235e] font-bold px-8 transition-all hover:scale-105"
							>
								<Link to="#contatti">
									Prenota una consulenza gratuita
									<ArrowRight className="ml-2 w-5 h-5" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="text-white border-white/40 bg-transparent hover:bg-white hover:text-[#26235e] px-8 transition-all"
							>
								<Link to="#servizi">Scopri cosa facciamo</Link>
							</Button>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="lg:col-span-5"
					>
						<div className="border border-white/15 bg-white/5 p-6 lg:p-8">
							<div className="space-y-5">
								<div className="border-b border-white/10 pb-5">
									<p className="text-sm uppercase tracking-[0.14em] text-[#4ed372] mb-2">
										Chi siamo
									</p>
									<p className="text-white text-lg leading-relaxed">
										Oltre 18 anni di attività. Più di 300 clienti seguiti ogni anno tra liberi professionisti, ditte individuali e PMI in tutta Italia.
									</p>
								</div>
								<div className="grid sm:grid-cols-2 gap-4">
									<div className="border border-white/10 p-4">
										<p className="text-sm uppercase tracking-[0.14em] text-[#4ed372] mb-2">Specializzazione</p>
										<p className="text-white/80 text-sm leading-relaxed">Freelance, artigiani, professionisti con P.IVA, società di persone e piccole SRL.</p>
									</div>
									<div className="border border-white/10 p-4">
										<p className="text-sm uppercase tracking-[0.14em] text-[#4ed372] mb-2">Come lavoriamo</p>
										<p className="text-white/80 text-sm leading-relaxed">In studio a Torino o da remoto. Prima consulenza gratuita e senza impegno, anche online.</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
