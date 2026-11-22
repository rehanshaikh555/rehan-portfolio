import AboutHero from "@/sections/about/AboutHero";
import AboutProfile from "@/sections/about/AboutProfile";
import AboutEducation from "@/sections/about/AboutEducation";
import AboutFocus from "@/sections/about/AboutFocus";
import AboutPrinciples from "@/sections/about/AboutPrinciples";
import AboutJourney from "@/sections/about/AboutJourney";
import AboutClosing from "@/sections/about/AboutClosing";
import "@/sections/about/about.css";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutProfile />
      <AboutEducation />
      <AboutFocus />
      <AboutPrinciples />
      <AboutJourney />
      <AboutClosing />
    </>
  );
}
