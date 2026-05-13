import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";

const ITEMS = [
  {
    num: "A",
    title: "Mandatory co-firing",
    body: "FY 2025–26: all coal-based thermal plants and large industrial captive plants must blend 5–7% biomass pellets or briquettes.",
  },
  {
    num: "B",
    title: "Heavy penalties",
    body: "CAQM imposed over ₹60 crore in fines in April 2026 alone on facilities failing biomass blending norms. Enforcement is now active, not advisory.",
  },
  {
    num: "C",
    title: "Carbon Credit Trading Scheme",
    body: "India's CCTS is live for textiles, cement, paper, and steel. Switching to Biofuelix biomass generates tradable Carbon Credit Certificates.",
  },
  {
    num: "D",
    title: "Capital subsidies",
    body: "Governments now offer grants — some up to ₹10,800 per MTPH — for facilities installing biomass-compatible boilers.",
  },
];

export function WhyNow() {
  return (
    <section className="section section-dark">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Why now · 2026</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              The era of{" "}
              <span className="italic" style={{ color: "var(--accent-bright)" }}>compliance</span>
              <br />
              has arrived.
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              In 2026, biomass is no longer an alternative — it is a statutory requirement. Three
              forces have collapsed the timeline:
            </p>
          </div>
        </div>

        <div className="pillar-grid reveal-stagger" style={{ marginTop: 48 }}>
          {ITEMS.map((it) => (
            <div className="pillar-card" key={it.num}>
              <div className="pillar-num">{it.num}</div>
              <h3 className="pillar-title">{it.title}</h3>
              <p className="pillar-body">{it.body}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 64 }}>
          <Link to="/why" className="btn btn-ghost reveal">
            See full regulatory landscape <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
