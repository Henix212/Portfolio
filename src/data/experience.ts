export type ExperienceItem = {
  id: string
  role: string
  company: string
  location: string
  dates: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'sncf',
    role: 'AI Engineer Apprentice, Autonomous Systems',
    company: 'SNCF Voyageurs Matériel',
    location: 'Le Mans, France',
    dates: 'Sep 2025 – Aug 2027',
    bullets: [
      'Engineered a low-latency, multi-sensor obstacle-detection architecture for autonomous trains, designing real-time signal-processing pipelines under strict latency constraints.',
      'Implemented event-driven data fusion across asynchronous event-based camera, LiDAR, and Radar streams, and prototyped Spiking Neural Networks (SNNs) to optimize temporal pattern-recognition speed on high-frequency sensor data — using Python, C++, and advanced Deep Learning / Computer Vision methods.',
    ],
  },
  {
    id: 'ium',
    role: 'Quant Finance / AI Engineer Intern',
    company: 'International University of Monaco (IUM)',
    location: 'Monaco',
    dates: 'Jun 2026 – Sep 2026',
    bullets: [
      'Formulated a novel AI-driven framework for large-scale cryptocurrency portfolio optimization, applying Deep Reinforcement Learning and time-continuous architectures (Liquid Neural Networks) to hierarchical asset-allocation problems; results submitted for academic publication.',
      'Designed an AI-driven equity research platform for the CFA Institute Research Challenge, integrating fundamental valuation and pricing models to automate corporate investment report generation.',
    ],
  },
  {
    id: 'nextwise',
    role: 'Portfolio Trading Simulation — Euronext Trading Game',
    company: 'NextWise',
    location: 'Remote',
    dates: 'Feb 2026 – Apr 2026',
    bullets: [
      'Managed and dynamically reallocated a simulated Euronext equity portfolio over a 3-month competitive trading game, applying systematic reallocation rules to improve risk-adjusted performance.',
    ],
  },
  {
    id: 'lead',
    role: 'Machine Learning Research Intern',
    company: 'LEAD CNRS UMR 5022',
    location: 'Dijon, France',
    dates: 'Jun 2024',
    bullets: [
      'Designed an end-to-end predictive-modeling pipeline from scratch for a clinical research study on high-dimensional healthcare data, benchmarking four algorithms (Gradient Boosting, SVR, LASSO, Random Forest) under rigorous validation protocols to maximize out-of-sample accuracy while controlling overfitting.',
      'Co-authored the resulting research as 4th author in Kidney International Reports (peer-reviewed journal).',
    ],
  },
]
