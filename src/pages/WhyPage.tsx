import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "../components/icons";
import { HomeCTA } from "../sections/HomeCTA";

function WhyHero() {
  return (
    <header className="hero">
      <div className="hero-bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="shell">
        <div className="hero-eyebrow-row reveal">
          <div className="eyebrow">Why Biofuelix · 2026</div>
          <div className="eyebrow no-bar mono" style={{ color: "var(--ink-soft)" }}>
            Compliance · Cost · Carbon
          </div>
        </div>
        <h1
          className="display-xxl hero-headline reveal"
          style={{ transitionDelay: "0.15s", maxWidth: "16ch" }}
        >
          The era of <span className="accent-mark italic">compliance</span> has arrived.
        </h1>
        <div className="hero-meta-row reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="lead">
            Biomass is no longer just an alternative — it is a statutory requirement. We turn that
            pressure into your competitive edge.
          </p>
          <div className="hero-cta-row">
            <a href="#calculator" className="btn btn-ghost">
              Try the calculator
            </a>
            <Link to="/contact" className="btn btn-primary">
              Talk to us <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const REASONS = [
  {
    n: "01",
    t: "Environmental impact",
    sub: "Beyond just 'green'.",
    pts: [
      [
        "Carbon neutrality",
        "Biomass sits in the short-term carbon cycle. CO₂ emitted during combustion roughly equals what plants absorbed during growth.",
      ],
      [
        "Waste-to-energy",
        "We transform agricultural waste — often burned openly causing smog — into structured fuel. Less methane, cleaner regional air.",
      ],
      [
        "Lower harmful emissions",
        "Significantly lower SO₂ and NOx versus coal. Your facility breathes easier — and so do the surrounding communities.",
      ],
    ],
  },
  {
    n: "02",
    t: "The cost factor",
    sub: "Protecting your bottom line.",
    pts: [
      [
        "Price stability",
        "Fossil fuel prices are tied to volatile global markets. Biomass is locally sourced, offering predictable, long-term pricing.",
      ],
      [
        "Operational efficiency",
        "Coal can carry 35–40% ash. Our briquettes and pellets sit at 2–10%. Less ash disposal, less downtime, less cleaning.",
      ],
      [
        "Tax & carbon credits",
        "Under India's Carbon Credit Trading Scheme (CCTS), switching earns tradable Carbon Credit Certificates — a new revenue line.",
      ],
    ],
  },
  {
    n: "03",
    t: "Government regulations",
    sub: "Staying ahead of the law.",
    pts: [
      [
        "Co-firing mandates",
        "Ministry of Power has pushed 5–10% biomass co-firing in thermal plants — and the trend is spreading to private industry.",
      ],
      [
        "Emission compliance",
        "Green taxes and stricter CPCB norms are now the standard. Biomass keeps your plant compliant and avoids heavy fines.",
      ],
      [
        "Subsidies",
        "Many regions offer capital grants — some up to ₹10,800 per MTPH of capacity — for biomass-compatible boilers.",
      ],
    ],
  },
  {
    n: "04",
    t: "Future strategy",
    sub: "A modern energy posture.",
    pts: [
      [
        "ESG reporting",
        "Investors and global partners now demand high ESG scores. Biofuelix is the fastest path to decarbonize your supply chain in annual reports.",
      ],
      [
        "Energy security",
        "Local agricultural residues mean less dependence on imported fuels — energy security through global supply chain disruption.",
      ],
      [
        "Technological evolution",
        "Black Pellets (torrefied biomass) and high-efficiency gasification are next. Biofuelix is positioned to deliver them to your doorstep.",
      ],
    ],
  },
] as const;

function FourReasons() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Four arguments</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Biomass is a{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>strategic</span>
              <br />
              business upgrade.
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              Not just a green choice — a hedge against compliance risk, a margin protector, and a
              pathway to new revenue.
            </p>
          </div>
        </div>

        <div
          className="reveal-stagger"
          style={{
            display: "grid",
            gap: 1,
            background: "var(--line)",
            border: "1px solid var(--line)",
            marginTop: 64,
          }}
        >
          {REASONS.map((r) => (
            <div
              key={r.n}
              style={{ background: "var(--paper)", padding: "clamp(32px, 4vw, 64px)" }}
              className="reason-block"
            >
              <div
                className="reason-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "clamp(32px, 6vw, 80px)",
                }}
              >
                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      color: "var(--accent)",
                      marginBottom: 16,
                    }}
                  >
                    {r.n} / 04
                  </div>
                  <h3
                    className="display-m serif"
                    style={{ fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 12 }}
                  >
                    {r.t}
                  </h3>
                  <div
                    className="serif italic"
                    style={{ fontSize: 22, color: "var(--ink-soft)", fontWeight: 300 }}
                  >
                    {r.sub}
                  </div>
                </div>
                <div style={{ display: "grid", gap: 24 }}>
                  {r.pts.map(([h, p]) => (
                    <div key={h} style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 18,
                          fontWeight: 500,
                          color: "var(--forest)",
                          marginBottom: 6,
                        }}
                      >
                        {h}
                      </div>
                      <div style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6 }}>
                        {p}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 880px) { .reason-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function CalcCell({
  label,
  value,
  suffix,
  detail,
}: {
  label: string;
  value: string;
  suffix: string;
  detail: string;
}) {
  return (
    <div style={{ background: "var(--forest-deep)", padding: "32px 28px" }}>
      <div
        className="mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "rgba(245,240,230,0.55)",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <div
          className="serif"
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 300,
            lineHeight: 1,
            color: "var(--accent-bright)",
            letterSpacing: "-0.02em",
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: 13, color: "rgba(245,240,230,0.65)" }}>{suffix}</div>
      </div>
      <div style={{ fontSize: 13, color: "rgba(245,240,230,0.5)", marginTop: 12 }}>{detail}</div>
    </div>
  );
}

