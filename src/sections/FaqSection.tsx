import { motion } from "framer-motion";

const faqs = [
	{
		question: "Qual è il ruolo di questa sezione?",
		answer:
			"Serve a raccogliere le domande più frequenti e a ridurre dubbi o obiezioni prima della call to action finale.",
	},
	{
		question: "Quando conviene usarla in una landing page?",
		answer:
			"È particolarmente utile quando l'utente ha bisogno di rassicurazioni, chiarimenti o informazioni pratiche prima di contattare o acquistare.",
	},
	{
		question: "Che tipo di contenuti può ospitare?",
		answer:
			"Può contenere risposte su modalità operative, tempi, costi, personalizzazioni, accesso al servizio, processo di lavoro o requisiti.",
	},
	];

export function FaqSection() {
	return (
		<section className="py-24 bg-[#f4f3fb]">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						FAQ
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						Domande frequenti per supportare la conversione
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Questa sezione aiuta a sciogliere i dubbi più comuni e a rendere più semplice il passaggio all'azione finale.
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
