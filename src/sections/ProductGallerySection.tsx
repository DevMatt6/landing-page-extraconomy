import { motion } from "framer-motion";

const galleryItems = [
	{
		src: "/img/placeholder.png",
		title: "Visual principale del prodotto",
		description:
			"Questo spazio può mostrare il prodotto nel suo contesto migliore, oppure una visual capace di raccontarne subito qualità, stile o funzione.",
	},
	{
		src: "/img/placeholder.png",
		title: "Dettaglio o punto di forza",
		description:
			"Qui si può inserire un'immagine utile a valorizzare un dettaglio, una caratteristica distintiva o un elemento che aumenta il valore percepito.",
	},
	{
		src: "/img/placeholder.png",
		title: "Utilizzo, esperienza o scenario",
		description:
			"Questa card serve a far immaginare meglio come il prodotto viene usato, percepito o inserito nel contesto reale del cliente.",
	},
];

export function ProductGallerySection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Gallery prodotto
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-3 mb-5">
						Una sezione visuale per rendere il prodotto più concreto e desiderabile
					</h2>
					<p className="text-[#5a577f] leading-relaxed">
						Questa gallery aiuta a mostrare il prodotto da più punti di vista, aumentando chiarezza, coinvolgimento e percezione del valore senza appesantire la pagina.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{galleryItems.map((item, index) => (
						<motion.article
							key={`${item.title}-${index}`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							className="border border-[#26235e]/10 bg-[#f6f5fd] overflow-hidden"
						>
							<img
								src={item.src}
								alt={item.title}
								className="w-full h-72 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-[#26235e] mb-3">
									{item.title}
								</h3>
								<p className="text-[#5a577f] leading-relaxed text-sm">
									{item.description}
								</p>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
