const callouts = [
  { title: "RESEARCH", detail: "QUANTITATIVE FINANCE" },
  { title: "SECURITY", detail: "THREAT INTELLIGENCE" },
  { title: "SYSTEMS", detail: "ARCHITECTURE & SCALE" },
  { title: "AI / ML", detail: "DETECTION & ANALYTICS" },
];

export default function HeroCallouts() {
  return (
    <div className="poster-callouts">
      {callouts.map((item) => (
        <div className="poster-callout" key={item.title}>
          <span>{item.title}</span>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
