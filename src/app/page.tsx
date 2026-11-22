import HeroSection from "@/components/hero/HeroSection";
import HomeIntroduction from "@/sections/home/HomeIntroduction";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import ResearchHighlight from "@/sections/home/ResearchHighlight";
import CapabilitiesSection from "@/sections/home/CapabilitiesSection";
import HomeClosing from "@/sections/home/HomeClosing";
import "@/sections/home/home-sections.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeIntroduction />
      <FeaturedProjects />
      <ResearchHighlight />
      <CapabilitiesSection />
      <HomeClosing />
    </>
  );
}
