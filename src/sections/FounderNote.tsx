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
      <svg viewBox="0 0 400 500" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d6f4d" />
            <stop offset="100%" stopColor="#0f2818" />
          </linearGradient>
          <radialGradient id="lightGrad" cx="0.4" cy="0.3">
            <stop offset="0%" stopColor="rgba(212,185,98,0.25)" />
            <stop offset="100%" stopColor="rgba(212,185,98,0)" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bgGrad)" />
        <rect width="400" height="500" fill="url(#lightGrad)" />

        <g opacity="0.85">
          <circle cx="155" cy="200" r="48" fill="#1a3a24" />
          <path d="M 95 500 Q 95 320 155 290 Q 215 320 215 500 Z" fill="#1a3a24" />
          <circle cx="265" cy="220" r="46" fill="#143020" />
          <path d="M 200 500 Q 200 340 265 312 Q 325 340 325 500 Z" fill="#143020" />
        </g>

        <g opacity="0.15" fill="#d4b962">
          <path d="M 350 80 Q 380 100 370 140 Q 360 110 340 110 Z" />
          <path d="M 50 400 Q 30 420 50 450 Q 70 425 50 400 Z" />
        </g>

        <g>
          <rect x="20" y="460" width="170" height="24" fill="rgba(15,40,24,0.7)" rx="12" />
          <text
            x="32"
            y="476"
            fill="#d4b962"
            fontFamily="monospace"
            fontSize="10"
            letterSpacing="2"
          >
            FOUNDERS · NEW DELHI
          </text>
        </g>
      </svg>
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
        PORTRAIT · TBD
      </div>
    </div>
  );
}

export function FounderNote() {
  return (
    <section className="section section-cream">
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
              A note from the founders
            </div>
            <p className="display-l serif" style={{ fontWeight: 300, marginBottom: 32 }}>
              "We don't just facilitate transactions — we take on{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                the responsibility
              </span>{" "}
              of the supply chain so you can focus on your core operations."
            </p>
            <p style={{ color: "var(--ink-soft)", maxWidth: "52ch", marginBottom: 24 }}>
              When we first looked into the biomass industry, we didn't just see agricultural waste;
              we saw an untapped solution to one of our generation's greatest challenges. But we also
              saw the friction. Industrial leaders wanted to go green — they were held back by
              inconsistent supply and varying quality. The world didn't need more fuel. It needed a
              better bridge.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 32 }}>
              <div
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: 32,
                  color: "var(--forest)",
                  lineHeight: 1,
                }}
              >
                Anjali & Sandeep Nair
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                marginTop: 8,
              }}
            >
              Co-Founders · Biofuelix Solutions
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
