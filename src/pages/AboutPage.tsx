import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";
import { Pillars } from "../sections/Pillars";
import { HomeCTA } from "../sections/HomeCTA";
import { FounderPortrait } from "../sections/FounderNote";

function AboutHero() {
  return (
    <header className="hero">
      <div className="hero-bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="shell">
        <div className="hero-eyebrow-row reveal">
          <div className="eyebrow">About · Our story</div>
          <div className="eyebrow no-bar mono" style={{ color: "var(--ink-soft)" }}>
            Founded 2026 · New Delhi
          </div>
        </div>
        <h1
          className="display-xxl hero-headline reveal"
          style={{ transitionDelay: "0.15s", maxWidth: "16ch" }}
        >
          We are <span className="accent-mark italic">bridging</span> the gap to a greener tomorrow.
        </h1>
        <div className="hero-meta-row reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="lead">
            At Biofuelix Solutions, we believe the transition to sustainable energy shouldn't be a
            logistical challenge. We serve as the strategic link between the abundance of biomass
            resources and the growing energy demands of modern industry.
          </p>
          <div className="hero-cta-row">
            <Link to="/products" className="btn btn-primary">
              See our products <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Mission() {
  return (
    <section className="section section-bone tight">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Our mission</div>
          </div>
          <div className="right">
            <p className="display-l serif" style={{ fontWeight: 300, marginTop: 16 }}>
              To empower industries to{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>decarbonize</span>
              {" "}their operations by providing a reliable, scalable, and high-quality supply of
              biomass fuels.
            </p>
            <p className="lead" style={{ marginTop: 24 }}>
              We don't just trade commodities. We facilitate a cleaner future — one ton at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="section">
      <div className="shell">
        <div
          className="ps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 96px)",
          }}
        >
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              The problem
            </div>
            <h3 className="display-m serif" style={{ fontWeight: 400, marginBottom: 24 }}>
              Fragmented supply. Inconsistent quality.
            </h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>
              The world is ready to move away from fossil fuels — but the transition to biomass is
              often hindered by inconsistent supply chains, fluctuating quality, and logistical
              hurdles.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              Industrial leaders wanted to go green, but they were held back by the sheer complexity
              of moving material from the farm to the furnace.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="eyebrow" style={{ marginBottom: 24, color: "var(--accent)" }}>
              Our solution
            </div>
            <h3
              className="display-m serif"
              style={{ fontWeight: 400, marginBottom: 24, color: "var(--forest)" }}
            >
              Standardized fuel. Streamlined chain.
            </h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>
              Biofuelix Solutions was founded to be the vital link. We streamline the biomass supply
              chain by sourcing high-calorific residues and delivering them as standardized,
              industrial-grade Briquettes and Pellets.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              We don't just move products. We provide energy security.
            </p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .ps-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

const CIRCULAR_STEPS = [
  { n: "01", l: "Source", b: "Vetted producers across the agricultural belt" },
  { n: "02", l: "Audit", b: "GCV, moisture, ash residue lab tested" },
  { n: "03", l: "Move", b: "Logistics planning from gate to boiler house" },
  { n: "04", l: "Track", b: "ESG metrics + carbon credit documentation" },
];

function CircularEconomy() {
  return (
    <section className="section section-dark">
      <div className="shell">
        <div style={{ maxWidth: 920 }}>
          <div className="eyebrow reveal" style={{ marginBottom: 32 }}>
            The circular promise
          </div>
          <p
            className="display-l serif reveal"
            style={{ fontWeight: 300, transitionDelay: "0.1s" }}
          >
            "Our process turns what was once considered{" "}
            <span className="italic" style={{ color: "var(--accent-bright)" }}>
              'agricultural waste'
            </span>{" "}
            — groundnut shells, mustard husk, sawdust — into a high-value energy resource."
          </p>
          <p
            className="lead reveal"
            style={{ marginTop: 32, transitionDelay: "0.2s", maxWidth: "60ch" }}
          >
            By preventing field burning and reducing coal dependency, Biofuelix Solutions supports
            rural economies while protecting the global climate. Waste becomes fuel. Fuel becomes
            carbon credit. Carbon credit becomes margin.
          </p>
        </div>

        <div
          className="reveal circular-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            marginTop: 80,
            background: "rgba(245,240,230,0.1)",
            border: "1px solid rgba(245,240,230,0.1)",
          }}
        >
          {CIRCULAR_STEPS.map((s) => (
            <div key={s.n} style={{ background: "var(--forest-deep)", padding: "32px 28px" }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: "var(--accent-bright)",
                  marginBottom: 32,
                }}
              >
                {s.n}
              </div>
              <div
                className="serif"
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  marginBottom: 12,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.l}
              </div>
              <div style={{ fontSize: 14, color: "rgba(245,240,230,0.6)", lineHeight: 1.5 }}>
                {s.b}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .circular-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  );
}

function FullFounderNote() {
  return (
    <section className="section section-cream">
      <div className="shell">
        <div className="eyebrow reveal" style={{ marginBottom: 24 }}>
          A message from the founders
        </div>
        <h2
          className="display-xl serif reveal"
          style={{
            fontWeight: 300,
            transitionDelay: "0.1s",
            marginBottom: 64,
            maxWidth: "18ch",
          }}
        >
          The bridge to a{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>greener future.</span>
        </h2>

        <div
          className="founder-grid-full"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "clamp(32px, 6vw, 96px)",
            alignItems: "start",
          }}
        >
          <div className="reveal" style={{ position: "sticky", top: 100 }}>
            <FounderPortrait />
            <div style={{ marginTop: 24 }}>
              <div
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: 36,
                  color: "var(--forest)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                Anjali & Sandeep Nair
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                }}
              >
                Co-Founders · Biofuelix Solutions
              </div>
            </div>
          </div>
          <div
            className="reveal"
            style={{
              transitionDelay: "0.15s",
              fontSize: 18,
              color: "var(--ink-soft)",
              lineHeight: 1.7,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <p>
              When we first looked into the biomass industry, we didn't just see agricultural waste;
              we saw an untapped solution to one of our generation's greatest challenges: the
              transition to sustainable energy.
            </p>
            <p>
              However, we also saw the friction. Industrial leaders wanted to go green, but they
              were often held back by inconsistent supply, varying fuel quality, and the sheer
              complexity of moving material from the farm to the furnace.{" "}
              <span style={{ color: "var(--ink)", fontWeight: 500 }}>
                The world didn't just need more fuel — it needed a better bridge.
              </span>
            </p>
            <p>Biofuelix Solutions was born from that realization.</p>
            <p>
              Our goal was to create a trading house built on the values of transparency,
              reliability, and precision. We don't just facilitate transactions; we take on the
              responsibility of the supply chain so that you can focus on your core operations.
              Whether it is auditing the calorific value of every batch or navigating the
              complexities of 2026's new carbon regulations, we are in the trenches with you.
            </p>
            <p style={{ color: "var(--ink)", fontWeight: 500 }}>
              For us, every ton of briquettes or pellets delivered is more than just a sale — it is
              a ton of coal left in the ground, a field of stubble not burned in the open air, and a
              step toward a cleaner atmosphere for all of us.
            </p>
            <p>
              Thank you for trusting Biofuelix Solutions to be your partner in this journey. Let's
              build a greener, more resilient industry together.
            </p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) {
        .founder-grid-full { grid-template-columns: 1fr !important; }
        .founder-grid-full > div:first-child { position: relative !important; top: 0 !important; max-width: 360px; }
      }`}</style>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <ProblemSolution />
      <Pillars />
      <CircularEconomy />
      <FullFounderNote />
      <HomeCTA />
    </>
  );
}
