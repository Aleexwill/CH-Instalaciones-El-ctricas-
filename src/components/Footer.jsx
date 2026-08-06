export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-amber-400 text-slate-950 text-xs">
            ⚡
          </span>
          CH Instalaciones Eléctricas
        </div>
        <p>© {new Date().getFullYear()} CH Instalaciones Eléctricas. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
