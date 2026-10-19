export type CertItem = {
  id: string
  issuer: string
  name: string
}

export const certs: CertItem[] = [
  {
    id: 'jpm',
    issuer: 'J.P. Morgan · Forage',
    name: 'Quantitative Research Job Simulation',
  },
  {
    id: 'nvidia',
    issuer: 'NVIDIA Deep Learning Institute',
    name: 'Getting Started with Deep Learning',
  },
  {
    id: 'cae',
    issuer: 'Cambridge Assessment',
    name: 'Certificate in Advanced English (CAE)',
  },
  {
    id: 'toeic',
    issuer: 'ETS',
    name: 'TOEIC — 925',
  },
]
