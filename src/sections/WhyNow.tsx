import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";

const ITEMS = [
  {
    num: "01",
    tag: "Mandate",
    stat: "5–7%",
    title: "Mandatory co-firing",
    body: "FY 2025–26: all coal-based thermal plants and large industrial captive plants must blend 5–7% biomass pellets or briquettes.",
  },
  {
    num: "02",
    tag: "Penalty",
    stat: "₹60 cr",
    title: "Heavy penalties",
    body: "CAQM imposed over ₹60 crore in fines in a single month on facilities failing biomass blending norms. Enforcement is now active, not advisory.",
  },
  {
    num: "03",
    tag: "Opportunity",
    stat: "4 sectors",
    title: "Carbon Credit Trading Scheme",
    body: "India's CCTS is live for textiles, cement, paper, and steel. Switching to Biofuelix biomass generates tradable Carbon Credit Certificates.",
  },
];

export function WhyNow() {
  return (
    <section className="section section-dark">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Why now</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              The era of{" "}
              <span className="italic" style={{ color: "var(--accent-bright)" }}>compliance</span>
              <br />
              has arrived.
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              Biomass is no longer an alternative — it is a statutory requirement. Three forces have
              collapsed the timeline:
            </p>
          </div>
        </div>

        <div className="now-cards reveal-stagger">
          {ITEMS.map((it) => (
            <div className="now-card" key={it.num}>
              <span className="now-index" aria-hidden="true">{it.num}</span>
              <span className="now-tag">{it.tag}</span>
              <div className="now-stat">{it.stat}</div>
              <h3 className="now-title">{it.title}</h3>
              <p className="now-body">{it.body}</p>
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
