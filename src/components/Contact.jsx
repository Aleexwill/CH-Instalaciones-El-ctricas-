import { useState } from 'react'

const CONTACT_INFO = [
  { icon: '📞', label: 'Teléfono', value: '+54 9 11 0000-0000' },
  { icon: '✉️', label: 'Email', value: 'contacto@chinstalaciones.com' },
  { icon: '📍', label: 'Zona de cobertura', value: 'Buenos Aires y alrededores' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-400">
            Contacto
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Pedí tu presupuesto sin compromiso
          </h2>
          <p className="mt-4 text-slate-300">
            Contanos qué necesitás y te respondemos a la brevedad con una propuesta a medida.
          </p>

          <ul className="mt-10 space-y-6">
            {CONTACT_INFO.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-amber-400/10 text-xl">
                  {item.icon}
                </span>
                <div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-slate-900 border border-slate-800 p-8 space-y-4"
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="text-4xl">✅</div>
              <p className="mt-4 text-lg font-semibold">¡Gracias por tu mensaje!</p>
              <p className="mt-2 text-slate-400">Nos pondremos en contacto a la brevedad.</p>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="message">
                  Contanos tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  placeholder="Ej: necesito renovar la instalación eléctrica de mi casa"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-300 transition-colors"
              >
                Enviar mensaje
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
