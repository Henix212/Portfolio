export type EducationItem = {
  id: string
  title: string
  school: string
  dates: string
  detail: string
}

export const education: EducationItem[] = [
  {
    id: 'eseo',
    title: 'Engineering Diploma, Computer Engineering',
    school: 'ESEO — Specialization: Applied Mathematics & Artificial Intelligence · Dijon / Angers, France',
    dates: 'Aug 2022 – Aug 2027',
    detail:
      'Coursework: Applied Mathematics, Probability & Statistics, Numerical Methods, Machine Learning, Deep Learning, Time-Series Analysis, Signal Processing, C/C++ & Python for Scientific Computing.',
  },
  {
    id: 'eiffel',
    title: 'French Scientific Baccalauréat, European Section',
    school: 'Eiffel High School · Dijon — Graduated with Honors',
    dates: 'Sep 2019 – Jun 2022',
    detail: 'Full mathematics courses in English; Python foundations.',
  },
]
