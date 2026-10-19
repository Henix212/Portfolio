export type CareerMetric = {
  label: string
  value: string
  hint?: string
  tone?: 'neutral' | 'profit' | 'loss'
}

export const MOCK_DISCLAIMER = 'Illustrative · mock data'

export const careerMetrics: CareerMetric[] = [
  { label: 'Max Sharpe (demo)', value: '3.2', tone: 'profit' },
  { label: 'Strategies in research', value: '12', tone: 'neutral' },
  { label: 'LOB replay latency', value: '<1ms', hint: 'lab target', tone: 'neutral' },
  { label: 'Open to relocate', value: 'LON/CH/MC', tone: 'neutral' },
]
