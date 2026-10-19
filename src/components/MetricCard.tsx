import { cn } from '@/lib/utils'

export type MetricCardProps = {
  label: string
  value: string
  hint?: string
  tone?: 'neutral' | 'profit' | 'loss'
  className?: string
}

export function MetricCard({
  label,
  value,
  hint,
  tone = 'neutral',
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 backdrop-blur-sm',
        className,
      )}
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{label}</p>
      <p
        className={cn(
          'mt-1 font-mono text-xl font-semibold tracking-tight',
          tone === 'profit' && 'text-profit',
          tone === 'loss' && 'text-loss',
          tone === 'neutral' && 'text-cyan-300',
        )}
      >
        {value}
      </p>
      {hint ? <p className="mt-1 font-mono text-[10px] text-slate-600">{hint}</p> : null}
    </div>
  )
}
