import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const CONTACT_INFO = [
  { icon: PhoneIcon, label: 'Teléfono', value: '+54 9 11 0000-0000', href: 'tel:+5491100000000' },
  { icon: MailIcon,  label: 'Email',    value: 'contacto@chinstalaciones.com', href: 'mailto:contacto@chinstalaciones.com' },
  { icon: MapIcon,   label: 'Zona de cobertura', value: 'Buenos Aires y alrededores', href: null },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const form = e.target
    try {
      await addDoc(collection(db, 'contact_messages'), {
        name:    form.name.value.trim(),
        email:   form.email.value.trim(),
        phone:   form.phone.value.trim(),
        message: form.message.value.trim(),
        createdAt: serverTimestamp(),
        read: false,
      })
      setSent(true)
    } catch (err) {
      setError('Hubo un problema al enviar el mensaje. Intentá de nuevo o escribinos directamente.')
    } finally {
      setSubmitting(false)
    }
  }

  function reset() {
    setSent(false)
    setError('')
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
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-amber-400/10">
                  <item.icon />
                </span>
                <div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="font-medium hover:text-amber-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-medium">{item.value}</div>
                  )}
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
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mx-auto">
                <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-semibold">¡Gracias por tu mensaje!</p>
              <p className="mt-2 text-slate-400">Nos pondremos en contacto a la brevedad.</p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 text-sm text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
              >
                Enviar otro mensaje
              </button>
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
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="phone">
                  Teléfono / WhatsApp <span className="text-slate-500 font-normal">(opcional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  placeholder="Ej: +54 9 11 XXXX-XXXX"
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
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  placeholder="Ej: necesito renovar la instalación eléctrica de mi casa"
                />
              </div>

              {error && (
                <p className="rounded-md border border-red-800 bg-red-950/40 px-4 py-2.5 text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Enviando…
                  </span>
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}
