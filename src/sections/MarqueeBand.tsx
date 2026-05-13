import { Marquee } from "../components/Marquee";

const ITEMS = [
  "Vetted Supply Chain",
  "Calorific Verification",
  "ESG Compliant",
  "Carbon Credit Eligible",
  "ISO-grade Quality Audit",
  "Pan-India Logistics",
  "Co-firing Ready",
];

export function MarqueeBand() {
  return <Marquee items={ITEMS} />;
}
