import { useState, type ReactNode, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, FlameLeaf } from "../components/icons";

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
            consultants are here to help. Tell us about your operation — we'll come back with a plan.
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

const inp: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  fontSize: 16,
  fontFamily: "var(--font-body)",
  border: "1px solid var(--line-strong)",
  borderRadius: 6,
  background: "var(--paper)",
  color: "var(--ink)",
  outline: "none",
  transition: "border-color 0.2s",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label style={{ display: "block" }}>
      <div
        className="mono"
        style={{
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-faint)",
          marginBottom: 10,
        }}
      >
        {label}
        {required && <span style={{ color: "var(--accent)", marginLeft: 4 }}>·</span>}
      </div>
      {children}
    </label>
  );
}

type FormState = {
  name: string;
  company: string;
  industry: string;
  interest: string[];
  fuel: string;
  tonnage: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  industry: "Textile",
  interest: ["briquettes"],
  fuel: "Coal",
  tonnage: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleInterest = (k: string) => {
    setForm((f) => {
      const has = f.interest.includes(k);
      return { ...f, interest: has ? f.interest.filter((x) => x !== k) : [...f.interest, k] };
    });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div
        className="reveal"
        style={{
          padding: "clamp(40px, 6vw, 80px)",
          background: "var(--forest-deep)",
          borderRadius: 8,
          color: "var(--cream)",
          textAlign: "center",
        }}
      >
        <FlameLeaf size={48} color="var(--accent-bright)" />
        <h3 className="display-l serif" style={{ fontWeight: 300, margin: "32px 0 24px" }}>
          Thank you, {form.name.split(" ")[0] || "friend"}.
        </h3>
        <p
          className="lead"
          style={{ color: "rgba(245,240,230,0.75)", margin: "0 auto", maxWidth: "44ch" }}
        >
          Your enquiry is in. A Biofuelix consultant will be in touch within one working day with
          samples, technical specs, and a transition plan.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm(EMPTY);
          }}
          className="btn btn-ghost"
          style={{ marginTop: 40, borderColor: "rgba(245,240,230,0.3)", color: "var(--cream)" }}
        >
          Send another <ArrowRight />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="reveal" style={{ display: "grid", gap: 24 }}>
      <div
        className="form-row"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        <Field label="Full name" required>
          <input
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
            style={inp}
            placeholder="Your name"
          />
        </Field>
        <Field label="Company name" required>
          <input
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            required
            style={inp}
            placeholder="Company / Organization"
          />
        </Field>
      </div>

      <div
        className="form-row"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        <Field label="Industry">
          <select
            value={form.industry}
            onChange={(e) => update("industry", e.target.value)}
            style={inp}
          >
            {[
              "Textile",
              "Food Processing",
              "Chemical",
              "Brick Kiln",
              "Paper & Pulp",
              "Power Plant",
              "Hospitality",
              "Other",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="Current primary fuel">
          <select value={form.fuel} onChange={(e) => update("fuel", e.target.value)} style={inp}>
            {["Coal", "Diesel", "Natural Gas", "Firewood", "None / New Project"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Interested in (select all that apply)">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 4 }}>
          {[
            { k: "briquettes", l: "Biomass Briquettes" },
            { k: "pellets", l: "Biomass Pellets" },
            { k: "consult", l: "Technical Consultation" },
            { k: "audit", l: "ESG / Carbon Audit" },
          ].map((opt) => {
            const on = form.interest.includes(opt.k);
            return (
              <button
                type="button"
                key={opt.k}
                onClick={() => toggleInterest(opt.k)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: `1px solid ${on ? "var(--forest)" : "var(--line-strong)"}`,
                  background: on ? "var(--forest)" : "transparent",
                  color: on ? "var(--cream)" : "var(--ink)",
                  fontSize: 14,
                  transition: "all 0.2s",
                }}
              >
                {opt.l}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Estimated monthly consumption">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <input
            value={form.tonnage}
            onChange={(e) => update("tonnage", e.target.value)}
            style={{ ...inp, flex: 1 }}
            placeholder="e.g. 250"
            type="number"
          />
          <span
            className="mono"
            style={{ fontSize: 13, color: "var(--ink-faint)", letterSpacing: "0.1em" }}
          >
            TONS / MONTH
          </span>
        </div>
      </Field>

      <Field label="How can we help you today?">
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          style={{ ...inp, resize: "vertical", fontFamily: "var(--font-body)" }}
          placeholder="Tell us about your boiler type, transition timeline, or any questions..."
        />
      </Field>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 8,
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            color: "var(--ink-faint)",
            textTransform: "uppercase",
          }}
        >
          We respond within 1 working day
        </div>
        <button type="submit" className="btn btn-primary">
          Send enquiry <ArrowRight />
        </button>
      </div>

      <style>{`@media (max-width: 720px) { .form-row { grid-template-columns: 1fr !important; } }`}</style>
    </form>
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
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "clamp(48px, 6vw, 96px)",
          }}
        >
          <div>
            <h2
              className="display-m serif reveal"
              style={{ fontWeight: 400, marginBottom: 8 }}
            >
              Tell us about your operation.
            </h2>
            <p className="lead reveal" style={{ marginBottom: 48, transitionDelay: "0.1s" }}>
              The more context you give us, the faster we can come back with samples and a precise
              quote.
            </p>
            <ContactForm />
          </div>

          <aside className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div
              style={{
                padding: "clamp(28px, 3vw, 40px)",
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
          </aside>
        </div>
        <style>{`@media (max-width: 880px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
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
