import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-slate-700 bg-slate-900/70 px-2.5 py-1 font-mono text-xs text-slate-300',
        className,
      )}
      {...props}
    />
  )
}
