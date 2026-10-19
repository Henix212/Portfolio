export type ResearchItem = {
  id: string
  kind: 'publication' | 'notebook'
  title: string
  venue: string
  summary: string
  href?: string
}

export const researchItems: ResearchItem[] = [
  {
    id: 'kir-2026',
    kind: 'publication',
    title:
      'Deep Learning Morphometric Analysis on Protocol Biopsies Predicts Future Graft Function',
    venue: 'Kidney International Reports · peer-reviewed · 4th author',
    summary:
      'End-to-end predictive modeling on high-dimensional clinical data (LEAD CNRS UMR 5022); Gradient Boosting, SVR, LASSO, Random Forest under rigorous validation.',
    href: 'https://www.kireports.org/action/showPdf?pii=S2468-0249%2826%2902817-2',
  },
  {
    id: 'nb-lob',
    kind: 'notebook',
    title: 'LOB microstructure replay diagnostics',
    venue: 'Research note · UDS-OB-HFT',
    summary:
      'Notebook-style summary of tick reconstruction quality, book imbalance features, and paper-trade fill realism under HFT-like latency assumptions.',
  },
  {
    id: 'nb-geo',
    kind: 'notebook',
    title: 'Geopolitical shock → commodity alpha',
    venue: 'Research note · Geo-Commodity-Prop',
    summary:
      'Pipeline sketch: entity extraction → supply graph injection → GNN tension scores → signal construction and risk diagnostics across metals, energy, ag.',
  },
]
