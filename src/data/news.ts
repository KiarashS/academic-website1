// Short, dated lines. Keep the newest eight or so; move the rest to the CV.
// An empty news list is a stronger signal of neglect than no news section, so
// either keep this current or delete the block from the home page.

export type NewsItem = {
  date: string; // ISO 8601
  text: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: '2026-08-24',
    text: 'Started a research internship at Halcyon Labs, working on inference kernels for long-context serving.',
  },
  {
    date: '2026-07-14',
    text: 'Block Routing was accepted to ICML 2026 as an oral. Talk is on 18 July in Seoul.',
    href: '/publications/#sparse-attention-tax-2026',
  },
  {
    date: '2026-05-02',
    text: 'New preprint: constant-memory decoding past one million tokens.',
    href: '/publications/#rolling-caches-2026',
  },
  {
    date: '2026-03-11',
    text: 'Advanced to candidacy. Proposal: "Inference-time efficiency without retraining".',
  },
  {
    date: '2025-12-10',
    text: 'Ternary Adapters presented as a spotlight at NeurIPS 2025 in Vancouver.',
    href: '/publications/#ternary-adapters-2025',
  },
  {
    date: '2025-09-15',
    text: 'Awarded the Northwood Graduate Fellowship for 2025–2027.',
  },
  {
    date: '2025-06-18',
    text: 'Kestrel is open source and running in the department cluster.',
    href: '/projects/',
  },
  {
    date: '2025-02-04',
    text: 'Serving on the ICML 2025 programme committee.',
  },
];
