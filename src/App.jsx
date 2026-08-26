import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminLogin from './components/admin/AdminLogin'
import AdminProjects from './components/admin/AdminProjects'

const isAdminRoute = window.location.pathname.startsWith('/admin')

function App() {
  const [user, setUser] = useState(undefined) // undefined = loading

  useEffect(() => {
    if (!isAdminRoute) { setUser(null); return }
    return onAuthStateChanged(auth, setUser)
  }, [])

  if (isAdminRoute) {
    if (user === undefined) return null // auth loading
    if (!user) return <AdminLogin />
    return <AdminProjects />
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
