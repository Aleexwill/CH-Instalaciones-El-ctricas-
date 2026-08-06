const PROJECTS = [
  { title: 'Edificio residencial', tag: 'Residencial', color: 'from-slate-700 to-slate-900' },
  { title: 'Local comercial', tag: 'Comercial', color: 'from-amber-600 to-slate-900' },
  { title: 'Planta industrial', tag: 'Industrial', color: 'from-slate-600 to-slate-900' },
  { title: 'Casa particular', tag: 'Residencial', color: 'from-slate-800 to-slate-950' },
  { title: 'Oficinas corporativas', tag: 'Comercial', color: 'from-amber-700 to-slate-900' },
  { title: 'Tablero de fuerza', tag: 'Industrial', color: 'from-slate-700 to-slate-950' },
]

export default function Projects() {
  return (
    <section id="proyectos" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-500">
            Proyectos
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Trabajos que hablan por nosotros
          </h2>
          <p className="mt-4 text-slate-600">
            Una muestra de las instalaciones que realizamos para clientes residenciales,
            comerciales e industriales.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`group relative h-56 overflow-hidden rounded-xl bg-gradient-to-br ${project.color} p-6 flex flex-col justify-end`}
            >
              <span className="absolute top-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {project.tag}
              </span>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
