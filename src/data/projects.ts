export type ProjectMetric = {
  label: string
  value: string
  tone: 'profit' | 'loss' | 'neutral'
}

export type Project = {
  id: string
  name: string
  tagline: string
  description: string
  stack: string[]
  href?: string
  private?: boolean
  metrics: ProjectMetric[]
}

export const projects: Project[] = [
  {
    id: 'uds-ob-hft',
    name: 'UDS-OB-HFT',
    tagline: 'Low-Latency Limit Order Book Replay',
    description:
      'C++ market-data replay reconstructing full LOB dynamics from crypto tick data via a custom TCP server, with a paper-trading client for microstructure backtests.',
    stack: ['C++', 'TCP', 'LOB', 'HFT'],
    href: 'https://github.com/Henix212/UDS-OB-HFT',
    metrics: [
      { label: 'CAGR', value: '+18.4%', tone: 'profit' },
      { label: 'Max DD', value: '-9.2%', tone: 'loss' },
      { label: 'Win Rate', value: '54%', tone: 'neutral' },
    ],
  },
  {
    id: 'geo-commodity-prop',
    name: 'Geo-Commodity-Prop',
    tagline: 'Commodity Supply-Chain Shock Propagation',
    description:
      'Event-driven research stack: LLM news → graph features → GNN stress scores on mines/ports/chokepoints, linked to a systematic VectorBT quant layer.',
    stack: ['Python', 'GNN', 'LLM', 'VectorBT'],
    href: 'https://github.com/Henix212/geo-commodity-prop',
    metrics: [
      { label: 'CAGR', value: '+22.1%', tone: 'profit' },
      { label: 'Max DD', value: '-14.6%', tone: 'loss' },
      { label: 'Win Rate', value: '51%', tone: 'neutral' },
    ],
  },
  {
    id: 'cex-crypto',
    name: 'CEX-Crypto Trading Stack',
    tagline: 'Derivatives Pricing & Systematic Trading',
    description:
      'DCI pricing, dual-curve funding-basis estimators, and quantile execution-cost models — bridging C++ LOB replay with Python research via pybind11.',
    stack: ['C++', 'Python', 'pybind11', 'Pricing'],
    private: true,
    metrics: [
      { label: 'CAGR', value: '+15.8%', tone: 'profit' },
      { label: 'Max DD', value: '-11.3%', tone: 'loss' },
      { label: 'Win Rate', value: '57%', tone: 'neutral' },
    ],
  },
  {
    id: 'quant-strat',
    name: 'Quant-Strat',
    tagline: 'Systematic Strategy Research Pipeline',
    description:
      'Modular hypothesis → features → model → backtest → diagnostics pipeline; XGBoost return prediction with Sharpe / vol / drawdown benchmarks.',
    stack: ['Python', 'XGBoost', 'Backtesting'],
    href: 'https://github.com/Henix212/Quant-Strat',
    metrics: [
      { label: 'CAGR', value: '+12.6%', tone: 'profit' },
      { label: 'Max DD', value: '-8.7%', tone: 'loss' },
      { label: 'Win Rate', value: '53%', tone: 'neutral' },
    ],
  },
]
