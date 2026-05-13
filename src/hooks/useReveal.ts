import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger");
    els.forEach((e) => e.classList.remove("in"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);
}
