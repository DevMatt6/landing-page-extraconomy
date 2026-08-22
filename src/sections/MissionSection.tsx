import { motion } from "framer-motion";

const punti = [
	"Immobili puliti e costantemente monitorati",
	"Gestione affidabile e attenta di ogni struttura",
	"Soluzioni per ogni esigenza: B&B e interi appartamenti",
	"Assistenza diretta e disponibilità per gli ospiti",
];

export function MissionSection() {
	return (
		<section className="py-24 bg-[#F7F7F5]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-[#C9A227] font-bold uppercase text-sm tracking-widest">
						Perché Scegliere Ervin Stay
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#1C1C1E] mt-4 mb-6">
						Pulizia, gestione e affidabilità
					</h2>
					<p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
						Scegliere Ervin Stay significa affidarsi a immobili ben gestiti,
						puliti e pronti ad accoglierti in ogni momento. Ogni struttura è
						costantemente monitorata e mantenuta secondo i più alti standard
						di qualità, per garantirti comfort e tranquillità durante il tuo
						soggiorno.
					</p>
					<ul className="space-y-3">
						{punti.map((p) => (
							<li key={p} className="flex items-start gap-3 text-[#1C1C1E]/80">
								<span className="w-1.5 h-1.5 mt-2 bg-[#C9A227] shrink-0" />
								<span>{p}</span>
							</li>
						))}
					</ul>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<img
						src="/img/professionisti.jpg"
						alt="Perché scegliere Ervin Stay"
						className="w-full h-full object-cover shadow-xl"
					/>
				</motion.div>
			</div>
		</section>
	);
}
