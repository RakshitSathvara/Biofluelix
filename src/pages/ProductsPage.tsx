import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";
import { HomeCTA } from "../sections/HomeCTA";

type Spec = { l: string; v: string };

const BRIQUETTE_SPECS: Spec[] = [
  { l: "Diameter", v: "60 – 100 mm" },
  { l: "Calorific value", v: "3,800 – 4,200 kcal/kg" },
  { l: "Moisture content", v: "< 10%" },
  { l: "Ash content", v: "5 – 10%" },
  { l: "Shape", v: "Cylindrical logs" },
];

const PELLET_SPECS: Spec[] = [
  { l: "Diameter", v: "6 – 12 mm" },
  { l: "Calorific value", v: "4,200 – 4,500 kcal/kg" },
  { l: "Moisture content", v: "< 8%" },
  { l: "Ash content", v: "< 2%" },
  { l: "Shape", v: "Small uniform cylinders" },
];

function ProductsHero() {
  return (
    <header className="hero">
      <div className="hero-bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="shell">
        <div className="hero-eyebrow-row reveal">
          <div className="eyebrow">Products · Catalogue</div>
          <div className="eyebrow no-bar mono" style={{ color: "var(--ink-soft)" }}>
            Two formats · Five feedstocks
          </div>
        </div>
        <h1
          className="display-xxl hero-headline reveal"
          style={{ transitionDelay: "0.15s", maxWidth: "24ch" }}
        >
          Engineering sustainable
          <br />
          <span className="accent-mark italic">energy solutions.</span>
          <br />
          <span className="accent-mark italic" style={{ color: "var(--leaf)" }}>Switch to biocoal.</span>
        </h1>
        <p
          className="serif reveal"
          style={{
            transitionDelay: "0.22s",
            fontSize: "clamp(20px, 2.4vw, 30px)",
            fontWeight: 300,
            color: "var(--ink-soft)",
            marginTop: 24,
            maxWidth: "30ch",
            lineHeight: 1.3,
          }}
        >
          Waste becomes <span className="italic" style={{ color: "var(--accent)" }}>fuel.</span> Fuel
          becomes <span className="italic" style={{ color: "var(--accent)" }}>carbon credit.</span>{" "}
          Carbon credit becomes{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>margin.</span>
        </p>
        <div className="hero-meta-row reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="lead">
            From the heavy-duty workhorse briquettes to the precision-grade pellet, our range is built around
            what your boiler actually needs — and what your auditors will ask about next quarter.
          </p>
          <div className="hero-cta-row">
            <a href="#compare" className="btn btn-ghost">
              Compare specs
            </a>
            <Link to="/contact" className="btn btn-primary">
              Request samples <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const PRODUCT_PHOTOS: Record<"briquettes" | "pellets", string> = {
  briquettes: "/assets/briquettes.jpg",
  pellets: "/assets/pellets.jpg",
};

function ProductVisual({ variant }: { variant: "briquettes" | "pellets" }) {
  const isBriquette = variant === "briquettes";
  return (
    <div
      style={{
        aspectRatio: "4/5",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        background: isBriquette
          ? "linear-gradient(140deg, #2d5a3d 0%, #0f2818 100%)"
          : "linear-gradient(140deg, #b89a4e 0%, #6b5320 100%)",
      }}
    >
      <img
        src={PRODUCT_PHOTOS[variant]}
        alt={
          isBriquette
            ? "High-density biomass briquettes — the eco-friendly bio-coal substitute"
            : "Precision-grade biomass pellets for automated combustion systems"
        }
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
            "linear-gradient(180deg, rgba(15,40,24,0) 50%, rgba(15,40,24,0.55) 100%)",
        }}
      />
      <div
        className="mono"
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "#d4b962",
          background: "rgba(15,40,24,0.7)",
          padding: "6px 12px",
          borderRadius: 12,
        }}
      >
        {isBriquette ? "BIO-COAL · 60-100mm" : "PRECISION · 6-12mm"}
      </div>
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          color: "rgba(245,240,230,0.7)",
          background: "rgba(15,40,24,0.5)",
          padding: "6px 10px",
          borderRadius: 999,
          backdropFilter: "blur(8px)",
        }}
      >
        {isBriquette ? "FIG. 01" : "FIG. 02"}
      </div>
    </div>
  );
}

type DetailProps = {
  id: "briquettes" | "pellets";
  num: string;
  title: string;
  italicWord: string;
  trailWord: string;
  tag: string;
  sub: string;
  desc: string;
  specs: Spec[];
  bestFor: string[];
  enquireWord: string;
  swap?: boolean;
};

