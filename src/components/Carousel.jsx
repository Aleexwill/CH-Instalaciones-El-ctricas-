import { useState, useEffect, useCallback } from 'react'
import { useCarousel } from '../hooks/useCarousel'

const FALLBACK_SLIDES = [
  {
    id: 'f1',
    image: '',
    gradient: 'from-slate-900 via-slate-800 to-slate-950',
    title: 'Instalaciones eléctricas seguras y confiables',
    subtitle: 'Soluciones para hogares, comercios e industrias',
  },
]

const INTERVAL = 5000

export default function Carousel() {
  const { slides, loading } = useCarousel({ onlyActive: true })
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const activeSlides = slides.length > 0 ? slides : FALLBACK_SLIDES

  const next = useCallback(() => setCurrent((c) => (c + 1) % activeSlides.length), [activeSlides.length])
  const prev = () => setCurrent((c) => (c - 1 + activeSlides.length) % activeSlides.length)

  useEffect(() => {
    if (paused || activeSlides.length <= 1) return
    const t = setInterval(next, INTERVAL)
    return () => clearInterval(t)
  }, [next, paused, activeSlides.length])

  useEffect(() => { setCurrent(0) }, [slides.length])

  if (loading) {
    return <div className="relative h-[90vh] min-h-[600px] bg-slate-950 animate-pulse" />
  }

  const slide = activeSlides[current]

  return (
    <section
      id="top"
      className="relative h-[90vh] min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {activeSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {s.image ? (
              <img
                src={s.image}
                alt={s.title || ''}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className={`h-full w-full bg-gradient-to-br ${s.gradient || 'from-slate-900 to-slate-950'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/30" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-30 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-amber-400/10 border border-amber-400/30 px-4 py-1 text-sm text-amber-300 mb-6">
              Electricistas certificados
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Instalaciones eléctricas seguras y confiables
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              En CH Instalaciones Eléctricas ofrecemos soluciones para hogares,
              comercios e industrias. Calidad, seguridad y cumplimiento normativo.
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
                className="rounded-md border border-slate-500 px-6 py-3 font-semibold text-slate-200 hover:border-amber-400 hover:text-amber-300 transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[['+15', 'años de experiencia'], ['500+', 'proyectos realizados'], ['24/7', 'urgencias'], ['100%', 'garantizados']].map(([v, l]) => (
              <div key={l} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-6 py-4 text-center min-w-[110px]">
                <div className="text-2xl font-bold text-amber-400">{v}</div>
                <div className="mt-0.5 text-xs text-slate-400">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows — solo si hay más de 1 slide */}
      {activeSlides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur hover:bg-black/50 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur hover:bg-black/50 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* Dots */}
      {activeSlides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {activeSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function ChevronLeft() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}
