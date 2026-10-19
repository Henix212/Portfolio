const CV_HREF = './files/Hugo_Pereira_de_Almeida_CV_Quant.pdf'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
        <p className="font-semibold text-slate-100">Hugo Gabriel Pereira de Almeida</p>
        <p className="font-mono text-xs text-slate-500">
          Applied Math &amp; AI · Low-latency systems · Quantitative research
        </p>
        <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-slate-400">
          <a
            href="https://www.linkedin.com/in/hugo-gabriel-pereira-de-almeida-9a3b46260/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Henix212"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            GitHub
          </a>
          <a href="mailto:hugogpdealmeida@gmail.com" className="hover:text-cyan-400">
            Email
          </a>
          <a href={CV_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            CV
          </a>
        </div>
        <p className="font-mono text-[10px] text-slate-700">© 2026 Hugo Gabriel Pereira de Almeida</p>
      </div>
    </footer>
  )
}
