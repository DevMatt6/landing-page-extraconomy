import { motion } from "framer-motion";

const results = [
	"Inserisci qui un risultato, ad esempio “Meno attività manuali e meno dispersione operativa”",
	"Maggiore chiarezza nell'organizzazione di attività, dati o processi",
	"Esperienza utente più lineare, accessibile e controllabile",
	"Percezione di modernità, efficienza e miglioramento del lavoro quotidiano",
];

export function DigitalResultsSection() {
	return (
		<section className="py-24 bg-[#f4f3fb]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Risultati e impatto
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-4 mb-6">
						Spazio per descrivere il risultato concreto generato dalla soluzione digitale
					</h2>
					<p className="text-[#5a577f] text-lg leading-relaxed mb-8">
						Questa sezione serve a tradurre funzionalità e processo in vantaggi concreti. È utile quando vuoi mostrare l'impatto della soluzione sul lavoro, sull'organizzazione o sull'efficienza percepita.
					</p>

					<ul className="space-y-4">
						{results.map((result, index) => (
							<motion.li
								key={result}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								className="flex items-start gap-3 text-[#26235e]"
							>
								<span className="w-2.5 h-2.5 bg-[#4ed372] mt-2 shrink-0" />
								<span className="leading-relaxed">{result}</span>
							</motion.li>
						))}
					</ul>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<img
						src="/img/placeholder.png"
						alt="Sezione risultati del template digitale"
						className="w-full h-auto"
					/>
				</motion.div>
			</div>
		</section>
	);
}
