const SERVICES = [
  {
    title: 'Instalaciones residenciales',
    desc: 'Cableado, tableros, iluminación y puesta a tierra para casas y departamentos.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M6 22L24 6l18 16v20H30V28H18v14H6V22z"/>
        <path d="M20 48V34h8v14"/>
      </svg>
    ),
  },
  {
    title: 'Instalaciones comerciales',
    desc: 'Proyectos eléctricos para oficinas, locales y edificios comerciales.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <rect x="4" y="14" width="40" height="30" rx="1.5"/>
        <path d="M4 22h40"/>
        <path d="M16 14V8a2 2 0 012-2h12a2 2 0 012 2v6"/>
        <path d="M16 30h4M28 30h4M16 36h4M28 36h4"/>
      </svg>
    ),
  },
  {
    title: 'Instalaciones industriales',
    desc: 'Tableros de fuerza, media tensión y automatización para plantas industriales.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <rect x="8" y="8" width="32" height="32" rx="2"/>
        <path d="M16 24h6l3-8 4 16 3-8h6"/>
        <path d="M8 18h4M8 30h4M36 18h4M36 30h4"/>
      </svg>
    ),
  },
  {
    title: 'Mantenimiento preventivo',
    desc: 'Revisiones periódicas para prevenir fallas y prolongar la vida útil de tu instalación.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M36 12c0 0-2-4-8-4s-10 4-10 10c0 4 2 7 5 9L10 40l4 4 14-13c2 1 4 1.5 6 1.5 6.5 0 10-4.5 10-10 0-4-2.5-7.5-4-8l-4 5-4-3 4-4.5z"/>
      </svg>
    ),
  },
  {
    title: 'Urgencias eléctricas',
    desc: 'Atención rápida ante cortocircuitos, apagones y fallas eléctricas críticas.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <circle cx="24" cy="24" r="18"/>
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4"/>
        <path strokeWidth="2" d="M27 18l-6 8h6l-6 8"/>
      </svg>
    ),
  },
  {
    title: 'Certificaciones y normativa',
    desc: 'Inspecciones y certificados que aseguran el cumplimiento de la normativa vigente.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M14 6h20a2 2 0 012 2v32a2 2 0 01-2 2H14a2 2 0 01-2-2V8a2 2 0 012-2z"/>
        <path d="M18 16h12M18 22h12M18 28h8"/>
        <path strokeWidth="2" d="M30 32l2 2 4-4"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Servicios
          </span>
          <h2
            className="mt-2 text-4xl md:text-5xl font-bold uppercase leading-none text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Soluciones eléctricas{' '}
            <span className="text-amber-400 italic">para cada necesidad</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Trabajamos con los más altos estándares de seguridad y calidad, cumpliendo con la
            normativa eléctrica vigente en cada instalación.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-slate-800 sm:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-slate-800">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-slate-900 p-7 flex flex-col gap-4 hover:bg-slate-800 transition-colors group"
            >
              <div className="text-amber-400/70 group-hover:text-amber-400 transition-colors">
                {service.svg}
              </div>
              <div>
                <h3 className="font-semibold text-white">{service.title}</h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
