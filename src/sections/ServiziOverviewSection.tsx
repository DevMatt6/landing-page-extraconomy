import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BedDouble, KeyRound, Home as HomeIcon, MapPin } from "lucide-react";

const servizi = [
	{
		icon: BedDouble,
		title: "B&B a Roma",
		desc: "Camere doppie accoglienti nelle zone Prati e Eur, curate nei minimi dettagli.",
		href: "/alloggi?zona=roma",
	},
	{
		icon: HomeIcon,
		title: "Appartamenti Vacanze",
		desc: "Interi appartamenti spaziosi, ideali per famiglie o gruppi in visita a Roma.",
		href: "/alloggi?zona=roma",
	},
	{
		icon: MapPin,
		icon2: true,
		title: "Alloggi a Fiumicino",
		desc: "Soluzioni comode vicino all'aeroporto, perfette per scali e transiti.",
		href: "/alloggi?zona=fiumicino",
	},
	{
		icon: KeyRound,
		title: "Lavora con Noi",
		desc: "Hai un immobile a Roma? Trasformalo in B&B o casa vacanza con noi.",
		href: "/lavora-con-noi",
	},
];

export function ServiziOverviewSection() {
	return (
		<section className="py-24 bg-[#F7F7F5]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#C9A227] font-bold uppercase text-sm tracking-widest">
						I Nostri Alloggi
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#1C1C1E] mt-3">
						Soluzioni di soggiorno per ogni esigenza
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
								className="block bg-white border border-[#1C1C1E]/10 p-8 shadow-card hover:shadow-card-hover hover:border-[#C9A227]/40 transition-all h-full"
							>
								<div className="w-14 h-14 bg-[#C9A227]/10 flex items-center justify-center mb-5">
									<s.icon className="w-7 h-7 text-[#C9A227]" />
								</div>
								<h3 className="text-3xl font-bold text-[#1C1C1E] mb-8">
									{s.title}
								</h3>
								<p className="text-[#4A4A4A] text-sm leading-relaxed">
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
