import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BedDouble, KeyRound, Home as HomeIcon, MapPin } from "lucide-react";

const servizi = [
	{
		icon: BedDouble,
		title: "Servizio o prodotto principale",
		desc: "Qui si presenta uno dei pilastri dell'offerta, con un testo breve che ne chiarisce utilità e vantaggi percepiti.",
		href: "/contatti",
	},
	{
		icon: HomeIcon,
		title: "Seconda area dell'offerta",
		desc: "Questa card può descrivere una categoria complementare, una soluzione alternativa o una variante del servizio principale.",
		href: "/contatti",
	},
	{
		icon: MapPin,
		title: "Ambito applicativo o target",
		desc: "Uno spazio utile per spiegare destinazione d'uso, contesto di applicazione, settore o segmento di pubblico di riferimento.",
		href: "/contatti",
	},
	{
		icon: KeyRound,
		title: "Call to action commerciale",
		desc: "L'ultima card può essere usata per orientare verso una richiesta di contatto, consulenza, preventivo o approfondimento.",
		href: "/contatti",
	},
];

export function ServiziOverviewSection() {
	return (
		<section className="py-24 bg-[#f4f3fb]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Panoramica dell'offerta
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3">
						Una griglia utile per sintetizzare contenuti chiave della landing page
					</h2>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{servizi.map((s, i) => (
						<motion.div
							key={s.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.06 }}
						>
							<Link
								to={s.href}
								className="block bg-white border border-[#26235e]/10 p-8 hover:shadow-card-hover hover:border-[#4ed372]/40 transition-all h-full"
							>
								<div className="w-14 h-14 bg-[#4ed372]/10 flex items-center justify-center mb-5">
									<s.icon className="w-7 h-7 text-[#4ed372]" />
								</div>
								<h3 className="text-3xl font-bold text-[#26235e] mb-8">
									{s.title}
								</h3>
								<p className="text-[#5a577f] text-sm leading-relaxed">
									{s.desc}
								</p>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
