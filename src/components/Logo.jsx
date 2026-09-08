export default function Logo({ style = {} }) {
  return (
    <img
      src="/logo.png"
      alt="CH Instalaciones — Servicios Eléctricos"
      style={{
        height: '52px',
        width: 'auto',
        display: 'block',
        mixBlendMode: 'screen',   // black background disappears on dark nav
        ...style,
      }}
    />
  )
}
