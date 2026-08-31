import { motion } from "framer-motion";

const modules = [
	{
		title: "Titolo, ad esempio “Dashboard centrale”",
		description:
			"Inserisci qui il testo modulo 1, ad esempio “Descrizione della funzione principale e della sua utilità”.",
	},
	{
		title: "Titolo, ad esempio “Automazioni attività”",
		description:
			"Inserisci qui il testo modulo 2, ad esempio “Descrizione dell’automazione o del vantaggio operativo”.",
	},
	{
		title: "Titolo, ad esempio “Monitoraggio e report”",
		description:
			"Inserisci qui il testo modulo 3, ad esempio “Descrizione del controllo dati, delle statistiche o della gestione”.",
	},
	{
		title: "Titolo, ad esempio “Integrazioni con altri strumenti”",
		description:
			"Inserisci qui il testo modulo 4, ad esempio “Descrizione di integrazioni con CRM, email, pagamenti o altri software”.",
	},
];

export function DigitalModulesSection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Label, ad esempio “Funzioni della piattaforma”
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						Titolo, ad esempio “Le aree che compongono la soluzione digitale”
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Inserisci qui il testo introduttivo, ad esempio “Questo blocco descrive le funzioni o i moduli principali del servizio digitale”.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{modules.map((module, index) => (
						<motion.div
							key={module.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							className="bg-[#f4f3fb] border border-[#26235e]/10 p-8"
						>
							<h3 className="text-2xl font-semibold text-[#26235e] mb-4">
								{module.title}
							</h3>
							<p className="text-[#5a577f] leading-relaxed">
								{module.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
