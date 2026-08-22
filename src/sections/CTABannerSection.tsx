import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTABannerSection() {
	return (
		<section>
			<div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="relative overflow-hidden bg-[#1C1C1E] px-8 sm:px-20 py-24 sm:py-32 text-center"
					style={{
						backgroundImage: "url('/img/cta.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "top",
					}}
				>
					<div className="absolute inset-0 bg-[#1C1C1E]/60" />
					<div className="relative">
						<h2 className="text-4xl sm:text-4xl font-semibold text-white mb-4 max-w-xl mx-auto">
							Prenota il tuo soggiorno
						</h2>
						<p className="text-gray-300 mb-8 max-w-2xl mx-auto">
							Contattaci per verificare la disponibilità dei nostri alloggi a
							Roma e Fiumicino. Il nostro team è pronto ad accoglierti e a
							consigliarti la soluzione migliore per il tuo soggiorno.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-[#C9A227] hover:bg-[#E0C05A] text-[#1C1C1E] font-bold px-8 shadow-lg"
						>
							<Link to="/contatti">
								Contattaci
								<ArrowRight className="ml-2 w-5 h-5" />
							</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
