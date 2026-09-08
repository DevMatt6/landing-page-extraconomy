import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StudioFormaHeroSection() {
	return (
		<section
			className="pt-32 pb-24 overflow-hidden relative"
			style={{ backgroundColor: "#1a1a18" }}
		>
			{/* Background image with overlay */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					opacity: 0.25,
				}}
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
					<div className="lg:col-span-7 max-w-3xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center px-4 py-1.5 mb-6 border"
							style={{
								borderColor: "rgba(185, 131, 73, 0.4)",
								backgroundColor: "rgba(185, 131, 73, 0.08)",
							}}
						>
							<span
								className="text-sm font-semibold uppercase tracking-[0.16em]"
								style={{ color: "#b98349", fontFamily: "'Inter', sans-serif" }}
							>
								Architettura & Interior Design · Milano
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
							style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700 }}
						>
							Spazi che parlano di te. Progettati per durare.
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.15 }}
							className="text-lg sm:text-xl font-medium mb-8 max-w-2xl"
							style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}
						>
							Studio Forma progetta ambienti residenziali e commerciali con un metodo rigoroso, materiali selezionati e un'attenzione al dettaglio che si vede — e si sente.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="flex flex-col sm:flex-row gap-4"
						>
							<Button
								asChild
								size="lg"
								className="font-bold px-8 transition-all hover:scale-105"
								style={{
									backgroundColor: "#b98349",
									color: "#1a1a18",
									border: "none",
									fontFamily: "'Inter', sans-serif",
								}}
							>
								<Link to="#contatto">
									Richiedi una consulenza gratuita
									<ArrowRight className="ml-2 w-5 h-5" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="px-8 transition-all"
								style={{
									color: "white",
									borderColor: "rgba(255,255,255,0.35)",
									backgroundColor: "transparent",
									fontFamily: "'Inter', sans-serif",
								}}
							>
								<Link to="#progetti">Sfoglia i progetti</Link>
							</Button>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="lg:col-span-5"
					>
						<div
							className="p-6 lg:p-8"
							style={{
								border: "1px solid rgba(255,255,255,0.12)",
								backgroundColor: "rgba(255,255,255,0.04)",
							}}
						>
							<div className="space-y-5">
								<div className="pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
									<p
										className="text-sm uppercase tracking-[0.14em] mb-2"
										style={{ color: "#b98349", fontFamily: "'Inter', sans-serif" }}
									>
										Il nostro impegno
									</p>
									<p className="text-white text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
										Ogni progetto è unico. Prima consulenza conoscitiva gratuita, sempre inclusa.
									</p>
								</div>
								<div className="grid sm:grid-cols-2 gap-4">
									<div className="p-4" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
										<p className="text-sm uppercase tracking-[0.14em] mb-2" style={{ color: "#b98349", fontFamily: "'Inter', sans-serif" }}>
											Fondato nel 2011
										</p>
										<p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif" }}>
											Oltre 15 anni di progetti residenziali, retail e hospitality in tutta Italia.
										</p>
									</div>
									<div className="p-4" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
										<p className="text-sm uppercase tracking-[0.14em] mb-2" style={{ color: "#b98349", fontFamily: "'Inter', sans-serif" }}>
											200+ progetti consegnati
										</p>
										<p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif" }}>
											Dalle ristrutturazioni private agli spazi commerciali di alto profilo.
										</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
