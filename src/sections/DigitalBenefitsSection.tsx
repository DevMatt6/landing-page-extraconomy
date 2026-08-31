import { motion } from "framer-motion";
import { Gauge, Workflow, Layers3 } from "lucide-react";

const benefits = [
	{
		title: "Titolo, ad esempio “Più velocità nella gestione quotidiana”",
		description:
			"Inserisci qui il testo del beneficio 1, ad esempio “Questo testo descrive il miglioramento operativo generato dal software”.",
		icon: Gauge,
	},
	{
		title: "Titolo, ad esempio “Processo più ordinato e leggibile”",
		description:
			"Inserisci qui il testo del beneficio 2, ad esempio “Questo testo spiega come il flusso diventa più semplice per utente o team”.",
		icon: Workflow,
	},
	{
		title: "Titolo, ad esempio “Struttura modulare e scalabile”",
		description:
			"Inserisci qui il testo del beneficio 3, ad esempio “Questo testo racconta moduli, funzioni o possibilità di estensione”.",
		icon: Layers3,
	},
];

export function DigitalBenefitsSection() {
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
						Label, ad esempio “Vantaggi della soluzione”
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						Titolo, ad esempio “Tre vantaggi da spiegare in questa landing”
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Inserisci qui il testo introduttivo, ad esempio “Questo blocco riassume i vantaggi più importanti della soluzione digitale”.
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
