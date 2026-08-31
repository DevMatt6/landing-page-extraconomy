import { motion } from "framer-motion";
import { Clock3, ShieldCheck, MapPinned } from "lucide-react";

const benefits = [
	{
		title: "Benefit o vantaggio competitivo",
		description:
			"Qui si inserisce un punto di forza distintivo che aiuta il cliente a differenziarsi e a rendere più chiara la promessa principale.",
		icon: MapPinned,
	},
	{
		title: "Elemento di fiducia",
		description:
			"Questa card serve a rafforzare credibilità, affidabilità, metodo di lavoro o qualità percepita del servizio/prodotto presentato.",
		icon: ShieldCheck,
	},
	{
		title: "Leva orientata all'azione",
		description:
			"Questo spazio può essere usato per evidenziare facilità, velocità, accessibilità o qualsiasi incentivo utile a favorire il contatto.",
		icon: Clock3,
	},
];

export function LandingPage1BenefitsSection() {
	return (
		<section className="py-24 bg-[#f6f5fd]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-3xl mx-auto text-center mb-14"
				>
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Sezione benefici
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						Tre motivi forti per continuare la lettura della landing page
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Questa sezione serve a sintetizzare i vantaggi principali in modo rapido e immediatamente leggibile. È utile per catturare attenzione, ridurre l'attrito e dare subito struttura all'offerta.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon;

						return (
							<motion.div
								key={benefit.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-white p-8 border border-[#26235e]/5"
							>
								<div className="w-14 h-14 bg-[#4ed372]/10 flex items-center justify-center mb-5">
									<Icon className="w-7 h-7 text-[#4ed372]" />
								</div>
								<h3 className="text-xl font-semibold text-[#26235e] mb-3">
									{benefit.title}
								</h3>
								<p className="text-[#5a577f] leading-relaxed">
									{benefit.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
