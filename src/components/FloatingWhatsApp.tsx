import { WhatsApp } from "./icons";

// Site-wide floating WhatsApp button. Quick quotes over WhatsApp are a primary
// channel for the Indian biomass market, so it stays pinned to every page.
export function FloatingWhatsApp() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/919000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Biofuelix on WhatsApp"
      title="Chat on WhatsApp"
    >
      <WhatsApp size={30} color="#fff" />
    </a>
  );
}
