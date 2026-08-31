import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ProductCtaSection() {
	return (
		<section className="py-24 bg-[#26235e]">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Call to action prodotto
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-4 mb-6">
						Qui si chiude la pagina con una spinta commerciale chiara e diretta
					</h2>
					<p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
						Questo blocco finale serve a trasformare l'interesse maturato nella pagina in una richiesta concreta, in un acquisto, in una demo o in qualsiasi altra azione commerciale coerente con il prodotto.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button
							asChild
							size="lg"
							className="bg-[#4ed372] hover:bg-[#66de88] text-[#26235e] font-bold px-8 transition-all hover:scale-105"
						>
							<Link to="#">Azione commerciale primaria</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="text-white border-white/40 bg-transparent hover:bg-white hover:text-[#26235e] px-8 transition-all"
						>
							<Link to="#">Approfondimento secondario</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
