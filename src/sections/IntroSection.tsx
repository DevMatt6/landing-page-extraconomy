import { motion } from "framer-motion";

export function IntroSection() {
	return (
		<section id="servizi" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Cosa facciamo
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-4 mb-6">
						Un supporto completo dalla contabilità quotidiana alla pianificazione fiscale
					</h2>
					<p className="text-[#5a577f] text-lg leading-relaxed mb-6">
						Che tu sia un freelance alle prime armi o una PMI strutturata, ti offriamo un servizio su misura: gestiamo la tua contabilità, ti teniamo aggiornato su ogni novità fiscale e ti aiutiamo a ottimizzare il carico tributario in modo legale e trasparente.
					</p>
					<p className="text-[#5a577f] text-lg leading-relaxed">
						Il nostro approccio è proattivo: non aspettiamo che tu ci chieda — siamo noi a tenerti informato, a segnalarti opportunità e a intervenire prima che i problemi diventino costosi.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="grid sm:grid-cols-2 gap-5"
				>
					{[
						{ label: "Contabilità ordinaria e semplificata" },
						{ label: "Dichiarazioni fiscali (730, Redditi PF, Redditi SC)" },
						{ label: "Apertura e chiusura Partita IVA" },
						{ label: "Gestione cedolini e buste paga" },
						{ label: "Consulenza su regime forfettario" },
						{ label: "Visure, bilanci e pratiche camerali" },
					].map((item, i) => (
						<motion.div
							key={item.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.07 }}
							className="flex items-start gap-3 bg-[#f6f5fd] border border-[#26235e]/10 p-5"
						>
							<span className="w-2.5 h-2.5 bg-[#4ed372] mt-1.5 shrink-0" />
							<span className="text-[#26235e] font-medium text-sm leading-relaxed">{item.label}</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
