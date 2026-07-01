import { useEffect, useRef, useState } from "react";

// Dev-only chooser for the dark-section brand gradient (the `--section-dark-bg`
// token). Pick an option to preview it live on every `.section-dark` band, then
// "Use this gradient" removes the picker and logs the winning CSS so it can be
// baked into styles.css. Scroll to a dark section (CTA, founder note, etc.) to
// see the preview.
//
// THROWAWAY: once the gradient is chosen, delete this file and its import/mount
// in Layout.tsx. It only renders under `import.meta.env.DEV`, so it never ships.

// Self-contained dev gate — avoids needing a project-wide `vite/client` types
// reference just for this throwaway tool.
const IS_DEV =
  (import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV === true;

type GradientOption = { name: string; value: string; note: string };

// Dark-safe options only — light cream text sits on top of these, so they stay
// in the deep-green range (the constant gold glow is layered in CSS on top).
const GRADIENTS: GradientOption[] = [
  {
    name: "Forest (recommended)",
    value: "linear-gradient(150deg, #2d5a3d 0%, #1a3a24 52%, #0f2818 100%)",
    note: "moss → forest → deep — matches the shipped default",
  },
  {
    name: "Forest, lifted",
    value: "linear-gradient(150deg, #3a6b49 0%, #1a3a24 55%, #0f2818 100%)",
    note: "brighter top, same depth",
  },
  {
    name: "Deep forest radial",
    value: "radial-gradient(ellipse at 30% 20%, #2d5a3d 0%, #0f2818 78%)",
    note: "spotlight from the top",
  },
  {
    name: "Gilded forest (bold)",
    value:
      "linear-gradient(135deg, #d4b962 0%, #b89a4e 34%, #2d5a3d 72%, #1a3a24 100%)",
    note: "gold corner — check text contrast before shipping",
  },
];

export function GradientPicker() {
  const [index, setIndex] = useState(-1); // -1 = untouched (current design)
  const [done, setDone] = useState(false);
  const committed = useRef(false);

  const CSS_VAR = "--section-dark-bg";
  const root = document.documentElement;

  // Restore the stylesheet default on Reset / unmount — unless the user has
  // committed to a choice.
  useEffect(() => {
    return () => {
      if (!committed.current) root.style.removeProperty(CSS_VAR);
    };
  }, [root]);

  // Live preview: an inline override of the token on <html> re-tints every
  // .section-dark band across all routes.
  useEffect(() => {
    if (index >= 0) root.style.setProperty(CSS_VAR, GRADIENTS[index].value);
  }, [index, root]);

  if (!IS_DEV || done) return null;

  const reset = () => {
    setIndex(-1);
    root.style.removeProperty(CSS_VAR);
  };

  const apply = () => {
    if (index < 0) return;
    const g = GRADIENTS[index];
    root.style.setProperty(CSS_VAR, g.value);
    committed.current = true; // keep it applied after unmount
    console.log(
      `[GradientPicker] Chosen: ${g.name}\n${CSS_VAR}: ${g.value};`
    );
    setDone(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        left: 20,
        bottom: 20,
        zIndex: 9999,
        width: 300,
        padding: 16,
        borderRadius: 14,
        background: "rgba(15, 40, 24, 0.94)",
        border: "1px solid rgba(212, 185, 98, 0.4)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        color: "#f5f0e6",
        fontFamily: "Inter, system-ui, sans-serif",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "#d4b962",
          marginBottom: 10,
        }}
      >
        Dark-section gradient · dev
      </div>

      <label
        htmlFor="gradient-picker-select"
        style={{ display: "block", fontSize: 12, opacity: 0.8, marginBottom: 6 }}
      >
        Tint every dark section (scroll to one)
      </label>
      <select
        id="gradient-picker-select"
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "9px 10px",
          borderRadius: 8,
          border: "1px solid rgba(212, 185, 98, 0.5)",
          background: "#1a3a24",
          color: "#f5f0e6",
          fontSize: 14,
          fontFamily: "inherit",
          cursor: "pointer",
        }}
      >
        <option value={-1}>— current design —</option>
        {GRADIENTS.map((g, i) => (
          <option key={g.name} value={i}>
            {g.name}
          </option>
        ))}
      </select>

      {index >= 0 && (
        <p style={{ fontSize: 12, opacity: 0.75, margin: "8px 0 0" }}>
          {GRADIENTS[index].note}
        </p>
      )}

      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        <button
          onClick={apply}
          disabled={index < 0}
          style={{
            flex: 1,
            padding: "9px 12px",
            borderRadius: 8,
            border: "none",
            background: index < 0 ? "rgba(212,185,98,0.35)" : "#d4b962",
            color: "#0f2818",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "inherit",
            cursor: index < 0 ? "not-allowed" : "pointer",
          }}
        >
          Use this gradient
        </button>
        <button
          onClick={reset}
          style={{
            padding: "9px 12px",
            borderRadius: 8,
            border: "1px solid rgba(245, 240, 230, 0.3)",
            background: "transparent",
            color: "#f5f0e6",
            fontSize: 13,
            fontFamily: "inherit",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      <p style={{ fontSize: 11, opacity: 0.6, margin: "10px 0 0" }}>
        Picking removes this panel and logs the CSS to the console.
      </p>
    </div>
  );
}
