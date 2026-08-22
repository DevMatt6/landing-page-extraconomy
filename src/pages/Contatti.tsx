import { PageHeaderSection } from "@/sections/PageHeaderSection";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";
import { strutture } from "@/pages/Alloggi";

export function Contatti() {
	const [searchParams] = useSearchParams();
	const strutturaParam = searchParams.get("struttura") ?? undefined;

	return (
		<main>
			<PageHeaderSection
				eyebrow="Contatti"
				title="Prenota il tuo soggiorno"
				subtitle="Il nostro team è a disposizione per verificare la disponibilità e proporti la soluzione migliore."
			/>

			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-14">
						{/* Form */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="bg-[#F7F7F5] border border-[#1C1C1E]/10 p-8"
						>
							<h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">
								Richiedi disponibilità
							</h2>
							<form className="flex flex-col gap-5">
								<div>
									<Label htmlFor="nome" className="text-[#1C1C1E] mb-1.5 block">
										Nome e Cognome
									</Label>
									<Input
										id="nome"
										placeholder="Il tuo nome"
										className="bg-white border-[#1C1C1E]/20 text-[#1C1C1E] placeholder:text-gray-400"
									/>
								</div>
								<div>
									<Label htmlFor="email" className="text-[#1C1C1E] mb-1.5 block">
										Email
									</Label>
									<Input
										id="email"
										type="email"
										placeholder="nome@esempio.it"
										className="bg-white border-[#1C1C1E]/20 text-[#1C1C1E] placeholder:text-gray-400"
									/>
								</div>
								<div>
									<Label htmlFor="telefono" className="text-[#1C1C1E] mb-1.5 block">
										Telefono
									</Label>
									<Input
										id="telefono"
										placeholder="Il tuo numero"
										className="bg-white border-[#1C1C1E]/20 text-[#1C1C1E] placeholder:text-gray-400"
									/>
								</div>
								<div>
									<Label htmlFor="struttura" className="text-[#1C1C1E] mb-1.5 block">
										Struttura di interesse
									</Label>
									<Select defaultValue={strutturaParam}>
										<SelectTrigger id="struttura" className="w-full bg-white border-[#1C1C1E]/20 text-[#1C1C1E]">
											<SelectValue placeholder="Seleziona una struttura" />
										</SelectTrigger>
										<SelectContent>
											{strutture.map((s) => (
												<SelectItem key={s.id} value={s.nome}>
													{s.nome}
												</SelectItem>
											))}
											<SelectItem value="non-so">Non so ancora / vorrei un consiglio</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<Label htmlFor="checkin" className="text-[#1C1C1E] mb-1.5 block">
											Check-in
										</Label>
										<Input
											id="checkin"
											type="date"
											className="bg-white border-[#1C1C1E]/20 text-[#1C1C1E]"
										/>
									</div>
									<div>
										<Label htmlFor="checkout" className="text-[#1C1C1E] mb-1.5 block">
											Check-out
										</Label>
										<Input
											id="checkout"
											type="date"
											className="bg-white border-[#1C1C1E]/20 text-[#1C1C1E]"
										/>
									</div>
								</div>
								<div>
									<Label htmlFor="ospiti" className="text-[#1C1C1E] mb-1.5 block">
										Numero ospiti
									</Label>
									<Input
										id="ospiti"
										type="number"
										min={1}
										placeholder="Es. 2"
										className="bg-white border-[#1C1C1E]/20 text-[#1C1C1E] placeholder:text-gray-400"
									/>
								</div>
								<div>
									<Label htmlFor="messaggio" className="text-[#1C1C1E] mb-1.5 block">
										Messaggio / Note
									</Label>
									<Textarea
										id="messaggio"
										placeholder="Descrivi la tua richiesta"
										className="bg-white border-[#1C1C1E]/20 text-[#1C1C1E] placeholder:text-gray-400 min-h-32"
									/>
								</div>
								<Button
									type="submit"
									size="lg"
									className="bg-[#C9A227] hover:bg-[#E0C05A] text-[#1C1C1E] font-bold"
								>
									Invia Richiesta
								</Button>
							</form>
						</motion.div>

						{/* Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<div className="mb-10">
								<h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">
									Contatti diretti
								</h2>
								<div className="flex items-start gap-3 text-[#1C1C1E] mb-3">
									<MapPin className="w-5 h-5 text-[#C9A227] mt-0.5 shrink-0" />
									<span>Alloggi a Roma e Fiumicino</span>
								</div>
								<div className="flex items-center gap-3 text-[#1C1C1E] mb-3">
									<Phone className="w-5 h-5 text-[#C9A227] shrink-0" />
									<a href="tel:+393444324687" className="hover:text-[#C9A227] transition-colors">
										0039.344.43.24.687
									</a>
								</div>
								<div className="flex items-center gap-3 text-[#1C1C1E]">
									<Mail className="w-5 h-5 text-[#C9A227] shrink-0" />
									<a href="mailto:kroiervis70@gmail.com" className="hover:text-[#C9A227] transition-colors">
										kroiervis70@gmail.com
									</a>
								</div>
								<Button
									asChild
									size="lg"
									className="mt-6 bg-[#C9A227] hover:bg-[#E0C05A] text-[#1C1C1E] font-bold"
								>
									<a href="tel:+393444324687">
										<Phone className="mr-2 w-5 h-5" />
										Chiama ora
									</a>
								</Button>
							</div>

							<div className="overflow-hidden border border-[#1C1C1E]/10">
								<iframe
									src={`https://www.google.com/maps?q=${encodeURIComponent(
										"Roma"
									)}&output=embed`}
									title="Mappa Ervin Stay"
									className="w-full h-72"
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</main>
	);
}
