import { motion } from 'framer-motion'
import { EquityCurveChart } from '@/components/EquityCurveChart'
import { Button } from '@/components/ui/button'
import { MOCK_DISCLAIMER } from '@/data/metrics'

const CV_HREF = './files/Hugo_Pereira_de_Almeida_CV_Quant.pdf'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden border-b border-slate-800"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <EquityCurveChart className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl rounded-2xl border border-slate-800/80 bg-slate-950/55 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl md:p-10"
        >
          <p className="font-mono text-xs text-cyan-400/90">Hugo Gabriel Pereira de Almeida</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Quantitative Researcher &amp; Algorithmic Trader
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Applied Mathematics &amp; AI · low-latency C++ trading infrastructure · deep learning for
            quantitative research. ESEO · SNCF Voyageurs Matériel · IUM Monaco.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg">View strategies</Button>
            </a>
            <a href={CV_HREF} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Download CV
              </Button>
            </a>
          </div>
          <p className="mt-6 font-mono text-[10px] text-slate-600">{MOCK_DISCLAIMER} — equity curve</p>
        </motion.div>
      </div>
    </section>
  )
}
