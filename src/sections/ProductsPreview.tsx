import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "../components/icons";

const BRIQUETTE_IMG = "/assets/briquettes.jpg";
const PELLET_IMG = "/assets/pellets.jpg";

export function ProductsPreview() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Two formats · One mission</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Engineering sustainable<br />
              <span className="italic" style={{ color: "var(--accent)" }}>energy solutions.</span>
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              From the heavy-duty workhorse to the precision-grade pellet, our range is built around
              what your boiler actually needs.
            </p>
            <Link to="/products" className="tlink" style={{ marginTop: 24 }}>
              See full catalogue <ArrowUpRight />
            </Link>
          </div>
        </div>

        <p
          className="display-m serif reveal"
          style={{
            fontWeight: 300,
            marginTop: 48,
            maxWidth: "24ch",
            lineHeight: 1.25,
          }}
        >
          Waste becomes <span className="italic" style={{ color: "var(--accent)" }}>fuel.</span> Fuel
          becomes <span className="italic" style={{ color: "var(--accent)" }}>carbon credit.</span>{" "}
          Carbon credit becomes <span className="italic" style={{ color: "var(--accent)" }}>margin.</span>
        </p>

        <div className="product-grid reveal-stagger">
          <Link to="/products#briquettes" className="product-card">
            <div
              className="product-bg"
              style={{
                background: `linear-gradient(135deg, #2d5a3d, #1a3a24), url("${BRIQUETTE_IMG}") center/cover`,
                backgroundBlendMode: "multiply",
              }}
            ></div>
            <span className="product-num">01 — BIO-COAL</span>
            <span className="product-tag">60–100mm</span>
            <div className="product-title serif italic">Briquettes</div>
            <div className="product-sub">
              Also known as the Biocoal high-density logs from groundnut shell, mustard husk, and sawdust. The direct,
              eco-friendly substitute for coal and firewood.
            </div>
            <span className="product-arrow">
              View product <ArrowRight />
            </span>
          </Link>
          <Link to="/products#pellets" className="product-card">
            <div
              className="product-bg"
              style={{
                background: `linear-gradient(135deg, #b89a4e, #8a6f30), url("${PELLET_IMG}") center/cover`,
                backgroundBlendMode: "multiply",
              }}
            ></div>
            <span className="product-num">02 — PRECISION</span>
            <span className="product-tag">6–12mm</span>
            <div className="product-title serif italic">Pellets</div>
            <div className="product-sub">
              Uniform, ultra-dry, low-ash. The preferred input for automated combustion systems where
              precision and minimal maintenance matter.
            </div>
            <span className="product-arrow">
              View product <ArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
