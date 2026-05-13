import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "./icons";

export const NAV_LINKS = [
  { label: "Home", to: "/", id: "home" },
  { label: "About", to: "/about", id: "about" },
  { label: "Products", to: "/products", id: "products" },
  { label: "Why Biofuelix", to: "/why", id: "why" },
  { label: "Contact", to: "/contact", id: "contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link className="nav-brand" to="/">
        <img src="/assets/biofuelix-logo.jpeg" alt="Biofuelix Solutions" />
        <div>
          <div className="b-name">Biofuelix</div>
          <small>Solutions · Est. 2026</small>
        </div>
      </Link>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.id}>
            <Link to={l.to} className={pathname === l.to ? "active" : ""}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-cta">
        <Link
          to="/contact"
          className="btn btn-primary"
          style={{ padding: "12px 22px", fontSize: 14 }}
        >
          Get a Quote <ArrowRight size={14} />
        </Link>
      </div>
    </nav>
  );
}
