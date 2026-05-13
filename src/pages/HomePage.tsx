import { Hero } from "../sections/Hero";
import { MarqueeBand } from "../sections/MarqueeBand";
import { Pillars } from "../sections/Pillars";
import { ProductsPreview } from "../sections/ProductsPreview";
import { WhyNow } from "../sections/WhyNow";
import { FounderNote } from "../sections/FounderNote";
import { HomeCTA } from "../sections/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Pillars />
      <ProductsPreview />
      <WhyNow />
      <FounderNote />
      <HomeCTA />
    </>
  );
}
