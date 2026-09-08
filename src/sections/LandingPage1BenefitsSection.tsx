import { motion } from "framer-motion";
import { Clock3, ShieldCheck, MapPinned } from "lucide-react";

const benefits = [
	{
		title: "Nessuna scadenza persa",
		description:
			"Ti avvisiamo noi con anticipo per ogni adempimento: F24, dichiarazione dei redditi, liquidazione IVA, CU. Niente rincorse, niente sanzioni evitabili.",
		icon: Clock3,
	},
	{
		title: "Il tuo commercialista, non un call center",
		description:
			"Hai un referente dedicato che conosce la tua attività e risponde entro 24 ore. Niente sportelli, niente attese: parliamo la stessa lingua.",
		icon: ShieldCheck,
	},
	{
		title: "In studio o da remoto, come preferisci",
		description:
			"Siamo a Torino ma seguiamo clienti in tutta Italia. Documenti, firme e consulenze si gestiscono online: zero spostamenti, massima comodità.",
		icon: MapPinned,
	},
];

export function LandingPage1BenefitsSection() {
	return (
		<section className="py-24 bg-[#f6f5fd]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-3xl mx-auto text-center mb-16"
				>
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Perché sceglierci
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						Cosa cambia quando hai il commercialista giusto al tuo fianco
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Non solo adempimenti: ti aiutiamo a capire la tua situazione fiscale, a fare scelte consapevoli e a non pagare mai più del dovuto.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<motion.div
							key={benefit.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="bg-white border border-[#26235e]/10 p-8 flex flex-col gap-5"
						>
							<div className="w-12 h-12 flex items-center justify-center bg-[#26235e]">
								<benefit.icon className="w-6 h-6 text-[#4ed372]" />
							</div>
							<h3 className="text-xl font-semibold text-[#26235e]">{benefit.title}</h3>
							<p className="text-[#5a577f] leading-relaxed">{benefit.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
