import HeroTypography from "./HeroTypography";
import HeroPortrait from "./HeroPortrait";
import HeroNetwork from "./HeroNetwork";
import HeroCallouts from "./HeroCallouts";
import HeroMetadata from "./HeroMetadata";
import "./hero.css";
import "./hero-portrait.css";

export default function HeroSection() {
  return (
    <section className="poster-hero">
      <HeroNetwork />

      <div className="poster-stage">
        <HeroPortrait />
        <HeroTypography />
        <HeroCallouts />
      </div>

      <HeroMetadata />
    </section>
  );
}
