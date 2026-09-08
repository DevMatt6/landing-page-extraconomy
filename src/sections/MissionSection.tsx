import { motion } from "framer-motion";

const punti = [
	"Oltre 18 anni di esperienza con liberi professionisti, artigiani e PMI",
	"Team di commercialisti abilitati, aggiornati costantemente su normative e agevolazioni",
	"Approccio trasparente: preventivo chiaro, nessun costo nascosto",
	"Tecnologia cloud per la gestione documentale: accedi ai tuoi dati quando vuoi",
];

export function MissionSection() {
	return (
		<section className="py-24 bg-[#f4f3fb]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-[#4ed372] font-bold uppercase text-sm tracking-widest">
						Perché affidarsi a noi
					</span>
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#26235e] mt-4 mb-6">
						Competenza, chiarezza e un rapporto diretto che dura nel tempo
					</h2>
					<p className="text-[#5a577f] text-lg leading-relaxed mb-8">
						Non siamo uno studio anonimo: conosciamo ogni cliente per nome, conosciamo la sua storia e lavoriamo per costruire un rapporto stabile nel tempo. Il nostro obiettivo non è gestire pratiche, ma aiutarti a fare scelte fiscali migliori.
					</p>

					<ul className="space-y-4">
						{punti.map((punto, index) => (
							<motion.li
								key={punto}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								className="flex items-start gap-3 text-[#26235e]"
							>
								<span className="w-2.5 h-2.5 bg-[#4ed372] mt-2 shrink-0" />
								<span className="leading-relaxed">{punto}</span>
							</motion.li>
						))}
					</ul>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="space-y-6"
				>
					{[
						{ number: "300+", label: "Clienti seguiti ogni anno" },
						{ number: "18", label: "Anni di attività" },
						{ number: "98%", label: "Tasso di rinnovo contratti" },
					].map((stat, i) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="bg-white border border-[#26235e]/10 p-8 flex items-center gap-6"
						>
							<span className="text-5xl font-bold text-[#26235e]">{stat.number}</span>
							<span className="text-[#5a577f] text-lg leading-tight">{stat.label}</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
