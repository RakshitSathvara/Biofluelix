type Props = { items: string[] };

export function Marquee({ items }: Props) {
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((it, i) => (
          <span key={i} className="marquee-item">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
