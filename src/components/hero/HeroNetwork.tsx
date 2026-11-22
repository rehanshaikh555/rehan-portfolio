export default function HeroNetwork() {
  return (
    <div className="poster-network" aria-hidden="true">
      <div className="poster-network__globe" />
      <div className="poster-network__orbit poster-network__orbit--one" />
      <div className="poster-network__orbit poster-network__orbit--two" />

      <svg className="poster-network__connections" viewBox="0 0 800 900" fill="none">
        <path d="M120 270 L330 160 L510 300 L690 190" />
        <path d="M120 270 L260 490 L510 300 L620 610" />
        <path d="M260 490 L400 700 L620 610 L690 190" />
        <path d="M330 160 L400 700" />
        <path d="M510 300 L620 610" />
        <g>
          <circle cx="120" cy="270" r="5" />
          <circle cx="330" cy="160" r="5" />
          <circle cx="510" cy="300" r="5" />
          <circle cx="690" cy="190" r="5" />
          <circle cx="260" cy="490" r="5" />
          <circle cx="400" cy="700" r="5" />
          <circle cx="620" cy="610" r="5" />
        </g>
      </svg>
    </div>
  );
}
