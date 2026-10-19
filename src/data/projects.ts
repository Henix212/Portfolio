export type Project = {
  id: string
  name: string
  tagline: string
  bullets: string[]
  stack: string[]
  href?: string
  private?: boolean
}

export const projects: Project[] = [
  {
    id: 'uds-ob-hft',
    name: 'UDS-OB-HFT',
    tagline: 'Low-Latency Limit Order Book Replay Engine',
    bullets: [
      'Engineered a C++ market-data replay system reconstructing full Limit Order Book (LOB) dynamics from historical crypto tick data via a custom TCP market-data server.',
      'Built an accompanying paper-trading client to backtest execution strategies against replayed order-book microstructure, emulating HFT market conditions.',
    ],
    stack: ['C++', 'TCP', 'LOB', 'HFT'],
    href: 'https://github.com/Henix212/UDS-OB-HFT',
  },
  {
    id: 'geo-commodity-prop',
    name: 'Geo-Commodity-Prop',
    tagline: 'Commodity Supply-Chain Shock Propagation (GNN)',
    bullets: [
      'Built an event-driven commodity research stack that turns news shocks into graph features (LLM extraction → entity→node map → severity injection on mines/ports/chokepoints), then propagates stress through supply networks with a GNN to produce commodity-level tension scores.',
      'Linked those scores to a systematic quant layer (signal construction, VectorBT backtests, Sharpe / vol / drawdown diagnostics) to evaluate whether geopolitically induced supply disruptions translate into tradable alpha across metals, energy, and agriculture.',
    ],
    stack: ['Python', 'GNN', 'LLM', 'VectorBT'],
    href: 'https://github.com/Henix212/geo-commodity-prop',
  },
  {
    id: 'cex-crypto',
    name: 'CEX-Crypto Trading Stack',
    tagline: 'Crypto Derivatives Pricing & Systematic Trading Framework',
    bullets: [
      'Engineering pricing models for structured products (DCI) and dual-curve bootstrapping estimators to resolve funding basis, while predicting microstructure execution costs via boosted quantile regressions.',
      'Co-architecting an end-to-end quantitative derivatives pricing and systematic trading monorepo in a 3-person team, bridging a custom C++ LOB replay engine with a Python research environment via pybind11.',
    ],
    stack: ['C++', 'Python', 'pybind11', 'Pricing'],
    private: true,
  },
  {
    id: 'quant-strat',
    name: 'Quant-Strat',
    tagline: 'Systematic Quantitative Strategy Research Repository',
    bullets: [
      'Built a modular research pipeline (hypothesis formulation, feature engineering, model implementation, backtesting, performance analysis) to design and evaluate quantitative trading strategies in Python.',
      'Implemented an XGBoost-based return-prediction strategy using lagged returns, rolling statistics, and technical indicators, benchmarked via Sharpe ratio, volatility, and drawdown.',
    ],
    stack: ['Python', 'XGBoost', 'Backtesting'],
    href: 'https://github.com/Henix212/Quant-Strat',
  },
]
