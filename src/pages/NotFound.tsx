import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";

export default function NotFound() {
  return (
    <section
      className="hero"
      style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}
    >
      <div className="hero-bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="shell">
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          404 · Page not found
        </div>
        <h1 className="display-xl serif" style={{ fontWeight: 300, maxWidth: "18ch" }}>
          That page is{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>off-grid.</span>
        </h1>
        <p className="lead" style={{ marginTop: 24, maxWidth: "44ch" }}>
          The URL you're looking for doesn't exist. Head back to the homepage or get in touch.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <Link to="/" className="btn btn-primary">
            Back to home <ArrowRight />
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
