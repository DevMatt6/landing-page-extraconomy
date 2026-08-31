import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, Layers3, Users, ShoppingBag } from "lucide-react";

const items = [
	{
		icon: Package,
		title: "Titolo, ad esempio “Prodotto bestseller”",
		desc: "Inserisci qui il testo card 1, ad esempio “Descrizione del prodotto principale con funzione e utilità”.",
		href: "/contatti",
	},
	{
		icon: Layers3,
		title: "Titolo, ad esempio “Kit completo oppure Variante premium”",
		desc: "Inserisci qui il testo card 2, ad esempio “Descrizione di una versione alternativa o di un bundle collegato”.",
		href: "/contatti",
	},
	{
		icon: Users,
		title: "Titolo, ad esempio “A chi è adatto”",
		desc: "Inserisci qui il testo card 3, ad esempio “Descrizione del target ideale o del contesto d’uso”.",
		href: "/contatti",
	},
	{
		icon: ShoppingBag,
		title: "Titolo, ad esempio “Richiedi informazioni o Acquista ora”",
		desc: "Inserisci qui il testo card 4, ad esempio “Breve invito all’azione con motivazione concreta”.",
		href: "/contatti",
	},
];

export function ProductOfferGridSection() {
	return (
		<section className="py-24 bg-[#f4f3fb]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Label, ad esempio “Cosa comprende l’offerta”
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3">
						Titolo, ad esempio “I quattro elementi da presentare nella scheda prodotto”
					</h2>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{items.map((item, i) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.06 }}
						>
							<Link
								to={item.href}
								className="block bg-white border border-[#26235e]/10 p-8 hover:shadow-card-hover hover:border-[#4ed372]/40 transition-all h-full"
							>
								<div className="w-14 h-14 bg-[#4ed372]/10 flex items-center justify-center mb-5">
									<item.icon className="w-7 h-7 text-[#4ed372]" />
								</div>
								<h3 className="text-xl sm:text-2xl font-bold text-[#26235e] mb-6">
									{item.title}
								</h3>
								<p className="text-[#5a577f] text-sm leading-relaxed">
									{item.desc}
								</p>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
