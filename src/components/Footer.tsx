import { Link } from "react-router-dom";
import { NAV_LINKS } from "./Nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <div className="display-m serif italic" style={{ fontWeight: 300 }}>
              Secure supply.<br />
              Stable prices.<br />
              <span style={{ color: "var(--accent-bright)" }}>Sustainable future.</span>
            </div>
            <p style={{ marginTop: 24, opacity: 0.7, fontSize: 15, maxWidth: 320 }}>
              The strategic link between agricultural abundance and industrial energy demand.
            </p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li><Link to="/products#briquettes">Biomass Briquettes</Link></li>
              <li><Link to="/products#pellets">Biomass Pellets</Link></li>
              <li><Link to="/products#feedstock">Feedstock Guide</Link></li>
              <li><Link to="/products#compare">Compare</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Reach Us</h5>
            <ul>
              <li><a href="mailto:info@biofuelix.com">info@biofuelix.com</a></li>
              <li><a href="tel:+919000000000">+91 90000 00000</a></li>
              <li><a href="#" target="_blank" rel="noopener">WhatsApp</a></li>
              <li style={{ opacity: 0.6, fontSize: 13, marginTop: 8 }}>
                Mon – Sat · 9:00 – 18:30 IST
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Biofuelix Solutions Pvt. Ltd.</span>
          <span>Bridging the gap to a greener tomorrow.</span>
        </div>
      </div>
      <div className="footer-mega">BIOFUELIX</div>
    </footer>
  );
}
