import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";
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
            Ahmedabad · India
          </div>
        </div>
        <h2
          className="display-xxl hero-headline reveal"
          style={{ transitionDelay: "0.15s", maxWidth: "20ch", fontSize: "clamp(30px, 3.8vw, 60px)" }}
        >
          We help industries transition towards smarter, cleaner and more{" "}
          <span className="accent-mark italic">sustainable energy solutions.</span>
        </h2>
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

// The three core pillars from the brand brief — used as the supporting strip in
// the text-only Mission layout so it still reads complete without the photo.
const MISSION_POINTS: [string, string][] = [
  ["Vetted supply chain", "Manufacturers held to strict moisture, ash, and durability standards."],
  ["Operational integrity", "Bridging rural production and industrial demand — supply swings never reach your bottom line."],
  ["Sustainability at scale", "Agricultural residue turned into high-energy fuel that lowers your carbon footprint."],
];

/**
 * Our Mission section. Two finalized layouts share the same statement:
 *   <Mission />            → text-only (statement + supporting pillars)
 *   <Mission showImage />  → statement + the sustainable-sourcing photo (live)
 * Swap the prop in <AboutPage> to switch between them.
 */
function Mission({ showImage = false }: { showImage?: boolean }) {
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
              We don't just trade commodities. We facilitate a cleaner future — ton by ton.
            </p>
          </div>
        </div>

        {showImage ? (
          <div
            className="reveal"
            style={{
              position: "relative",
              marginTop: 56,
              height: "clamp(260px, 40vw, 480px)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/mission-biomass-supply.webp"
              alt="A technician quality-checks biomass briquettes beside stocked inventory and a truck prepared for industrial delivery"
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(15,40,24,0) 45%, rgba(15,40,24,0.55) 100%)",
              }}
            />
            <div
              className="mono"
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cream)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ width: 24, height: 1, background: "var(--accent-bright)" }} />
              Quality checked · Ready at industrial scale
            </div>
          </div>
        ) : (
          <div
            className="reveal mission-points"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              marginTop: 56,
            }}
          >
            {MISSION_POINTS.map(([t, b]) => (
              <div key={t} style={{ borderTop: "1px solid var(--line-strong)", paddingTop: 24 }}>
                <div
                  className="serif"
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    marginBottom: 12,
                    color: "var(--forest)",
                  }}
                >
                  {t}
                </div>
                <div style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6 }}>{b}</div>
              </div>
            ))}
            <style>{`@media (max-width: 880px) { .mission-points { grid-template-columns: 1fr 1fr !important; } }
              @media (max-width: 520px) { .mission-points { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        )}
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
            — groundnut shells, mustard husk & sawdust — into a high-value energy resource."
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
          A message from the founder
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
                  fontSize: 48,
                  fontWeight: 600,
                  color: "var(--forest)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                Anjali Nair
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
                Founder · Biofuelix Solutions
              </div>
            </div>
          </div>
          <div
            className="reveal"
            style={{
              transitionDelay: "0.15s",
              fontFamily: "var(--font-script)",
              fontSize: "clamp(25px, 2.1vw, 32px)",
              fontWeight: 500,
              color: "var(--ink-soft)",
              lineHeight: 1.34,
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <p>
              When I first looked into the biomass industry, I didn't just see agricultural waste; I
              saw an untapped solution to one of our generation's greatest challenges: the
              transition to sustainable energy.
            </p>
            <p>
              However, I also saw the friction. Industrial leaders wanted to go green, but they were
              often held back by inconsistent supply, varying fuel quality, and the sheer complexity
              of moving material from the farm to the furnace.{" "}
              <span style={{ color: "var(--ink)", fontWeight: 500 }}>
                The world didn't just need more fuel — it needed a better bridge.
              </span>
            </p>
            <p>Biofuelix Solutions was born from that realization.</p>
            <p>
              My goal was to create a trading house built on the values of transparency, reliability,
              and precision. We don't just facilitate transactions; we take on the responsibility of
              the supply chain so that you can focus on your core operations. Whether it is auditing
              the calorific value of every batch or navigating the complexities of new carbon
              regulations, we are in the trenches with you.
            </p>
            <p style={{ color: "var(--ink)", fontWeight: 500 }}>
              For us, every ton of briquettes or pellets delivered is more than just a sale — it is a
              ton of coal left in the ground, a field of stubble not burned in the open air, and a
              step toward a cleaner atmosphere for all of us.
            </p>
            <p>Thank you for trusting Biofuelix Solutions to be your partner in this journey.</p>
            <p
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "clamp(30px, 3.6vw, 48px)",
                lineHeight: 1.15,
                fontWeight: 600,
                color: "var(--accent)",
                margin: "4px 0 0",
              }}
            >
              Let's build a greener, more resilient industry together.
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
      {/* Image version is live. For the text-only layout, use <Mission /> instead. */}
      <Mission showImage />
      <ProblemSolution />
      <CircularEconomy />
      <FullFounderNote />
      <HomeCTA />
    </>
  );
}
