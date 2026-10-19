export type ResearchItem = {
  id: string
  kind: 'publication' | 'note'
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
      'End-to-end predictive-modeling pipeline on high-dimensional clinical data (LEAD CNRS UMR 5022), benchmarking Gradient Boosting, SVR, LASSO, and Random Forest under rigorous validation to maximize out-of-sample accuracy while controlling overfitting.',
    href: 'https://www.kireports.org/action/showPdf?pii=S2468-0249%2826%2902817-2',
  },
]
