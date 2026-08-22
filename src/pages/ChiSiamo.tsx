import { PageHeaderSection } from "@/sections/PageHeaderSection";
import { CTABannerSection } from "@/sections/CTABannerSection";
import { motion } from "framer-motion";
import { Sparkles, ClipboardCheck, ShieldCheck, Clock } from "lucide-react";

const valori = [
	{
		icon: Sparkles,
		title: "Pulizia",
		desc: "Ogni struttura viene mantenuta secondo i più alti standard di pulizia e cura.",
	},
	{
		icon: ClipboardCheck,
		title: "Gestione",
		desc: "Monitoriamo costantemente ogni immobile per garantire il massimo comfort agli ospiti.",
	},
	{
		icon: ShieldCheck,
		title: "Affidabilità",
		desc: "Un punto di riferimento sicuro per chi cerca un soggiorno senza pensieri.",
	},
	{
		icon: Clock,
		title: "Disponibilità",
		desc: "Assistenza diretta e pronta risposta per ogni esigenza durante il soggiorno.",
	},
];

export function ChiSiamo() {
	return (
		<main>
			<PageHeaderSection
				eyebrow="Chi Siamo"
				title="Chi siamo"
				subtitle="Gestione di alloggi turistici a Roma e Fiumicino, con attenzione a pulizia e affidabilità"
			/>

			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<img
								src="/img/chisiamo.jpg"
								alt="Ervin Stay"
								className="shadow-xl w-full h-auto"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl font-semibold text-[#1C1C1E] mb-6">
								La nostra missione
							</h2>
							<p className="text-[#4A4A4A] leading-relaxed mb-4">
								Ervin Stay è un punto di riferimento per chi cerca alloggi
								turistici affidabili a Roma e Fiumicino. Gestiamo B&amp;B e
								appartamenti vacanze, offrendo una vasta gamma di soluzioni, da
								camere doppie accoglienti a spaziosi appartamenti per famiglie
								o gruppi.
							</p>
							<h3 className="text-xl font-semibold text-[#1C1C1E] mt-6 mb-3">
								Il nostro approccio
							</h3>
							<p className="text-[#4A4A4A] leading-relaxed">
								Ogni immobile è costantemente monitorato e mantenuto secondo i
								più alti standard di qualità, per garantire comfort e
								tranquillità durante il soggiorno. Il nostro team è sempre a
								disposizione per rispondere a ogni esigenza, dalla prenotazione
								alla gestione dell'immobile stesso.
							</p>
						</motion.div>
					</div>

					<h3 className="text-2xl font-semibold text-[#1C1C1E] mb-8 text-center">
						I nostri valori
					</h3>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{valori.map((v, i) => (
							<motion.div
								key={v.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.08 }}
								className="bg-[#F7F7F5] border border-[#1C1C1E]/10 p-8"
							>
								<div className="w-16 h-16 bg-[#C9A227]/10 flex items-center justify-center mb-5">
									<v.icon className="w-8 h-8 text-[#C9A227]" />
								</div>
								<h3 className="text-2xl font-semibold text-[#C9A227] mb-2">
									{v.title}
								</h3>
								<p className="text-[#4A4A4A] text-sm leading-relaxed">
									{v.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<CTABannerSection />
		</main>
	);
}
