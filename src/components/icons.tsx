type IconProps = { size?: number | string };

export function FlameLeaf({ size = 24, color = "currentColor" }: { size?: number | string; color?: string }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <path
        d="M16 2C13 8 10 11 10 16c0 4 2 7 6 8 4-1 6-4 6-8 0-5-3-8-6-14z"
        fill={color}
        opacity="0.85"
      />
      <path d="M14 12c0 4 1 8 4 12-3-1-5-4-5-8 0-2 0-3 1-4z" fill={color} opacity="0.5" />
    </svg>
  );
}

export function ArrowRight({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
