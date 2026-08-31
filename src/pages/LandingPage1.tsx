import { LandingPage1HeroSection } from "@/sections/LandingPage1HeroSection";
import { LandingPage1BenefitsSection } from "@/sections/LandingPage1BenefitsSection";
import { IntroSection } from "@/sections/IntroSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { MissionSection } from "@/sections/MissionSection";
import { FaqSection } from "@/sections/FaqSection";
import { LeadContactSection } from "@/sections/LeadContactSection";

export function LandingPage1() {
	return (
		<main>
			<LandingPage1HeroSection />
			<LandingPage1BenefitsSection />
			<IntroSection />
			<HowItWorksSection />
			<MissionSection />
			<FaqSection />
			<LeadContactSection />
		</main>
	);
}
