const SERVICES = [
  {
    icon: '🏠',
    title: 'Instalaciones residenciales',
    desc: 'Cableado, tableros, iluminación y puesta a tierra para casas y departamentos.',
  },
  {
    icon: '🏢',
    title: 'Instalaciones comerciales',
    desc: 'Proyectos eléctricos para oficinas, locales y edificios comerciales.',
  },
  {
    icon: '🏭',
    title: 'Instalaciones industriales',
    desc: 'Tableros de fuerza, media tensión y automatización para plantas industriales.',
  },
  {
    icon: '🔧',
    title: 'Mantenimiento preventivo',
    desc: 'Revisiones periódicas para prevenir fallas y prolongar la vida útil de tu instalación.',
  },
  {
    icon: '🚨',
    title: 'Urgencias eléctricas',
    desc: 'Atención rápida ante cortocircuitos, apagones y fallas eléctricas críticas.',
  },
  {
    icon: '📋',
    title: 'Certificaciones y normativa',
    desc: 'Inspecciones y certificados que aseguran el cumplimiento de la normativa vigente.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-500">
            Servicios
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Soluciones eléctricas para cada necesidad
          </h2>
          <p className="mt-4 text-slate-600">
            Trabajamos con los más altos estándares de seguridad y calidad, cumpliendo con la
            normativa eléctrica vigente en cada instalación.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
