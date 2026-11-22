import HeroMeta from "./HeroMeta";
import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div className="hero-content">
      <p className="hero-eyebrow">
        <span className="hero-status-dot" />
        INDEPENDENT RESEARCHER & DEVELOPER
      </p>

      <h1 className="hero-title">
        THINK.
        <br />
        BUILD.
        <br />
        <span>SECURE.</span>
      </h1>

      <p className="hero-description">
        I explore the intersection of cybersecurity, software engineering
        and intelligent systems — turning complex ideas into purposeful
        technology.
      </p>

      <HeroMeta />
      <HeroActions />
    </div>
  );
}
