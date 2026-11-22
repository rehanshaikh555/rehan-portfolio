import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Portrait of Rehan Shaikh with a digital network">
      <div className="hero-visual__grid" />

      <div className="hero-visual__portrait">
        <Image
          src="/images/portrait/rehan.jpg"
          alt="Rehan Shaikh"
          fill
          priority
          sizes="(max-width: 800px) 80vw, 42vw"
          className="hero-visual__image"
        />
        <div className="hero-visual__image-shade" />
      </div>

      <div className="hero-visual__orbit hero-visual__orbit--outer" />
      <div className="hero-visual__orbit hero-visual__orbit--inner" />

      <span className="hero-visual__node hero-visual__node--one" />
      <span className="hero-visual__node hero-visual__node--two" />
      <span className="hero-visual__node hero-visual__node--three" />

      <p className="hero-visual__caption">
        <span>FIG. 01</span>
        DIGITAL IDENTITY / NETWORK STUDY
      </p>
    </div>
  );
}
