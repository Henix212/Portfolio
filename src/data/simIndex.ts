export const SIM_SYMBOL = 'SIM-INDEX'

export type SimPoint = {
  x: number
  y: number
  price: number
}

/** Deterministic synthetic walk — decorative only. */
export function generateSimSeries(count = 120, seed = 42): number[] {
  let s = seed
  const next = () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }

  const prices: number[] = []
  let price = 100
  for (let i = 0; i < count; i += 1) {
    const drift = 0.0009
    const shock = Math.sin(i / 9) * 0.006 + Math.cos(i / 15) * 0.004
    const noise = (next() - 0.5) * 0.01
    price = Math.max(78, Math.min(132, price * (1 + drift + shock + noise)))
    prices.push(Number(price.toFixed(4)))
  }
  return prices
}

export const simSeries = generateSimSeries()

export function buildSimPath(
  width: number,
  height: number,
  series: number[] = simSeries,
  padding = 8,
): { d: string; points: SimPoint[] } {
  const min = Math.min(...series)
  const max = Math.max(...series)
  const range = max - min || 1
  const innerW = width - padding * 2
  const innerH = height - padding * 2

  const points: SimPoint[] = series.map((price, i) => {
    const x = padding + (i / (series.length - 1)) * innerW
    const y = padding + (1 - (price - min) / range) * innerH
    return { x, y, price }
  })

  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ')

  return { d, points }
}

export function priceAtProgress(progress: number, series: number[] = simSeries): number {
  const t = Math.min(1, Math.max(0, progress))
  const index = Math.round(t * (series.length - 1))
  return series[index] ?? series[0]
}

export function pointAtProgress(progress: number, points: SimPoint[]): SimPoint {
  const t = Math.min(1, Math.max(0, progress))
  const index = Math.round(t * (points.length - 1))
  return points[index] ?? points[0]
}

export const WORLD_W = 1200
export const WORLD_H = 420

export type ZoomWindow = { startW: number; startH: number; endW: number; endH: number }

export const DESKTOP_ZOOM: ZoomWindow = {
  startW: 480,
  startH: 270,
  endW: 160,
  endH: 90,
}

export const MOBILE_ZOOM: ZoomWindow = {
  startW: 640,
  startH: 360,
  endW: 280,
  endH: 160,
}

export function viewBoxAt(
  progress: number,
  points: SimPoint[],
  zoom: ZoomWindow,
): string {
  const t = Math.min(1, Math.max(0, progress))
  const tip = pointAtProgress(t, points)
  const zw = zoom.startW + (zoom.endW - zoom.startW) * t
  const zh = zoom.startH + (zoom.endH - zoom.startH) * t
  const x = tip.x - zw / 2
  const y = tip.y - zh / 2
  return `${x.toFixed(2)} ${y.toFixed(2)} ${zw.toFixed(2)} ${zh.toFixed(2)}`
}

export const worldPath = buildSimPath(WORLD_W, WORLD_H)
