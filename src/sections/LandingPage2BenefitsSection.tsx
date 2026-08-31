import { motion } from "framer-motion";

const benefits = [
	{
		title: "Titolo, ad esempio “Pelle più luminosa fin dalle prime applicazioni”",
		description:
			"Inserisci qui la descrizione del beneficio 1, ad esempio “Questo testo spiega il risultato più immediato e percepibile del prodotto”.",
		image: "/img/placeholder.png",
	},
	{
		title: "Titolo, ad esempio “Formula testata e ingredienti selezionati”",
		description:
			"Inserisci qui la descrizione del beneficio 2, ad esempio “Questo testo serve a valorizzare qualità, materiali, certificazioni o lavorazione”.",
		image: "/img/placeholder.png",
	},
	{
		title: "Titolo, ad esempio “Facile da usare e da integrare nella routine”",
		description:
			"Inserisci qui la descrizione del beneficio 3, ad esempio “Questo testo chiarisce semplicità d’uso, modalità di acquisto o praticità quotidiana”.",
		image: "/img/placeholder.png",
	},
];

export function LandingPage2BenefitsSection() {
	return (
		<section className="py-24 bg-[#f6f5fd]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Label, ad esempio “Cosa ottieni con il prodotto”
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						Titolo, ad esempio “Tre motivi per scegliere questo prodotto”
					</h2>
					<p className="text-[#5a577f] leading-relaxed max-w-2xl mx-auto">
						Inserisci qui il testo introduttivo, ad esempio “Ogni riga mostra un beneficio concreto con visuale dedicata e spiegazione sintetica”.
					</p>
				</div>

				<div className="space-y-14 lg:space-y-16">
					{benefits.map((benefit, index) => {
						const reversed = index % 2 === 1;

						return (
							<motion.article
								key={benefit.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.55, delay: index * 0.06 }}
								className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-center"
							>
								<div className={reversed ? "lg:col-span-6 lg:col-start-7 lg:order-2" : "lg:col-span-6 lg:order-1"}>
									<div className="max-w-xl">
										<span className="inline-block text-[#4ed372] text-sm font-semibold uppercase tracking-[0.14em] mb-4">
											Elemento {index + 1}
										</span>
										<h3 className="text-2xl sm:text-3xl font-semibold text-[#26235e] mb-4">
											{benefit.title}
										</h3>
										<p className="text-[#5a577f] leading-relaxed text-lg">
											{benefit.description}
										</p>
									</div>
								</div>

								<div className={reversed ? "lg:col-span-5 lg:col-start-1 lg:order-1" : "lg:col-span-5 lg:col-start-8 lg:order-2"}>
									<div className="overflow-hidden border border-[#26235e]/10 bg-white">
										<img
											src={benefit.image}
											alt={benefit.title}
											className="w-full h-[280px] sm:h-[340px] lg:h-[340px] object-cover"
										/>
									</div>
								</div>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
