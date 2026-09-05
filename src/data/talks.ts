export type Talk = {
  title: string;
  event: string;
  location: string;
  date: string; // ISO 8601
  kind: 'invited' | 'conference' | 'poster' | 'seminar';
  links?: { label: string; href: string }[];
};

export const talks: Talk[] = [
  {
    title: 'Sparse Attention Without the Sparsity Tax',
    event: 'ICML 2026, oral session on efficient inference',
    location: 'Seoul, South Korea',
    date: '2026-07-18',
    kind: 'conference',
    links: [
      { label: 'Slides', href: '#' },
      { label: 'Video', href: '#' },
    ],
  },
  {
    title: 'What breaks first when you quantise a transformer',
    event: 'Halcyon Labs research seminar',
    location: 'Remote',
    date: '2026-06-03',
    kind: 'invited',
    links: [{ label: 'Slides', href: '#' }],
  },
  {
    title: 'Ternary Adapters: 1.58-bit fine-tuning for edge deployment',
    event: 'NeurIPS 2025 spotlight',
    location: 'Vancouver, Canada',
    date: '2025-12-10',
    kind: 'conference',
    links: [
      { label: 'Poster', href: '#' },
      { label: 'Slides', href: '#' },
    ],
  },
  {
    title: 'Cheap tricks for long-context serving',
    event: 'Northwood ML Systems reading group',
    location: 'Northwood, MA',
    date: '2025-10-22',
    kind: 'seminar',
  },
  {
    title: 'Calibration is the first casualty of quantization',
    event: 'New England ML Day',
    location: 'Cambridge, MA',
    date: '2025-04-26',
    kind: 'poster',
    links: [{ label: 'Poster PDF', href: '#' }],
  },
  {
    title: 'Where did the entropy go?',
    event: 'ICLR 2024 poster session',
    location: 'Vienna, Austria',
    date: '2024-05-08',
    kind: 'poster',
    links: [{ label: 'Poster PDF', href: '#' }],
  },
];
