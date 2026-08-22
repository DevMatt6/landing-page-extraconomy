import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function IntroSection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-14 items-center">
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
						<span className="text-[#C9A227] font-bold uppercase text-sm tracking-widest">
							Chi Siamo
						</span>
						<h2 className="text-3xl sm:text-4xl font-semibold text-[#1C1C1E] mt-3 mb-6">
							Gestione di alloggi turistici a Roma e Fiumicino
						</h2>
						<p className="text-[#4A4A4A] leading-relaxed mb-4">
							Ervin Stay è un punto di riferimento per chi cerca soluzioni di
							soggiorno affidabili a Roma e Fiumicino. Curiamo ogni immobile con
							attenzione, garantendo pulizia, gestione impeccabile e
							disponibilità costante per accogliere i nostri ospiti in ogni
							momento.
						</p>
						<Link
							to="/chi-siamo"
							className="inline-block mt-2 text-[#C9A227] font-semibold text-sm hover:text-[#A8841C] transition-colors"
						>
							Scopri di più su di noi →
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
