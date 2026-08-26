import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminLogin from './components/admin/AdminLogin'
import AdminProjects from './components/admin/AdminProjects'
import AdminCarousel from './components/admin/AdminCarousel'

const isAdminRoute =
  window.location.hash.startsWith('#admin') ||
  window.location.pathname.startsWith('/admin')

function App() {
  const [user, setUser] = useState(undefined)
  const [adminTab, setAdminTab] = useState('proyectos')

  useEffect(() => {
    if (!isAdminRoute) { setUser(null); return }
    return onAuthStateChanged(auth, setUser)
  }, [])

  if (isAdminRoute) {
    if (user === undefined) return null
    if (!user) return <AdminLogin />
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Admin header with tabs */}
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-slate-950 font-bold text-sm">⚡</span>
              <span className="text-sm font-semibold">Panel Admin</span>
            </div>
            <nav className="flex items-center gap-1">
              <button
                onClick={() => setAdminTab('proyectos')}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${adminTab === 'proyectos' ? 'bg-amber-400/10 text-amber-400' : 'text-slate-400 hover:text-white'}`}
              >
                Proyectos
              </button>
              <button
                onClick={() => setAdminTab('carrusel')}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${adminTab === 'carrusel' ? 'bg-amber-400/10 text-amber-400' : 'text-slate-400 hover:text-white'}`}
              >
                Carrusel
              </button>
            </nav>
            <div className="flex items-center gap-3">
              <a href="/" className="rounded-md border border-slate-700 px-3 py-1.5 text-xs text-slate-400 hover:border-slate-500 hover:text-white transition-colors">
                Ver sitio →
              </a>
              <button
                onClick={() => signOut(auth)}
                className="rounded-md px-3 py-1.5 text-xs text-slate-500 hover:text-white transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl">
          {adminTab === 'proyectos' ? <AdminProjects /> : <AdminCarousel />}
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Carousel />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
