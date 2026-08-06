export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-amber-400/10 border border-amber-400/30 px-4 py-1 text-sm text-amber-300 mb-6">
            Electricistas certificados
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Instalaciones eléctricas seguras y confiables
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            En CH Instalaciones Eléctricas ofrecemos soluciones eléctricas para hogares,
            comercios e industrias. Calidad, seguridad y cumplimiento normativo en cada proyecto.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-md bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-300 transition-colors"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#servicios"
              className="rounded-md border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:border-amber-400 hover:text-amber-300 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            ['+15', 'años de experiencia'],
            ['500+', 'proyectos realizados'],
            ['24/7', 'atención de urgencias'],
            ['100%', 'trabajos garantizados'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-center"
            >
              <div className="text-3xl font-bold text-amber-400">{value}</div>
              <div className="mt-1 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
