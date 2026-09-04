import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <Logo className="h-8 w-auto" size="nav" />
        <p>© {new Date().getFullYear()} CH Instalaciones Eléctricas. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
