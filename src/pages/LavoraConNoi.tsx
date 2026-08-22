import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Phone,
	Sparkles,
	Handshake,
	TrendingUp,
} from "lucide-react";
import { PageHeaderSection } from "@/sections/PageHeaderSection";
import { Button } from "@/components/ui/button";

const vantaggi = [
	{
		icon: Sparkles,
		title: "Avvio dell'attività",
		desc: "Ti aiutiamo a trasformare il tuo immobile in B&B o casa vacanza, dalla A alla Z.",
	},
	{
		icon: Handshake,
		title: "Gestione completa",
		desc: "Se preferisci, possiamo occuparci noi direttamente della gestione operativa e degli ospiti.",
	},
	{
		icon: TrendingUp,
		title: "Valorizzazione dell'immobile",
		desc: "Massimizziamo la redditività del tuo immobile con standard di qualità elevati.",
	},
];

export function LavoraConNoi() {
	return (
		<main>
			<PageHeaderSection
				eyebrow="Proprietari"
				title="Lavora con noi"
				subtitle="Hai un immobile di proprietà a Roma e vuoi trasformarlo in B&B o casa vacanza? Contattaci!"
			/>

			<section className="py-24 bg-white">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-[#4A4A4A] text-lg leading-relaxed max-w-3xl mx-auto"
					>
						Hai un immobile di proprietà a Roma e vuoi trasformarlo in B&amp;B o
						casa vacanza? Contattaci! Possiamo aiutarti ad avviare questo tipo
						di attività o gestirla noi per te.
					</motion.p>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
						{vantaggi.map((v, i) => (
							<motion.div
								key={v.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.08 }}
								className="bg-[#F7F7F5] border border-[#1C1C1E]/10 p-8"
							>
								<div className="w-14 h-14 bg-[#C9A227]/10 flex items-center justify-center mb-5">
									<v.icon className="w-7 h-7 text-[#C9A227]" />
								</div>
								<h3 className="text-3xl font-bold text-[#1C1C1E] mb-8">
									{v.title}
								</h3>
								<p className="text-[#4A4A4A] text-sm leading-relaxed">
									{v.desc}
								</p>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-[#1C1C1E] px-8 py-16 text-center"
					>
						<h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
							Parliamo del tuo immobile
						</h2>
						<p className="text-gray-300 mb-8 max-w-xl mx-auto">
							Contattaci telefonicamente o via email: ti risponderemo con una
							proposta su misura.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-[#C9A227] hover:bg-[#E0C05A] text-[#1C1C1E] font-bold px-8"
							>
								<a href="tel:+393444324687">
									<Phone className="mr-2 w-5 h-5" />
									Chiama ora
								</a>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="text-white border-white/40 bg-transparent hover:bg-white hover:text-[#1C1C1E] px-8"
							>
								<Link to="/contatti">
									Vai al form di contatto
									<ArrowRight className="ml-2 w-5 h-5" />
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