function ProductDetailSection(p: DetailProps) {
  return (
    <section id={p.id} className={`section ${p.swap ? "section-bone" : ""}`}>
      <div className="shell">
        <div
          className="prod-grid"
          style={{
            display: "grid",
            gridTemplateColumns: p.swap ? "1fr 1.1fr" : "1.1fr 1fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "center",
          }}
        >
          <div className="reveal" style={{ order: p.swap ? 2 : 1 }}>
            <ProductVisual variant={p.id} />
          </div>

          <div className="reveal" style={{ order: p.swap ? 1 : 2, transitionDelay: "0.1s" }}>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "var(--accent)",
                marginBottom: 16,
              }}
            >
              {p.num} · {p.tag}
            </div>
            <h2 className="display-xl serif" style={{ fontWeight: 300, marginBottom: 12 }}>
              <span className="italic" style={{ color: "var(--accent)" }}>{p.italicWord}</span>{" "}
              {p.trailWord}
            </h2>
            <p className="lead" style={{ marginBottom: 32, maxWidth: "44ch" }}>
              {p.sub}
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: 40, maxWidth: "52ch" }}>{p.desc}</p>

            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                marginBottom: 16,
              }}
            >
              Technical specifications
            </div>
            <div style={{ borderTop: "1px solid var(--line)" }}>
              {p.specs.map((s) => (
                <div
                  key={s.l}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--line)",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "var(--ink-soft)" }}>{s.l}</span>
                  <span
                    style={{
                      color: "var(--ink)",
                      fontWeight: 500,
                      fontFamily: "var(--font-mono)",
                      fontSize: 14,
                    }}
                  >
                    {s.v}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                  marginBottom: 16,
                }}
              >
                Best for
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.bestFor.map((b) => (
                  <span
                    key={b}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 999,
                      border: "1px solid var(--line-strong)",
                      fontSize: 13,
                      color: "var(--ink-soft)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 40 }}>
              Enquire about {p.enquireWord} <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) {
        .prod-grid { grid-template-columns: 1fr !important; }
        .prod-grid > div { order: unset !important; }
      }`}</style>
    </section>
  );
}

type Row = [string, string, string, "highlight1" | "highlight2" | undefined];

const COMPARE_ROWS: Row[] = [
  ["Size", "Large (60–100 mm)", "Small (6–12 mm)", undefined],
  ["Energy density", "High", "Very high", "highlight2"],
  ["Burn time", "Longer, steady burn", "Faster, intense heat", undefined],
  ["Handling", "Manual / Bulk", "Automated / Bagged", undefined],
  ["Ash yield", "Moderate (5–10%)", "Low (< 2%)", "highlight2"],
  ["Cost", "More economical", "Premium / High efficiency", "highlight1"],
];

function CompareSection() {
  return (
    <section id="compare" className="section section-dark">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Spec by spec</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Briquettes{" "}
              <span className="italic" style={{ color: "var(--accent-bright)" }}>vs.</span> Pellets
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              A side-by-side comparison so your procurement team can match fuel to use case at a
              glance.
            </p>
          </div>
        </div>

        <div
          className="compare-table reveal"
          style={{ borderColor: "rgba(245,240,230,0.25)", color: "var(--cream)", marginTop: 64 }}
        >
          <div
            className="compare-row head"
            style={{ borderColor: "rgba(245,240,230,0.25)" }}
          >
            <div className="compare-cell">Feature</div>
            <div className="compare-cell h-prod" style={{ color: "var(--cream)" }}>
              Briquettes
            </div>
            <div className="compare-cell h-prod" style={{ color: "var(--accent-bright)" }}>
              Pellets
            </div>
          </div>
          {COMPARE_ROWS.map((r, i) => (
            <div
              className="compare-row"
              key={i}
              style={{ borderColor: "rgba(245,240,230,0.1)" }}
            >
              <div className="compare-feature" style={{ color: "var(--cream)" }}>
                {r[0]}
              </div>
              <div
                className="compare-cell"
                data-label="Briquettes"
                style={{
                  color: r[3] === "highlight1" ? "var(--accent-bright)" : "rgba(245,240,230,0.75)",
                }}
              >
                {r[1]}
              </div>
              <div
                className="compare-cell"
                data-label="Pellets"
                style={{
                  color: r[3] === "highlight2" ? "var(--accent-bright)" : "rgba(245,240,230,0.75)",
                }}
              >
                {r[2]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEEDSTOCK = [
  {
    num: "01",
    name: "Groundnut Shell",
    avail: "High · Seasonal",
    cv: "4,000 – 4,300",
    best: "General industrial boilers, textile mills",
    note: "Low moisture and high lignin content acts as a natural binder. One of the most popular feedstocks for briquettes.",
  },
  {
    num: "02",
    name: "Mustard Husk / Stalk",
    avail: "High · Post-harvest",
    cv: "3,800 – 4,100",
    best: "Brick kilns, food processing units",
    note: "Consistent burning with excellent heat retention. Produces a steady flame favored in northern Indian kilns.",
  },
  {
    num: "03",
    name: "Sawdust & Wood Waste",
    avail: "Year-round",
    cv: "4,200 – 4,500",
    best: "Precision pellets, hotels, hospitals",
    note: "The 'cleanest' feedstock — lowest ash content (often < 1%), reducing boiler cleaning frequency.",
  },
  {
    num: "04",
    name: "Rice Husk",
    avail: "Very high",
    cv: "3,200 – 3,500",
    best: "Power plants, co-firing projects",
    note: "Lower heat value than sawdust but extremely abundant and cost-effective. Higher silica/ash content.",
  },
  {
    num: "05",
    name: "Sugarcane Bagasse",
    avail: "Seasonal · Mill season",
    cv: "3,600 – 3,900",
    best: "Cogeneration plants, paper mills",
    note: "Fibrous and fast-burning. Often blended with denser materials to balance the briquette.",
  },
];

function FeedstockSection() {
  return (
    <section id="feedstock" className="section">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">The Biofuelix Feedstock Guide</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Not all biomass
              <br />
              is <span className="italic" style={{ color: "var(--accent)" }}>created equal.</span>
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              The efficiency of combustion depends on the raw material. We source diverse
              agricultural residues to ensure year-round supply and optimal thermal performance.
            </p>
          </div>
        </div>

        <div
          className="reveal"
          style={{
            position: "relative",
            marginTop: 48,
            height: "clamp(260px, 38vw, 440px)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/feedstock-processing.jpg"
            alt="Agricultural residue processed into biomass feedstock at a Biofuelix-vetted facility"
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
                "linear-gradient(180deg, rgba(15,40,24,0) 40%, rgba(15,40,24,0.62) 100%)",
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
            Sourcing &amp; processing · Field to feedstock
          </div>
        </div>

        <div className="reveal" style={{ borderTop: "1px solid var(--line-strong)", marginTop: 48 }}>
          {FEEDSTOCK.map((f) => (
            <div
              key={f.num}
              className="feed-row"
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1.4fr 1fr 1fr 1.5fr",
                gap: 24,
                padding: "32px 0",
                borderBottom: "1px solid var(--line)",
                alignItems: "start",
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: "var(--accent)",
                  paddingTop: 6,
                }}
              >
                {f.num}
              </div>
              <div>
                <div
                  className="serif"
                  style={{
                    fontSize: 26,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    marginBottom: 8,
                  }}
                >
                  {f.name}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "var(--ink-faint)",
                    textTransform: "uppercase",
                  }}
                >
                  {f.avail}
                </div>
              </div>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                    marginBottom: 6,
                  }}
                >
                  Calorific value
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "var(--forest)",
                  }}
                >
                  {f.cv}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--ink-faint)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  kcal / kg
                </div>
              </div>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                    marginBottom: 6,
                  }}
                >
                  Best for
                </div>
                <div style={{ fontSize: 14, color: "var(--ink-soft)" }}>{f.best}</div>
              </div>
              <div style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6, paddingTop: 6 }}>
                {f.note}
              </div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 880px) {
          .feed-row { grid-template-columns: 60px 1fr !important; }
          .feed-row > div:nth-child(n+3) { grid-column: 2 / -1 !important; }
        }`}</style>
      </div>
    </section>
  );
}

