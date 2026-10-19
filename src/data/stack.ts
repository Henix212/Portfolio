export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    items: ['C / C++ (low-latency systems)', 'Python (NumPy, pandas, scikit-learn, PyTorch)'],
  },
  {
    title: 'Quant / ML Methods',
    items: [
      'Machine Learning · Deep Learning',
      'Deep Reinforcement Learning',
      'Recurrent & Liquid Neural Networks',
      'Spiking Neural Networks',
      'Time-Series Analysis · Signal Processing · Computer Vision',
    ],
  },
  {
    title: 'Mathematics / Modeling',
    items: [
      'Applied Mathematics · Probability & Statistics',
      'Portfolio Optimization',
      'Equity Valuation & Pricing Models',
      'Algorithm Benchmarking · Overfitting Control & Validation',
    ],
  },
  {
    title: 'Tools',
    items: ['Git / GitHub', 'TCP/IP Networking', 'Market Microstructure & Limit Order Books'],
  },
]
