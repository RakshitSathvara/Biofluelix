import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";

export function HomeCTA() {
  return (
    <section className="section section-dark">
      <div className="shell" style={{ textAlign: "center" }}>
        <div
          className="eyebrow no-bar reveal"
          style={{ justifyContent: "center", marginBottom: 24 }}
        >
          Get started
        </div>
        <h2
          className="display-xl serif reveal"
          style={{ maxWidth: "16ch", margin: "0 auto", transitionDelay: "0.1s" }}
        >
          Ready to{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>de-carbonize</span>
          <br />
          your operations?
        </h2>
        <p
          className="lead reveal"
          style={{ margin: "32px auto 40px", textAlign: "center", transitionDelay: "0.2s" }}
        >
          Tell us about your boiler, your monthly tonnage, and your timeline. We'll come back with a
          quote, and a transition plan.
        </p>
        <div
          className="reveal"
          style={{
            transitionDelay: "0.3s",
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/contact" className="btn btn-primary">
            Request a quote <ArrowRight />
          </Link>
          <Link to="/products" className="btn btn-ghost">
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
