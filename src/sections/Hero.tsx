import { Link } from "react-router-dom";
import { ArrowRight, FlameLeaf } from "../components/icons";
import { StatValue } from "../components/StatValue";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="shell">
        <div className="hero-eyebrow-row reveal">
          <div className="eyebrow">Biofuelix Solutions · 2026</div>
          <div className="eyebrow no-bar" style={{ color: "var(--ink-soft)" }}>
            <span className="mono">N 28.61° · E 77.20°</span>
          </div>
        </div>

        <h1 className="display-xxl hero-headline reveal" style={{ transitionDelay: "0.15s" }}>
          <span>The bridge </span>
          <span className="accent-mark italic">between</span>
          <br />
          <span>fields </span>
          <FlameLeaf size="0.85em" color="var(--leaf)" />
          <span> & furnaces.</span>
        </h1>

        <div className="hero-meta-row reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="lead">
            We turn agricultural abundance into industrial-grade biomass fuel — vetted, tested, and
            delivered with the precision modern industry demands.
          </p>
          <div className="hero-cta-row">
            <Link to="/products" className="btn btn-primary">
              Explore products <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get a quote
            </Link>
          </div>
        </div>

        <div className="stat-strip reveal-stagger" style={{ transitionDelay: "0.4s" }}>
          <div className="stat-cell">
            <div className="stat-label">CO₂ Offset · per ton</div>
            <StatValue to={1.5} suffix="t" decimals={1} />
            <div className="stat-detail">vs. equivalent thermal coal</div>
          </div>
          <div className="stat-cell">
            <div className="stat-label">Calorific Value</div>
            <StatValue to={4500} suffix="kcal/kg" />
            <div className="stat-detail">for premium grade pellets</div>
          </div>
          <div className="stat-cell">
            <div className="stat-label">Ash Content</div>
            <StatValue to={2} suffix="%" />
            <div className="stat-detail">vs. 35–40% in raw coal</div>
          </div>
          <div className="stat-cell">
            <div className="stat-label">Co-firing Mandate</div>
            <StatValue to={7} suffix="%" />
            <div className="stat-detail">FY 25-26 regulatory floor</div>
          </div>
        </div>
      </div>
    </header>
  );
}
