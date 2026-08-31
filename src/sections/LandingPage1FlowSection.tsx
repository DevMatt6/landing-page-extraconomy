import { motion } from "framer-motion";

const steps = [
	{
		number: "01",
		title: "Presentazione chiara dell'offerta",
		description:
			"All'inizio della pagina si introduce il messaggio principale: cosa offre il cliente, a chi si rivolge e perché dovrebbe interessare subito.",
	},
	{
		number: "02",
		title: "Argomentazione e rinforzo",
		description:
			"Nella parte centrale si distribuiscono contenuti che approfondiscono vantaggi, metodo, credibilità, servizio e differenziazione.",
	},
	{
		number: "03",
		title: "Spinta alla conversione",
		description:
			"Nella parte finale si inseriscono call to action, rassicurazioni, contatti o micro-sezioni che aiutano l'utente a compiere il passo successivo.",
	},
];

export function LandingPage1FlowSection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-14 items-start">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
							Logica della landing page
						</span>
						<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-6">
							Una struttura pensata per spiegare, convincere e portare al contatto
						</h2>
						<p className="text-[#5a577f] leading-relaxed">
							Questa sezione descrive la funzione narrativa della pagina. Serve anche come promemoria progettuale per adattare il template a clienti con obiettivi, mercati e offerte differenti.
						</p>
					</motion.div>

					<div className="space-y-6">
						{steps.map((step, index) => (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="border border-[#26235e]/10 p-6 bg-[#f6f5fd]"
							>
								<div className="text-[#4ed372] font-bold text-sm tracking-[0.3em] mb-2">
									{step.number}
								</div>
								<h3 className="text-xl font-semibold text-[#26235e] mb-2">
									{step.title}
								</h3>
								<p className="text-[#5a577f] leading-relaxed">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