function Calculator() {
  const [tons, setTons] = useState(100);
  const co2 = tons * 2.42;
  const trees = Math.round(co2 * 50);
  const credits = Math.round(co2);

  return (
    <section id="calculator" className="section section-dark">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Carbon offset calculator</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              How much CO₂
              <br />
              could{" "}
              <span className="italic" style={{ color: "var(--accent-bright)" }}>you</span> save?
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              Coal emits ~2.42 kg CO₂ per kg burned. Biomass, under IPCC short-cycle carbon
              guidelines, is effectively zero. Drag the slider to see the math.
            </p>
          </div>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 64,
            padding: "clamp(40px, 5vw, 80px)",
            background: "rgba(245,240,230,0.04)",
            border: "1px solid rgba(245,240,230,0.12)",
            borderRadius: 8,
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "rgba(245,240,230,0.6)",
              marginBottom: 20,
            }}
          >
            HOW MANY TONS OF COAL DO YOU BURN PER MONTH?
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32 }}>
            <div
              className="serif"
              style={{
                fontSize: "clamp(72px, 10vw, 144px)",
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "var(--cream)",
              }}
            >
              {tons.toLocaleString()}
            </div>
            <div className="mono" style={{ fontSize: 14, color: "var(--accent-bright)" }}>
              tons / month
            </div>
          </div>

          <input
            type="range"
            min={10}
            max={5000}
            step={10}
            value={tons}
            onChange={(e) => setTons(+e.target.value)}
            style={{ width: "100%", accentColor: "var(--accent-bright)" }}
          />

          <div
            className="calc-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              marginTop: 64,
              background: "rgba(245,240,230,0.12)",
            }}
          >
            <CalcCell
              label="CO₂ offset / month"
              value={co2.toFixed(1)}
              suffix="tons"
              detail="vs. equivalent coal burn"
            />
            <CalcCell
              label="Equivalent trees planted"
              value={trees.toLocaleString()}
              suffix="trees / yr"
              detail="based on annual sequestration"
            />
            <CalcCell
              label="Carbon credit potential"
              value={credits.toLocaleString()}
              suffix="CCC / month"
              detail="under India CCTS, indicative"
            />
          </div>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "rgba(245,240,230,0.5)",
                textTransform: "uppercase",
              }}
            >
              Indicative · For exact projection request a consultation
            </div>
            <Link to="/contact" className="btn btn-ghost">
              Get a precise estimate <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .calc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

const NOW_2026 = [
  {
    t: "Mandatory co-firing",
    b: "FY 2025-26: all coal-based thermal power plants and large industrial captive plants must use a 5–7% biomass blend.",
    tag: "STATUTORY",
  },
  {
    t: "₹60 crore in fines",
    b: "CAQM imposed massive penalties in April 2026 alone on facilities failing biomass blending norms. Enforcement is live.",
    tag: "ACTIVE",
  },
  {
    t: "ICM goes live",
    b: "The Carbon Credit Trading Scheme covers textiles, cement, paper and steel. Biomass adopters generate tradable certificates.",
    tag: "OPPORTUNITY",
  },
];

