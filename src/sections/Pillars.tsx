type Pillar = { num: string; title: string; body: string };

const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "Quality Assurance",
    body: "We partner only with manufacturers who meet our rigorous standards for moisture content, ash percentage, and mechanical durability.",
  },
  {
    num: "02",
    title: "Operational Efficiency",
    body: "Optimizing energy systems to improve performance, scalability, and resource utilization — ensuring that supply chain fluctuations never affect your bottom line.",
  },
  {
    num: "03",
    title: "Industrial Reliability",
    body: "Delivering dependable, future-ready energy solutions for evolving industry needs — so your boilers stay supplied through every season and harvest cycle.",
  },
  {
    num: "04",
    title: "Environmental Responsibility",
    body: "Supporting cleaner energy adoption while reducing environmental impact — turning agricultural residue into low-emission fuel and measurable carbon savings.",
  },
];

export function Pillars() {
  return (
    <section className="section section-bone">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Why Biofuelix</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Built for the future of{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>sustainable industry.</span>
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              In an unpredictable market, reliability is a strategy. We address the two biggest hurdles
              in green energy — consistency and quality — through structure, not optimism.
            </p>
          </div>
        </div>
        <div className="pillar-grid reveal-stagger">
          {PILLARS.map((p) => (
            <div className="pillar-card" key={p.num}>
              <div className="pillar-num">{p.num} / 04</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
