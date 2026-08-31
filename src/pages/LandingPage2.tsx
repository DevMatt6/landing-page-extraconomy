import { LandingPage2HeroSection } from "@/sections/LandingPage2HeroSection";
import { LandingPage2BenefitsSection } from "@/sections/LandingPage2BenefitsSection";
import { ProductIntroSection } from "@/sections/ProductIntroSection";
import { ProductGallerySection } from "@/sections/ProductGallerySection";
import { ProductOfferGridSection } from "@/sections/ProductOfferGridSection";
import { ProductTrustSection } from "@/sections/ProductTrustSection";
import { ProductFaqSection } from "@/sections/ProductFaqSection";
import { ProductCtaSection } from "@/sections/ProductCtaSection";

export function LandingPage2() {
	return (
		<main>
			<LandingPage2HeroSection />
			<LandingPage2BenefitsSection />
			<ProductIntroSection />
			<ProductGallerySection />
			<ProductOfferGridSection />
			<ProductTrustSection />
			<ProductFaqSection />
			<ProductCtaSection />
		</main>
	);
}
