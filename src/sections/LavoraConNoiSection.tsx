import { Link } from "react-router-dom";
import { ArrowRight, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function LavoraConNoiSection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-[#f4f3fb] border border-[#4ed372]/30 p-10 sm:p-14 text-center"
				>
					<div className="w-14 h-14 bg-[#4ed372]/10 flex items-center justify-center mx-auto mb-6">
						<Key className="w-7 h-7 text-[#4ed372]" />
					</div>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mb-4">
						Lavora con noi
					</h2>
					<p className="text-[#5a577f] max-w-2xl mx-auto mb-8 leading-relaxed">
						Hai un immobile di proprietà a Roma e vuoi trasformarlo in B&amp;B o
						casa vacanza? Contattaci! Possiamo aiutarti ad avviare questo tipo
						di attività o gestirla noi per te.
					</p>
					<Button
						asChild
						size="lg"
						className="bg-[#4ed372] hover:bg-[#66de88] text-[#26235e] font-bold px-8"
					>
						<Link to="#">
							Scopri di più
							<ArrowRight className="ml-2 w-5 h-5" />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