function Now2026() {
  return (
    <section className="section section-cream">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Why now · 2026 landscape</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              The screws have{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>tightened.</span>
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              A snapshot of what's changed for industrial fuel buyers this year — and what changes
              mean for your next quarter's compliance posture.
            </p>
          </div>
        </div>

        <div
          className="reveal now-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginTop: 64,
          }}
        >
          {NOW_2026.map((c) => (
            <div
              key={c.t}
              style={{ padding: 32, background: "var(--paper)", border: "1px solid var(--line)" }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "var(--accent)",
                  marginBottom: 32,
                }}
              >
                {c.tag}
              </div>
              <h3
                className="serif"
                style={{ fontSize: 28, fontWeight: 400, marginBottom: 16, letterSpacing: "-0.01em" }}
              >
                {c.t}
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6 }}>{c.b}</p>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 760px) { .now-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function BlogTeaser() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">From the journal</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Reading material
              <br />
              for{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>procurement teams.</span>
            </h2>
          </div>
        </div>

        <a
          href="#"
          className="reveal blog-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "center",
            marginTop: 64,
            padding: "clamp(32px, 4vw, 64px)",
            background: "var(--bone)",
            borderRadius: 8,
            color: "var(--ink)",
          }}
        >
          <div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "var(--accent)",
                marginBottom: 24,
              }}
            >
              FEATURE · 7 MIN READ
            </div>
            <h3 className="display-l serif" style={{ fontWeight: 300, marginBottom: 24 }}>
              Beyond the bill: why your <span className="italic">'cheap' coal</span> is costing you a
              fortune.
            </h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: 32, fontSize: 17 }}>
              For decades, procurement managers had one goal: find the cheapest coal per ton. But in
              2026, the invoice price is only half the story. Three invisible ways your business
              leaks money on fossil fuel today.
            </p>
            <span className="tlink">
              Read the full piece <ArrowUpRight />
            </span>
          </div>
          <div
            style={{
              aspectRatio: "1/1",
              background: "linear-gradient(135deg, var(--forest), var(--forest-deep))",
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
              <defs>
                <radialGradient id="blog-grad" cx="0.7" cy="0.3">
                  <stop offset="0%" stopColor="rgba(212,185,98,0.4)" />
                  <stop offset="100%" stopColor="rgba(212,185,98,0)" />
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="url(#blog-grad)" />
              <g transform="translate(60, 280)">
                {Array.from({ length: 8 }, (_, i) => {
                  const h = 40 + Math.pow(i, 1.4) * 8;
                  return (
                    <rect
                      key={i}
                      x={i * 36}
                      y={-h}
                      width={28}
                      height={h}
                      fill="#d4b962"
                      opacity={0.3 + i * 0.08}
                    />
                  );
                })}
              </g>
              <text x="60" y="60" fill="#d4b962" fontFamily="monospace" fontSize="11" letterSpacing="2">
                HIDDEN COST · 2026
              </text>
              <line x1="60" y1="80" x2="120" y2="80" stroke="#d4b962" strokeWidth="1" />
            </svg>
          </div>
        </a>
        <style>{`@media (max-width: 760px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .blog-grid > div:last-child { aspect-ratio: 16/9 !important; }
        }`}</style>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "What's the difference between briquettes and pellets?",
    a: "Briquettes are large (60–100mm) cylindrical logs ideal for industrial boilers and bulk handling. Pellets are small (6–12mm) precision cylinders for automated feeding systems. Pellets have higher energy density and lower ash; briquettes are more economical per ton.",
  },
  {
    q: "How is calorific value verified?",
    a: "Every batch we trade undergoes a Biofuelix Check — moisture content, ash residue, and Gross Calorific Value testing. Lab reports accompany each delivery. You receive exactly what you pay for, documented.",
  },
  {
    q: "Can biomass really replace coal in my plant?",
    a: "For most industrial use cases — textile mills, brick kilns, food processing, casting — yes, often as a direct substitute. For larger thermal plants the path is co-firing (5–7% blend rising over time). We'll assess your boiler and recommend the right transition.",
  },
  {
    q: "How does carbon credit eligibility work?",
    a: "Under India's Carbon Credit Trading Scheme (CCTS), industries that switch to biomass and exceed emission reduction targets earn tradable Carbon Credit Certificates. We help you document the transition and calculate eligibility.",
  },
  {
    q: "What's your minimum order quantity?",
    a: "Standard MOQs start at one truckload (~25 tons). For ongoing supply contracts we structure monthly deliveries. Sample quantities are available for boiler trial runs — please ask.",
  },
  {
    q: "Where do you source feedstock?",
    a: "Across the agricultural belt — groundnut shell, mustard husk, sawdust, rice husk, sugarcane bagasse. We diversify by season and geography to ensure supply continuity through harvest cycles.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section section-bone">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Frequently asked</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              The questions{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>before</span> the quote.
            </h2>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 64, borderTop: "1px solid var(--line-strong)" }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%",
                  padding: "28px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 32,
                  textAlign: "left",
                  color: "var(--ink)",
                }}
              >
                <span
                  className="serif"
                  style={{
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.q}
                </span>
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    border: "1px solid var(--line-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 18,
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                    color: open === i ? "var(--accent)" : "var(--ink)",
                    borderColor: open === i ? "var(--accent)" : "var(--line-strong)",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: open === i ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.5s cubic-bezier(0.2,0.8,0.2,1)",
                }}
              >
                <p
                  style={{
                    paddingBottom: 28,
                    paddingRight: "20%",
                    color: "var(--ink-soft)",
                    fontSize: 16,
                    lineHeight: 1.7,
                    maxWidth: "70ch",
                  }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WhyPage() {
  return (
    <>
      <WhyHero />
      <FourReasons />
      <Calculator />
      <Now2026 />
      <BlogTeaser />
      <FAQ />
      <HomeCTA />
    </>
  );
}
