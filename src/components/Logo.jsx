/**
 * CH Instalaciones logo mark — rendered with HTML so Barlow Condensed
 * (already loaded in <head>) applies correctly. Font-size on the wrapper
 * drives every proportion via em units.
 *
 * Usage in navbar:  <Logo />
 * Usage large:      <Logo style={{ fontSize: '3rem' }} />
 */
export default function Logo({ className = '', style = {} }) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1,
        userSelect: 'none',
        fontSize: '1.75rem',   // base — override via style prop for other sizes
        ...style,
      }}
      aria-label="CH Instalaciones"
    >
      {/* Lettermark: C ⚡ H */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.01em' }}>
        <span style={letterStyle}>C</span>

        {/* Lightning bolt — proportional to parent font-size */}
        <svg
          viewBox="0 0 10 18"
          aria-hidden="true"
          style={{ height: '0.82em', width: 'auto', flexShrink: 0, display: 'block', margin: '0 0.03em' }}
        >
          <polygon
            points="8,0 2.5,8.5 6,8.5 1.5,18 10,9.5 6,9.5 9.5,0"
            fill="#FBBF24"
          />
        </svg>

        <span style={letterStyle}>H</span>
      </div>

      {/* Wordmark */}
      <span style={wordmarkStyle}>INSTALACIONES</span>
    </div>
  )
}

const letterStyle = {
  fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
  fontWeight: 800,
  fontStyle: 'italic',
  color: 'white',
  fontSize: '1em',
  lineHeight: 1,
}

const wordmarkStyle = {
  fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
  fontWeight: 700,
  fontStyle: 'normal',
  color: 'white',
  fontSize: '0.26em',
  letterSpacing: '0.18em',
  marginTop: '0.4em',
  textTransform: 'uppercase',
}
