import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeadContactSection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2  items-stretch">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-[#26235e] p-10 text-white flex flex-col justify-center"
					>
						<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
							Contatto lead-oriented
						</span>
						<h2 className="text-3xl sm:text-4xl font-semibold mt-4 mb-6">
							Una sezione pensata per raccogliere interesse e facilitare il
							contatto
						</h2>
						<p className="text-gray-300 leading-relaxed mb-8">
							Questo blocco può sostituire o affiancare la call to action finale
							quando la landing ha come obiettivo principale la generazione di
							lead, la richiesta di informazioni o la prenotazione di una call.
						</p>
						<div className="space-y-4 text-gray-200">
							<div className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-[#4ed372]" />
								<span>Spazio per email, form o contatto diretto</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-[#4ed372]" />
								<span>
									Spazio per telefono, calendario o canale preferenziale
								</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="bg-[#f4f3fb] border border-[#26235e]/10 p-10 flex flex-col justify-center"
					>
						<h3 className="text-2xl font-semibold text-[#26235e] mb-4">
							Qui può andare un form, un riepilogo contatto o una
							micro-conversione
						</h3>
						<p className="text-[#5a577f] leading-relaxed mb-8">
							La sezione può ospitare campi, pulsanti, link a calendario,
							messaggi rassicuranti o istruzioni rapide per aumentare il tasso
							di risposta.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-[#4ed372] hover:bg-[#66de88] text-[#26235e] font-bold px-8 transition-all hover:scale-105 w-fit"
						>
							<Link to="#">
								Vai al contatto
								<ArrowRight className="ml-2 w-5 h-5" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
