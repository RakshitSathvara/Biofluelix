import type { ReactNode } from "react";

type Pillar = { num: string; title: string; body: string; icon: ReactNode };

const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "Quality Assurance",
    body: "Every batch is tested for Gross Calorific Value, moisture, and ash residue. Lab reports follow each delivery — you get exactly what you pay for.",
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="32" cy="32" r="22" />
        <path d="M32 18v14l9 5" />
        <circle cx="32" cy="32" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Supply Resilience",
    body: "A vast network of producers across the agricultural belt means seasonal harvests never dictate your operational uptime. Stocked through the off-season.",
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 44V20l20-8 20 8v24" />
        <path d="M12 44h40" />
        <path d="M22 44V28h20v16" />
        <path d="M28 44v-8h8v8" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Logistical Precision",
    body: "From factory gate to your boiler house, we manage transport, storage, and timing. The transition from coal to biomass becomes seamless for your team.",
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="6" y="22" width="32" height="22" rx="1" />
        <path d="M38 28h12l8 8v8H38z" />
        <circle cx="18" cy="48" r="4" />
        <circle cx="48" cy="48" r="4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Sustainability Expertise",
    body: "ESG reporting, carbon credit pathways under India's CCTS, biomass blending math — we provide the data alongside the fuel. Compliance becomes advantage.",
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M32 8C20 8 12 16 12 28c0 16 14 28 20 28 6 0 20-12 20-28 0-12-8-20-20-20z" />
        <path d="M32 14c0 8 4 16 12 22" />
        <path d="M32 14c0 8-4 16-12 22" />
      </svg>
    ),
  },
];

export function Pillars() {
  return (
    <section className="section section-bone">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">The Biofuelix Advantage</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Built on four <span className="italic" style={{ color: "var(--accent)" }}>pillars</span>{" "}
              — not promises.
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
              <div className="pillar-icon">{p.icon}</div>
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
