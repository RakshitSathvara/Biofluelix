import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "../components/icons";

function ContactHero() {
  return (
    <header className="hero">
      <div className="hero-bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="shell">
        <div className="hero-eyebrow-row reveal">
          <div className="eyebrow">Contact · Let's talk</div>
          <div className="eyebrow no-bar mono" style={{ color: "var(--ink-soft)" }}>
            Mon – Sat · 9:00 – 18:30 IST
          </div>
        </div>
        <h1
          className="display-xxl hero-headline reveal"
          style={{ transitionDelay: "0.15s", maxWidth: "16ch" }}
        >
          Let's power your <span className="accent-mark italic">transition</span> to green energy.
        </h1>
        <div className="hero-meta-row reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="lead">
            Whether you're ready to switch to biomass or just exploring your options, our energy
            consultants are here to help. Reach out through any of the channels below.
          </p>
          <div className="hero-cta-row">
            <a href="mailto:info@biofuelix.com" className="btn btn-ghost">
              info@biofuelix.com
            </a>
            <a href="tel:+919000000000" className="btn btn-primary">
              +91 90000 00000 <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ContactBlock({
  label,
  children,
  last,
}: {
  label: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div
      style={{
        paddingBottom: last ? 0 : 24,
        marginBottom: last ? 0 : 24,
        borderBottom: last ? "none" : "1px solid rgba(245,240,230,0.12)",
      }}
    >
      <div
        className="mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "rgba(245,240,230,0.5)",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

function ContactBody() {
  return (
    <section className="section">
      <div className="shell">
        <div
          className="reveal"
          style={{
            maxWidth: 560,
            margin: "0 auto",
            padding: "clamp(32px, 4vw, 56px)",
            background: "var(--forest-deep)",
            color: "var(--cream)",
            borderRadius: 8,
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "var(--accent-bright)",
              marginBottom: 24,
            }}
          >
            DIRECT CHANNELS
          </div>

          <ContactBlock label="Email">
            <a href="mailto:info@biofuelix.com">info@biofuelix.com</a>
            <br />
            <a href="mailto:sales@biofuelix.com">sales@biofuelix.com</a>
          </ContactBlock>

          <ContactBlock label="Phone">
            <a href="tel:+919000000000">+91 90000 00000</a>
          </ContactBlock>

          <ContactBlock label="WhatsApp Business">
            <a href="#">
              Open chat <ArrowUpRight size={12} />
            </a>
            <div style={{ fontSize: 13, color: "rgba(245,240,230,0.55)", marginTop: 4 }}>
              For quick quote requests
            </div>
          </ContactBlock>

          <ContactBlock label="Trading hours">
            Mon – Sat
            <br />
            9:00 AM – 6:30 PM IST
          </ContactBlock>

          <ContactBlock label="Headquarters" last>
            Biofuelix Solutions Pvt. Ltd.
            <br />
            New Delhi, India
            <br />
            <span style={{ color: "rgba(245,240,230,0.55)", fontSize: 13 }}>
              Address details on request
            </span>
          </ContactBlock>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
    </>
  );
}
