import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { GradientPicker } from "./GradientPicker";
import { useReveal } from "../hooks/useReveal";

export function Layout() {
  useReveal();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <FloatingWhatsApp />
      <GradientPicker />
    </>
  );
}
