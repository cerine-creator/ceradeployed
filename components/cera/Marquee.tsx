const ITEMS = [
  'Sites vitrines',
  'Boutiques e-commerce',
  'QR codes',
  'Renouvellement de sites',
  'Solutions sur mesure',
  'Consultation gratuite',
];

export function Marquee() {
  const line = [...ITEMS, ...ITEMS];
  return (
    <div className="cera-marquee-wrap overflow-hidden border-y border-cera-border bg-white py-5">
      <div className="cera-marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {line.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-lg font-semibold uppercase tracking-tight text-cera-ink/85"
          >
            {item}
            <span className="ml-10 text-cera-emerald">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
