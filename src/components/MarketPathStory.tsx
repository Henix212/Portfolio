import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { chapterOpacity, pathChapters } from '@/data/pathChapters'
import {
  DESKTOP_ZOOM,
  MOBILE_ZOOM,
  pointAtProgress,
  priceAtProgress,
  SIM_SYMBOL,
  simSeries,
  viewBoxAt,
  worldPath,
  type ZoomWindow,
} from '@/data/simIndex'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

function useIsMobile(breakpoint = 1024): boolean {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const update = () => setMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [breakpoint])
  return mobile
}

type MarketPathStoryProps = {
  onClose: () => void
}

export function MarketPathStory({ onClose }: MarketPathStoryProps) {
  const reduced = usePrefersReducedMotion()
  if (reduced) {
    return (
      <div className="border-b border-slate-800 bg-slate-900/40 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-500">
            Path experience is disabled when reduced motion is preferred. Browse the CV sections below.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-slate-300 underline-offset-4 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    )
  }
  return <ImmersivePath onClose={onClose} />
}

function ImmersivePath({ onClose }: { onClose: () => void }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const mobile = useIsMobile()
  const zoom: ZoomWindow = mobile ? MOBILE_ZOOM : DESKTOP_ZOOM
  const { d, points } = worldPath

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0.04, 1])

  const [viewBox, setViewBox] = useState(() => viewBoxAt(0, points, zoom))
  const [price, setPrice] = useState(() => priceAtProgress(0, simSeries))
  const [tip, setTip] = useState(() => pointAtProgress(0, points))
  const [progress, setProgress] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(latest)
    setPrice(priceAtProgress(latest, simSeries))
    setTip(pointAtProgress(latest, points))
    setViewBox(viewBoxAt(latest, points, zoom))
  })

  useEffect(() => {
    setViewBox(viewBoxAt(progress, points, zoom))
  }, [zoom, points, progress])

  const activeChapters = useMemo(
    () =>
      pathChapters.map((ch) => ({
        ...ch,
        opacity: chapterOpacity(progress, ch.start, ch.end),
      })),
    [progress],
  )

  return (
    <section ref={trackRef} className="relative h-[350vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/55 to-slate-950/90" />
          <svg
            viewBox={viewBox}
            className="h-full w-full text-steel opacity-80"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d={d} fill="none" stroke="currentColor" strokeWidth="2" opacity={0.18} />
            <motion.path
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{ pathLength }}
            />
            <circle cx={tip.x} cy={tip.y} r="6" fill="#a67c52" />
            <circle
              cx={tip.x}
              cy={tip.y}
              r="14"
              fill="none"
              stroke="#a67c52"
              strokeWidth="1"
              opacity={0.45}
            />
          </svg>

          <div className="absolute right-6 top-20 rounded-sm border border-slate-800/80 bg-slate-950/75 px-3 py-2 backdrop-blur-sm md:right-10">
            <p className="font-mono text-[10px] text-slate-600">Market tape · illustrative</p>
            <p className="mt-1 font-mono text-sm tabular-nums text-steel">
              {SIM_SYMBOL} {price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="absolute right-6 top-[7.5rem] z-20 md:right-10">
          <button
            type="button"
            onClick={onClose}
            className="rounded-sm border border-slate-800 bg-slate-950/90 px-3 py-2 font-mono text-[10px] text-slate-400 hover:text-slate-200"
          >
            Exit path
          </button>
        </div>

        <div className="relative z-10 flex h-full items-center px-6">
          {activeChapters.map((ch) => (
            <div
              key={ch.id}
              className="absolute left-1/2 w-full max-w-xl -translate-x-1/2 rounded-sm border border-slate-800/60 bg-slate-950/80 p-6 backdrop-blur-md md:p-8"
              style={{
                opacity: ch.opacity,
                pointerEvents: ch.opacity > 0.25 ? 'auto' : 'none',
              }}
            >
              <p className="font-mono text-[10px] text-bronze">{ch.label}</p>
              <h2 className="mt-2 font-serif text-2xl text-slate-50 md:text-3xl">{ch.title}</h2>
              <ul className="mt-4 space-y-2">
                {ch.body.map((line) => (
                  <li key={line} className="text-sm leading-relaxed text-slate-400">
                    {line}
                  </li>
                ))}
              </ul>
              {ch.cta ? (
                <a
                  href={ch.cta.href}
                  target={
                    ch.cta.href.startsWith('http') || ch.cta.href.endsWith('.pdf')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    ch.cta.href.startsWith('http') || ch.cta.href.endsWith('.pdf')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="mt-5 inline-block font-mono text-xs text-slate-200 underline-offset-4 hover:underline"
                >
                  {ch.cta.text} →
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
