import { motion } from "framer-motion";

const steps = [
	{
		number: "01",
		title: "Consulenza iniziale gratuita",
		description:
			"Ci racconti la tua situazione: attività, regime fiscale, esigenze. In 30 minuti capiamo insieme di cosa hai bisogno e ti proponiamo la soluzione più adatta, senza impegno.",
	},
	{
		number: "02",
		title: "Attivazione e passaggio documenti",
		description:
			"Ti guidiamo passo passo nel trasferimento da un eventuale precedente studio o nell'apertura da zero. Tutto online: invii i documenti via cloud, noi pensiamo al resto.",
	},
	{
		number: "03",
		title: "Gestione continua e aggiornamento costante",
		description:
			"Seguiamo la tua contabilità ogni mese, ti avvisiamo di ogni scadenza e ti teniamo aggiornato sulle novità fiscali che ti riguardano. Tu ti concentri sul lavoro, noi sui numeri.",
	},
];

export function HowItWorksSection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Come funziona
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						In tre passaggi, la tua contabilità è sotto controllo
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Abbiamo semplificato al massimo l'accesso al nostro servizio: niente burocrazia iniziale, niente attese inutili. Parti in pochi giorni.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<motion.div
							key={step.number}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="bg-[#f4f3fb] border border-[#26235e]/10 p-8"
						>
							<div className="text-[#4ed372] font-bold text-sm tracking-[0.3em] mb-3">
								{step.number}
							</div>
							<h3 className="text-2xl font-semibold text-[#26235e] mb-4">
								{step.title}
							</h3>
							<p className="text-[#5a577f] leading-relaxed">
								{step.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
