import { motion } from "framer-motion";

const steps = [
	{
		number: "01",
		title: "Ingresso e comprensione immediata",
		description:
			"In questo primo passaggio la pagina deve chiarire subito cosa viene offerto e quale valore porta all'utente.",
	},
	{
		number: "02",
		title: "Approfondimento dei contenuti chiave",
		description:
			"Qui si possono spiegare processo, funzionalità, vantaggi o modalità operative con una sequenza facile da seguire.",
	},
	{
		number: "03",
		title: "Attivazione della conversione",
		description:
			"L'ultimo passaggio accompagna l'utente verso il contatto, la richiesta, la prenotazione o qualsiasi azione finale prevista.",
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
						Una sezione utile per descrivere il flusso del servizio o dell'offerta
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Questo blocco è ideale quando il cliente deve spiegare un percorso, un processo o una sequenza operativa in modo semplice e progressivo.
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
