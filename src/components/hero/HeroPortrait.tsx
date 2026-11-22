import Image from "next/image";

export default function HeroPortrait() {
  return (
    <div className="poster-portrait" aria-label="Portrait of Rehan Shaikh">
      <Image
        src="/images/portrait/rehan-cutout.png"
        alt="Rehan Shaikh"
        fill
        priority
        sizes="(max-width: 800px) 100vw, 70vw"
        className="poster-portrait__image"
      />
      <div className="poster-portrait__shade" />
    </div>
  );
}
