export type EquityPoint = {
  day: number
  equity: number
}

/** Synthetic equity path for hero visualization only. */
export const equityCurve: EquityPoint[] = (() => {
  const points: EquityPoint[] = []
  let equity = 100
  for (let day = 0; day <= 180; day += 1) {
    const drift = 0.0018
    const shock = Math.sin(day / 11) * 0.012 + Math.cos(day / 7) * 0.008
    const noise = ((day * 17) % 10) / 1000 - 0.005
    equity = Math.max(82, equity * (1 + drift + shock + noise))
    points.push({ day, equity: Number(equity.toFixed(2)) })
  }
  return points
})()