const MATRIX: [string, string, string][] = [
  ["Highest heat output", "Sawdust / Groundnut shell", "Pellets or Briquettes"],
  ["Lowest ash / maintenance", "Pure sawdust", "Premium Pellets"],
  ["Lowest cost per ton", "Rice husk / Mustard husk", "Briquettes"],
  ["Automated precision", "Wood waste", "6 – 8 mm Pellets"],
];

function SelectionMatrix() {
  return (
    <section className="section section-cream tight">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Quick selection matrix</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Match your priority
              <br />
              to the <span className="italic" style={{ color: "var(--accent)" }}>right fuel.</span>
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              Tell us what matters most — heat, cleanliness, cost, or automation — and this is the
              feedstock and format we'd shortlist before you ever talk specs.
            </p>
          </div>
        </div>

        <div className="compare-table reveal">
          <div className="compare-row head">
            <div className="compare-cell">If your priority is…</div>
            <div className="compare-cell">Recommended feedstock</div>
            <div className="compare-cell">Product form</div>
          </div>
          {MATRIX.map((r) => (
            <div className="compare-row" key={r[0]}>
              <div className="compare-feature">{r[0]}</div>
              <div className="compare-cell" data-label="Recommended feedstock">
                {r[1]}
              </div>
              <div
                className="compare-cell"
                data-label="Product form"
                style={{ color: "var(--forest)", fontWeight: 500 }}
              >
                {r[2]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const QUALITY = [
  {
    t: "Moisture control",
    b: "All products are dried below 10% to prevent energy loss in transport and burn.",
  },
  {
    t: "Binding integrity",
    b: "We check for 'fines' (dust) to ensure your fuel doesn't crumble during transit and handling.",
  },
  {
    t: "Calorific verification",
    b: "We provide lab reports to confirm you are getting the energy you paid for. Every shipment.",
  },
];

function QualityPromise() {
  return (
    <section className="section section-bone tight">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Quality promise</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Every batch passes the
              <br />
              <span className="italic" style={{ color: "var(--accent)" }}>Biofuelix Check.</span>
            </h2>
          </div>
        </div>
        <div
          className="reveal qp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            marginTop: 48,
          }}
        >
          {QUALITY.map((q) => (
            <div key={q.t} style={{ borderTop: "1px solid var(--line-strong)", paddingTop: 24 }}>
              <div
                className="serif"
                style={{
                  fontSize: 26,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                  color: "var(--forest)",
                }}
              >
                {q.t}
              </div>
              <div style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6 }}>{q.b}</div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 760px) { .qp-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function BriquetteBenefits() {
  return (
    <section className="section tight">
      <div className="shell">
        <div
          className="bb-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Why briquettes
            </div>
            <h2 className="display-m serif" style={{ fontWeight: 400, marginBottom: 24 }}>
              Pure sawdust, <span className="italic" style={{ color: "var(--accent)" }}>compressed</span>{" "}
              into clean heat.
            </h2>
            <p style={{ color: "var(--ink-soft)", maxWidth: "46ch" }}>
              No chemical binders, no fillers — just high-density agricultural residue that burns
              hotter, longer, and cleaner than coal or firewood, leaving only a fraction of the ash.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <img
              src="/assets/briquettes-benefits.jpg"
              alt="Biofuelix briquettes in a jute sack — 100% natural, high heat output, low ash content, eco-friendly, compressed sawdust"
              loading="lazy"
              style={{
                width: "100%",
                display: "block",
                borderRadius: 8,
                border: "1px solid var(--line)",
              }}
            />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .bb-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function PelletProduction() {
  return (
    <section className="section section-bone tight">
      <div className="shell">
        <div
          className="reveal"
          style={{
            position: "relative",
            height: "clamp(280px, 42vw, 520px)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/pellets-production.jpg"
            alt="Freshly pressed biomass pellets pouring from a mill conveyor beside stacked timber"
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
                "linear-gradient(180deg, rgba(15,40,24,0) 45%, rgba(15,40,24,0.6) 100%)",
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
            At the mill · Precision-pressed pellets
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductDetailSection
        id="briquettes"
        num="01"
        title="Biomass Briquettes"
        italicWord="Biomass"
        trailWord="Briquettes"
        tag="THE BIO-COAL"
        sub="High-density logs created by compressing agricultural residues under high pressure — without chemical binders."
        desc="Designed specifically for industrial use, our briquettes provide a long-lasting, steady heat source that serves as a direct, eco-friendly replacement for coal and firewood. Made from groundnut shells, mustard husk, and sawdust."
        specs={BRIQUETTE_SPECS}
        bestFor={[
          "Industrial Boilers",
          "Brick Kilns",
          "Textile Mills",
          "Food Processing",
          "Casting & Forging",
          "Furnaces",
        ]}
        enquireWord="Briquettes"
      />
      <BriquetteBenefits />
      <ProductDetailSection
        id="pellets"
        num="02"
        title="Biomass Pellets"
        italicWord="Biomass"
        trailWord="Pellets"
        tag="THE PRECISION FUEL"
        sub="Small, uniform cylindrical pieces produced from finely ground and highly compressed organic waste."
        desc="Due to their uniform size and superior energy density, pellets are the preferred choice for automated combustion systems where precision temperature control and minimal maintenance are required. Extremely dry for instant ignition; minimal residue for cleaner systems."
        specs={PELLET_SPECS}
        bestFor={[
          "Automated Pellet Stoves",
          "Power Co-firing",
          "Hotels & Hospitals",
          "Commercial Kitchens",
          "Auger Boilers",
        ]}
        enquireWord="Pellets"
        swap
      />
      <PelletProduction />
      <CompareSection />
      <FeedstockSection />
      <SelectionMatrix />
      <QualityPromise />
      <HomeCTA />
    </>
  );
}
