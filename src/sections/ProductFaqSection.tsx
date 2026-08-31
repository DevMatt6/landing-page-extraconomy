import { motion } from "framer-motion";

const faqs = [
	{
		question: "Qual è il ruolo di questa FAQ in una landing prodotto?",
		answer:
			"Serve a rispondere ai dubbi più comuni prima della conversione e a chiarire aspetti pratici o commerciali dell'offerta.",
	},
	{
		question: "Che tipo di domande conviene inserire?",
		answer:
			"Sono particolarmente utili domande su utilizzo, tempi, acquisto, consegna, personalizzazione, accesso, disponibilità o modalità di richiesta.",
	},
	{
		question: "Dove va posizionata all'interno della pagina?",
		answer:
			"Funziona molto bene nella parte finale della landing, subito prima dell'ultima call to action, perché aiuta a ridurre l'incertezza residua.",
	},
];

export function ProductFaqSection() {
	return (
		<section className="py-24 bg-[#f4f3fb]">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						FAQ prodotto
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						Label, ad esempio “FAQ prodotto per accompagnare la decisione d'acquisto o di richiesta”
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Questa sezione aiuta a sciogliere le ultime obiezioni e a rendere il passaggio alla call to action più naturale e convincente.
					</p>
				</div>

				<div className="space-y-5">
					{faqs.map((faq, index) => (
						<motion.div
							key={faq.question}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							className="bg-white border border-[#26235e]/10 p-6"
						>
							<h3 className="text-xl font-semibold text-[#26235e] mb-3">
								{faq.question}
							</h3>
							<p className="text-[#5a577f] leading-relaxed">{faq.answer}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
