import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-xs text-slate-400',
        className,
      )}
      {...props}
    />
  )
}
