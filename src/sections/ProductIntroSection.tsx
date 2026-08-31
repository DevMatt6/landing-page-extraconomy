import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function ProductIntroSection() {
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
							src="/img/placeholder.png"
							alt="Sezione introduttiva del template prodotto"
							className="shadow-xl w-full h-auto"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
							Introduzione prodotto
						</span>
						<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-6">
							Spazio per raccontare cosa rende l'offerta interessante e rilevante
						</h2>
						<p className="text-[#5a577f] leading-relaxed mb-4">
							Questa sezione serve a sviluppare meglio il racconto del prodotto dopo la hero. Qui si può spiegare il contesto, la logica dell'offerta, il bisogno che intercetta e il motivo per cui rappresenta una soluzione valida o desiderabile.
						</p>
						<Link
							to="#"
							className="inline-block mt-2 text-[#4ed372] font-semibold text-sm hover:text-[#A8841C] transition-colors"
						>
							Approfondisci l'offerta →
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
