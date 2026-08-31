import { motion } from "framer-motion";

const points = [
	"Elemento di qualità che rafforza la percezione del prodotto",
	"Aspetto utile per ridurre dubbi prima dell'acquisto o della richiesta",
	"Indicazione che differenzia l'offerta rispetto ad alternative simili",
	"Rassicurazione finale utile a spingere verso la CTA commerciale",
];

export function ProductTrustSection() {
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
						Label, ad esempio “Perché fidarsi del prodotto”
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-4 mb-6">
						Argomenti utili per rafforzare valore percepito e intenzione d'acquisto
					</h2>
					<p className="text-[#5a577f] text-lg leading-relaxed mb-8">
						Questa sezione è pensata per consolidare la fiducia nell'offerta prima del passaggio finale. Qui possono trovare spazio qualità, standard, vantaggi competitivi, assistenza, composizione del prodotto o qualsiasi elemento capace di ridurre l'incertezza.
					</p>

					<ul className="space-y-4">
						{points.map((point, index) => (
							<motion.li
								key={point}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								className="flex items-start gap-3 text-[#26235e]"
							>
								<span className="w-2.5 h-2.5 bg-[#4ed372] mt-2 shrink-0" />
								<span className="leading-relaxed">{point}</span>
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
						alt="Sezione trust del template prodotto"
						className="w-full h-auto"
					/>
				</motion.div>
			</div>
		</section>
	);
}
