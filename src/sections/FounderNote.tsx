import { Link } from "react-router-dom";
import { ArrowUpRight } from "../components/icons";

export { FounderPortrait };

function FounderPortrait() {
  return (
    <div
      style={{
        aspectRatio: "4/5",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(135deg, #2d5a3d 0%, #0f2818 100%)",
      }}
    >
      <img
        src="/assets/anjali-nair.jpg"
        alt="Anjali Nair, Founder of Biofuelix Solutions"
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
          top: 16,
          right: 16,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          color: "rgba(245,240,230,0.6)",
          background: "rgba(15,40,24,0.5)",
          padding: "6px 10px",
          borderRadius: 999,
          backdropFilter: "blur(8px)",
        }}
      >
        PORTRAIT · ANJALI NAIR
      </div>
    </div>
  );
}

export function FounderNote() {
  return (
    <section className="section section-dark">
      <div className="shell">
        <div
          className="founder-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <FounderPortrait />
          </div>
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              A note from the founder
            </div>
            <p className="display-l serif" style={{ fontWeight: 300, marginBottom: 32 }}>
              "We don't just facilitate transactions — we take on{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                the responsibility
              </span>{" "}
              of the supply chain so you can focus on your core operations."
            </p>
            <p style={{ color: "rgba(245, 240, 230, 0.68)", maxWidth: "52ch", marginBottom: 24 }}>
              When I first looked into the biomass industry, I didn't just see agricultural waste; I
              saw an untapped solution to one of our generation's greatest challenges. But I also saw
              the friction. Industrial leaders wanted to go green — they were held back by
              inconsistent supply and varying quality. The world didn't need more fuel. It needed a
              better bridge.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 32 }}>
              <div
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: 32,
                  color: "var(--accent-bright)",
                  lineHeight: 1,
                }}
              >
                Anjali Nair
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(245, 240, 230, 0.5)",
                marginTop: 8,
              }}
            >
              Founder · Biofuelix Solutions
            </div>
            <Link to="/about" className="tlink" style={{ marginTop: 32 }}>
              Read the full message <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .founder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
