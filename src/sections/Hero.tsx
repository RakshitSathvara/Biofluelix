import { Link } from "react-router-dom";
import { ArrowRight, FlameLeaf } from "../components/icons";
import { StatValue } from "../components/StatValue";

export function Hero() {
  return (
    <header className="hero hero-home">
      <div className="hero-bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="shell">
        <div className="hero-eyebrow-row reveal">
          <div className="eyebrow">Biofuelix Solutions</div>
          <div className="eyebrow no-bar" style={{ color: "var(--ink-soft)" }}>
            {/* <span className="mono">N 23.0761° · E 72.5520°</span> */}
          </div>
        </div>

        {/* Headline reveals line-by-line: each line wipes up from inside a clipping mask. */}
        <h1 className="display-xxl hero-headline hero-headline-lines">
          <span className="hl-mask">
            <span className="hl-line">
              The bridge <span className="accent-mark italic">between</span>
            </span>
          </span>
          <span className="hl-mask">
            <span className="hl-line">
              fields{" "}
              <span className="hero-leaf-sway">
                <FlameLeaf size="0.85em" color="var(--leaf)" />
              </span>{" "}
              &amp; fuel.
            </span>
          </span>
        </h1>

        {/* "Fields → Fuel" bridge ribbon: a gold→green line with embers drifting across it. */}
        <div className="hero-bridge" aria-hidden="true">
          <span className="hb-cap hb-field">Fields</span>
          <span className="hb-cap hb-fuel">Fuel</span>
          <span className="hb-line"></span>
          <span className="hb-ember" style={{ animationDelay: "1s" }}></span>
          <span className="hb-ember" style={{ animationDelay: "2.1s" }}></span>
          <span className="hb-ember" style={{ animationDelay: "3.2s" }}></span>
        </div>

        <div className="hero-meta-row reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="lead">
            Agricultural abundance turned into industrial-grade biomass fuel — vetted, tested, and
            delivered with the precision modern industry demands.
          </p>
          <div className="hero-cta-row">
            <Link to="/products" className="btn btn-primary">
              Explore products <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Talk to us
            </Link>
          </div>
        </div>

        <div className="stat-strip reveal-stagger" style={{ transitionDelay: "0.4s" }}>
          <div className="stat-cell">
            <div className="stat-label">CO₂ Offset · per ton biofuel</div>
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
