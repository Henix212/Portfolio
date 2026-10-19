import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { equityCurve } from '@/data/equityCurve'

type EquityCurveChartProps = {
  className?: string
}

export function EquityCurveChart({ className }: EquityCurveChartProps) {
  return (
    <div className={className} aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={equityCurve} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" hide />
          <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide />
          <Tooltip
            contentStyle={{
              background: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: 8,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 12,
            }}
            labelFormatter={(label) => `Day ${String(label)}`}
            formatter={(value) => [`${Number(value).toFixed(2)}`, 'Equity (mock)']}
          />
          <Area
            type="monotone"
            dataKey="equity"
            stroke="#22d3ee"
            strokeWidth={1.5}
            fill="url(#equityFill)"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
