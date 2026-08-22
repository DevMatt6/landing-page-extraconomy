import { HeroSection } from "@/sections/HeroSection";
import { IntroSection } from "@/sections/IntroSection";
import { ServiziOverviewSection } from "@/sections/ServiziOverviewSection";
import { MissionSection } from "@/sections/MissionSection";
import { LavoraConNoiSection } from "@/sections/LavoraConNoiSection";
import { CTABannerSection } from "@/sections/CTABannerSection";

export function Home() {
	return (
		<main>
			<HeroSection />
			<IntroSection />
			<ServiziOverviewSection />
			<MissionSection />
			<LavoraConNoiSection />
			<CTABannerSection />
		</main>
	);
}
