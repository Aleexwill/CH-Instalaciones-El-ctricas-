const SERVICIOS = [
  {
    num: '1',
    title: 'Instalación de soportes para TV',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <rect x="8" y="12" width="32" height="22" rx="2"/>
        <path d="M16 34v4M32 34v4M12 38h24"/>
        <path d="M4 16h4M40 16h4"/>
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Colocación de cuadros y espejos',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <rect x="10" y="10" width="28" height="28" rx="2"/>
        <path d="M18 20l4 8 4-5 3 5"/>
        <circle cx="17" cy="17" r="2"/>
        <path d="M24 8v4M24 36v4"/>
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Instalación de repisas y estantes',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M8 20h32M8 32h32"/>
        <path d="M14 20v12M34 20v12"/>
        <path d="M18 12h12M20 12v8M28 12v8"/>
        <rect x="19" y="32" width="4" height="6"/>
        <rect x="25" y="32" width="4" height="6"/>
      </svg>
    ),
  },
  {
    num: '4',
    title: 'Instalación de barrales y accesorios para cortinas',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M6 14h36"/>
        <circle cx="6" cy="14" r="2"/>
        <circle cx="42" cy="14" r="2"/>
        <path d="M12 14v20c0 1.5 2 2 2 0V16M20 14v18c0 2 2 2 2 0V16M28 14v20c0 2 2 2 2 0V16M36 14v18c0 2 2 2 2 0V16"/>
      </svg>
    ),
  },
  {
    num: '5',
    title: 'Instalación y cambio de luminarias',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M24 6v4"/>
        <path d="M24 10c-5.5 0-9 4-9 8 0 3.5 2 6 5 7.5V30h8v-4.5c3-1.5 5-4 5-7.5 0-4-3.5-8-9-8z"/>
        <path d="M20 30v2a2 2 0 004 0v-2"/>
        <path d="M10 14l2.5 2.5M38 14l-2.5 2.5M6 24h4M38 24h4"/>
      </svg>
    ),
  },
  {
    num: '6',
    title: 'Instalación de ventiladores de techo',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <circle cx="24" cy="22" r="3"/>
        <path d="M24 6v13"/>
        <path d="M24 22c-3-6-8-8-12-6 1 4 5 7 12 6z"/>
        <path d="M24 22c6-3 8-8 6-12-4 1-7 5-6 12z"/>
        <path d="M24 22c3 6 8 8 12 6-1-4-5-7-12-6z"/>
        <path d="M24 22c-6 3-8 8-6 12 4-1 7-5 6-12z"/>
        <path d="M24 25v6"/>
        <circle cx="24" cy="32" r="2"/>
      </svg>
    ),
  },
  {
    num: '7',
    title: 'Cambio y mejora de accesorios eléctricos',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <rect x="10" y="10" width="12" height="16" rx="1.5"/>
        <rect x="26" y="10" width="12" height="16" rx="1.5"/>
        <path d="M14 14v4M18 14v4"/>
        <circle cx="32" cy="18" r="3"/>
        <path d="M10 30h12v8H10zM26 30h12v8H26z"/>
      </svg>
    ),
  },
  {
    num: '8',
    title: 'Fijación e instalación de accesorios para el hogar',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M24 8l-14 10v20h28V18L24 8z"/>
        <path d="M18 38V28h12v10"/>
        <path d="M21 22h6M24 19v6"/>
      </svg>
    ),
  },
]

const GARANTIAS = [
  { icon: ShieldIcon, text: 'Trabajo seguro y profesional' },
  { icon: ClockIcon,  text: 'Rápido, limpio y ordenado' },
  { icon: StarIcon,   text: 'Responsabilidad y confianza' },
  { icon: CheckIcon,  text: 'Atención puntual' },
]

export default function SolucionesHogar() {
  return (
    <section id="hogar" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Servicios para el hogar
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-bold uppercase leading-none text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Soluciones{' '}
            <span className="text-amber-400 italic">para el hogar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Esas pequeñas cosas pendientes en tu hogar…{' '}
            <span className="text-amber-400 font-medium">nosotros las resolvemos.</span>
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800 rounded-xl overflow-hidden border border-slate-800">
          {SERVICIOS.map((s) => (
            <div
              key={s.num}
              className="bg-slate-900 p-6 flex flex-col items-center text-center gap-3 hover:bg-slate-800 transition-colors group"
            >
              <div className="relative">
                <span
                  className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-slate-950 text-xs font-bold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.num}
                </span>
                <div className="text-amber-400/70 group-hover:text-amber-400 transition-colors pl-3 pt-1">
                  {s.svg}
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 leading-tight">
                {s.title}
              </p>
            </div>
          ))}
        </div>

        {/* Garantías */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {GARANTIAS.map((g) => (
            <div key={g.text} className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3">
              <g.icon />
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-300 leading-tight">
                {g.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-amber-400/30 bg-amber-400/5 px-6 py-5">
          <div className="flex items-center gap-4">
            <WhatsAppIcon />
            <div>
              <p className="text-sm text-slate-400">¿Tenés algo para hacer en tu casa?</p>
              <p
                className="text-xl font-bold text-white uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                ¡Escribinos!
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5930984480486"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg bg-amber-400 px-6 py-3 font-bold text-slate-950 hover:bg-amber-300 transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', letterSpacing: '0.03em' }}
          >
            <WhatsAppIcon dark />
            0984 480 486
          </a>
        </div>

      </div>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
function StarIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
function WhatsAppIcon({ dark = false }) {
  return (
    <svg className={`h-7 w-7 flex-shrink-0 ${dark ? 'text-slate-950' : 'text-[#25D366]'}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
