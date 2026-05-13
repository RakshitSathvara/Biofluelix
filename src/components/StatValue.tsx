import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration: number, decimals: number, trigger: boolean) {
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    if (!trigger || startedRef.current) return;
    startedRef.current = true;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(target * eased);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, trigger]);
  return decimals > 0 ? Number(val.toFixed(decimals)) : Math.round(val);
}

type Props = { to: number; suffix?: string; decimals?: number };

export function StatValue({ to, suffix, decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCounter(to, 1800, decimals, show);
  const formatted = n.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <span ref={ref} className="stat-value">
      <span>{formatted}</span>
      {suffix && <span className="stat-suffix">{suffix}</span>}
    </span>
  );
}
