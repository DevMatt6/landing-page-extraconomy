import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MonitorSmartphone, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingPage3HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#26235e]">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
				style={{ backgroundImage: "url('/img/placeholder.png')" }}
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-[#26235e] via-[#26235e]/35 to-[#26235e]/10" />

			<div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
				<div className="max-w-3xl text-left">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 bg-[#4ed372]/15 px-4 py-1.5 mb-6"
					>
						<MonitorSmartphone className="w-4 h-4 text-[#4ed372]" />
						<span className="text-[#4ed372] text-sm font-semibold">
							Categoria, ad esempio “CRM per agenzie, Software gestionale o Piattaforma prenotazioni”
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
					>
						Qui va il nome della <span className="text-[#4ed372]">soluzione digitale</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.15 }}
						className="text-lg sm:text-xl text-gray-200 font-semibold mb-8"
					>
						Inserisci qui il sottotitolo, ad esempio “Uno strumento pensato per automatizzare attività ripetitive e migliorare l’organizzazione del team”.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.25 }}
						className="grid sm:grid-cols-3 gap-3 mb-10 max-w-2xl"
					>
						{[
							{ icon: Workflow, text: "Inserisci qui un punto chiave, ad esempio “Gestione semplice da desktop e mobile”" },
							{ icon: Zap, text: "Inserisci qui un punto chiave, ad esempio “Riduzione dei passaggi manuali”" },
							{ icon: MonitorSmartphone, text: "Inserisci qui un punto chiave, ad esempio “Interfaccia chiara per utenti e operatori”" },
						].map((item) => {
							const Icon = item.icon;

							return (
								<div key={item.text} className="flex items-start gap-2 text-sm text-gray-200 bg-white/5 border border-white/10 px-4 py-3">
									<Icon className="w-4 h-4 text-[#4ed372] mt-0.5 shrink-0" />
									<span>{item.text}</span>
								</div>
							);
						})}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="flex flex-col sm:flex-row gap-4 justify-start"
					>
						<Button asChild size="lg" className="bg-[#4ed372] hover:bg-[#66de88] text-[#26235e] font-bold px-8 transition-all hover:scale-105">
							<Link to="#">
								CTA, ad esempio “Richiedi demo oppure Prenota una call”
								<ArrowRight className="ml-2 w-5 h-5" />
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline" className="text-white border-white/40 bg-transparent hover:bg-white hover:text-[#26235e] px-8 transition-all">
							<Link to="#">Azione secondaria</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
