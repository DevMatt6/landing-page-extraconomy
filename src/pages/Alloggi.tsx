import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BedDouble, Bath, Ruler, MapPin, ArrowRight } from "lucide-react";
import { PageHeaderSection } from "@/sections/PageHeaderSection";
import { CTABannerSection } from "@/sections/CTABannerSection";
import { Button } from "@/components/ui/button";

type Zona = "roma" | "fiumicino";

interface Struttura {
	id: string;
	nome: string;
	zonaLabel: string;
	zona: Zona;
	tipologia: "B&B" | "Intero appartamento";
	camere?: number;
	bagni?: number;
	mq?: number;
	note?: string;
	img: string;
}

const strutture: Struttura[] = [
	{
		id: "bb-prati-mazzini",
		nome: "B&B Prati Mazzini",
		zonaLabel: "Prati – zona Mazzini",
		zona: "roma",
		tipologia: "B&B",
		camere: 6,
		img: "https://placehold.co/600x400/1C1C1E/C9A227?text=B%26B+Prati+Mazzini",
	},
	{
		id: "bb-prati-risorgimento",
		nome: "B&B Prati Risorgimento",
		zonaLabel: "Prati – zona Risorgimento",
		zona: "roma",
		tipologia: "B&B",
		camere: 5,
		img: "https://placehold.co/600x400/1C1C1E/C9A227?text=B%26B+Prati+Risorgimento",
	},
	{
		id: "bb-eur-marconi",
		nome: "B&B Eur Marconi",
		zonaLabel: "Eur – zona Marconi",
		zona: "roma",
		tipologia: "B&B",
		camere: 4,
		img: "https://placehold.co/600x400/1C1C1E/C9A227?text=B%26B+Eur+Marconi",
	},
	{
		id: "app-prati-cipro-110",
		nome: "Appartamento Prati Cipro (110mq)",
		zonaLabel: "Prati – zona Cipro",
		zona: "roma",
		tipologia: "Intero appartamento",
		camere: 4,
		bagni: 4,
		mq: 110,
		note: "Cucina",
		img: "https://placehold.co/600x400/1C1C1E/C9A227?text=Appartamento+Cipro+110mq",
	},
	{
		id: "app-prati-cipro-90",
		nome: "Appartamento Prati Cipro (90mq)",
		zonaLabel: "Prati – zona Cipro",
		zona: "roma",
		tipologia: "Intero appartamento",
		camere: 3,
		bagni: 2,
		mq: 90,
		note: "Cucina, terrazzo",
		img: "https://placehold.co/600x400/1C1C1E/C9A227?text=Appartamento+Cipro+90mq",
	},
	{
		id: "bb-fiumicino-aeroporto",
		nome: "B&B Fiumicino Aeroporto",
		zonaLabel: "Aeroporto",
		zona: "fiumicino",
		tipologia: "B&B",
		camere: 8,
		img: "https://placehold.co/600x400/1C1C1E/C9A227?text=B%26B+Fiumicino+Aeroporto",
	},
	{
		id: "app-fiumicino-darsena",
		nome: "Appartamento Fiumicino Darsena",
		zonaLabel: "Darsena",
		zona: "fiumicino",
		tipologia: "Intero appartamento",
		camere: 4,
		bagni: 3,
		mq: 130,
		note: "Salone, cucina",
		img: "https://placehold.co/600x400/1C1C1E/C9A227?text=Appartamento+Fiumicino+Darsena",
	},
];

export function Alloggi() {
	const [searchParams] = useSearchParams();
	const zonaParam = searchParams.get("zona") as Zona | null;
	const [filtro, setFiltro] = useState<"tutte" | Zona>(
		zonaParam === "roma" || zonaParam === "fiumicino" ? zonaParam : "tutte"
	);

	const filtrate = useMemo(
		() => strutture.filter((s) => filtro === "tutte" || s.zona === filtro),
		[filtro]
	);

	return (
		<main>
			<PageHeaderSection
				eyebrow="I Nostri Alloggi"
				title="I nostri alloggi"
				subtitle="B&B e appartamenti vacanze a Roma e Fiumicino, pronti ad accoglierti in ogni momento"
			/>

			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Filtro zona */}
					<div className="flex flex-wrap items-center justify-center gap-3 mb-14">
						{([
							{ key: "tutte", label: "Tutte le zone" },
							{ key: "roma", label: "Roma" },
							{ key: "fiumicino", label: "Fiumicino" },
						] as const).map((opt) => (
							<button
								key={opt.key}
								onClick={() => setFiltro(opt.key)}
								className={`px-5 py-2 text-sm font-semibold transition-colors border ${
									filtro === opt.key
										? "bg-[#C9A227] text-[#1C1C1E] border-[#C9A227]"
										: "bg-white text-[#1C1C1E] border-[#1C1C1E]/20 hover:border-[#C9A227]"
								}`}
							>
								{opt.label}
							</button>
						))}
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{filtrate.map((s, i) => (
							<motion.div
								key={s.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.05 }}
								className="bg-white border border-[#1C1C1E]/10 shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col"
							>
								<img
									src={s.img}
									alt={s.nome}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6 flex flex-col flex-1">
									<span className="inline-block w-fit text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-2">
										{s.tipologia}
									</span>
									<h3 className="text-lg font-semibold text-[#1C1C1E] mb-1">
										{s.nome}
									</h3>
									<div className="flex items-center gap-1.5 text-[#4A4A4A] text-sm mb-4">
										<MapPin className="w-4 h-4 text-[#C9A227] shrink-0" />
										{s.zonaLabel}
									</div>
									<div className="flex flex-wrap gap-4 text-sm text-[#4A4A4A] mb-6">
										{s.camere && (
											<span className="flex items-center gap-1.5">
												<BedDouble className="w-4 h-4 text-[#C9A227]" />
												{s.camere} camere
											</span>
										)}
										{s.bagni && (
											<span className="flex items-center gap-1.5">
												<Bath className="w-4 h-4 text-[#C9A227]" />
												{s.bagni} bagni
											</span>
										)}
										{s.mq && (
											<span className="flex items-center gap-1.5">
												<Ruler className="w-4 h-4 text-[#C9A227]" />
												{s.mq} mq
											</span>
										)}
									</div>
									{s.note && (
										<p className="text-[#4A4A4A] text-xs mb-4">{s.note}</p>
									)}
									<Button
										asChild
										className="mt-auto bg-[#C9A227] hover:bg-[#E0C05A] text-[#1C1C1E] font-bold"
									>
										<Link to={`/contatti?struttura=${encodeURIComponent(s.nome)}`}>
											Richiedi disponibilità
											<ArrowRight className="ml-2 w-4 h-4" />
										</Link>
									</Button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<CTABannerSection />
		</main>
	);
}

export { strutture };
