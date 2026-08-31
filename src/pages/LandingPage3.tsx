import { LandingPage3HeroSection } from "@/sections/LandingPage3HeroSection";
import { DigitalBenefitsSection } from "@/sections/DigitalBenefitsSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { DigitalModulesSection } from "@/sections/DigitalModulesSection";
import { DigitalResultsSection } from "@/sections/DigitalResultsSection";
import { FaqSection } from "@/sections/FaqSection";
import { CTABannerSection } from "@/sections/CTABannerSection";

export function LandingPage3() {
	return (
		<main>
			<LandingPage3HeroSection />
			<DigitalBenefitsSection />
			<HowItWorksSection />
			<DigitalModulesSection />
			<DigitalResultsSection />
			<FaqSection />
			<CTABannerSection />
		</main>
	);
}
