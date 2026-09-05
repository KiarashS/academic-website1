export type Entry = {
  period: string;
  title: string;
  org: string;
  location?: string;
  detail?: string[];
};

export const education: Entry[] = [
  {
    period: '2022 — present',
    title: 'PhD in Computer Science',
    org: 'Northwood University',
    location: 'Northwood, MA',
    detail: [
      'Advisor: Elena Marsh. Advanced to candidacy March 2026.',
      'Thesis: inference-time efficiency for transformer models without retraining.',
    ],
  },
  {
    period: '2018 — 2022',
    title: 'BSc in Computer Science and Mathematics, summa cum laude',
    org: 'Ashfield College',
    location: 'Ashfield, VT',
    detail: ['Senior thesis on memory profiling for on-device transformers, advised by Sofia Lindqvist.'],
  },
];

export const experience: Entry[] = [
  {
    period: 'Aug 2026 — present',
    title: 'Research Intern',
    org: 'Halcyon Labs',
    location: 'Remote',
    detail: ['Inference kernels for long-context serving. Mentor: Priya Raghunathan.'],
  },
  {
    period: 'Jun — Sep 2024',
    title: 'Research Intern, Systems for ML',
    org: 'Vantage Research',
    location: 'Seattle, WA',
    detail: ['Built the profiling harness that became quantbench.'],
  },
  {
    period: '2021 — 2022',
    title: 'Undergraduate Research Assistant',
    org: 'Ashfield College Systems Lab',
    location: 'Ashfield, VT',
  },
];

export const awards: Entry[] = [
  { period: '2025', title: 'Northwood Graduate Fellowship', org: 'Northwood University' },
  { period: '2025', title: 'NeurIPS Scholar Award', org: 'NeurIPS' },
  { period: '2024', title: 'Outstanding Teaching Assistant, Department of Computer Science', org: 'Northwood University' },
  { period: '2022', title: 'Ashfield College Prize in Mathematics', org: 'Ashfield College' },
];

export const service = {
  reviewing: [
    'ICML 2025, 2026',
    'NeurIPS 2024, 2025, 2026',
    'ICLR 2025, 2026',
    'TMLR (reviewer since 2025)',
    'ACL Rolling Review 2024',
  ],
  organising: [
    'Co-organiser, ENLSP workshop at NeurIPS 2026',
    'Student volunteer, MLSys 2025',
    'Northwood ML Systems reading group, coordinator since 2024',
  ],
  outreach: [
    'Mentor, Northwood Summer Bridge Program (2024, 2025)',
    'Volunteer instructor, Girls Who Code Northwood chapter',
  ],
};

export const skills = [
  { group: 'Languages', items: 'Python, Rust, C++, CUDA, TypeScript' },
  { group: 'Frameworks', items: 'PyTorch, Triton, JAX, vLLM, Hugging Face' },
  { group: 'Infrastructure', items: 'Slurm, Kubernetes, Nsight, Weights & Biases' },
];
