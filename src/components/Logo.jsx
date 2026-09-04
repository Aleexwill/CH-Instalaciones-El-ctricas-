export default function Logo({ className = '', size = 'nav' }) {
  const sizes = {
    nav:   { letters: 38, sub: 9.5,  gap: 4, bolt: 22, boltY: 2 },
    lg:    { letters: 64, sub: 15,   gap: 6, bolt: 36, boltY: 4 },
    hero:  { letters: 96, sub: 22,   gap: 8, bolt: 54, boltY: 6 },
  }
  const s = sizes[size] || sizes.nav
  const lh = s.letters * 0.85
  const total = s.letters * 2 + s.bolt + s.gap * 2
  const viewH = lh + s.sub + 6

  return (
    <svg
      viewBox={`0 0 ${total} ${viewH}`}
      aria-label="CH Instalaciones"
      className={className}
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,800&display=swap');`}</style>
      </defs>

      {/* C */}
      <text
        x="0"
        y={lh}
        fontFamily="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif"
        fontSize={s.letters}
        fontWeight="800"
        fontStyle="italic"
        fill="white"
        dominantBaseline="auto"
      >
        C
      </text>

      {/* Lightning bolt */}
      <g transform={`translate(${s.letters + s.gap}, ${s.boltY})`}>
        <LightningBolt size={s.bolt} />
      </g>

      {/* H */}
      <text
        x={s.letters + s.gap + s.bolt + s.gap}
        y={lh}
        fontFamily="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif"
        fontSize={s.letters}
        fontWeight="800"
        fontStyle="italic"
        fill="white"
        dominantBaseline="auto"
      >
        H
      </text>

      {/* INSTALACIONES */}
      <text
        x={total / 2}
        y={viewH}
        fontFamily="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif"
        fontSize={s.sub}
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        letterSpacing={s.sub * 0.22}
        dominantBaseline="auto"
      >
        INSTALACIONES
      </text>
    </svg>
  )
}

function LightningBolt({ size }) {
  // Proportional lightning bolt matching the logo
  const w = size * 0.62
  const h = size
  // Points: top-right angled down to mid, then to bottom-left
  const pts = [
    [w * 0.62, 0],
    [w * 0.18, h * 0.44],
    [w * 0.50, h * 0.44],
    [w * 0.00, h],
    [w * 0.82, h * 0.56],
    [w * 0.50, h * 0.56],
  ].map((p) => p.join(',')).join(' ')

  return <polygon points={pts} fill="#FBBF24" />
}
