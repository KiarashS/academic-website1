export type Course = {
  term: string;
  code: string;
  title: string;
  role: string;
  institution: string;
  detail?: string;
  href?: string;
};

export const teaching: Course[] = [
  {
    term: 'Spring 2026',
    code: 'CS 6480',
    title: 'Efficient Deep Learning',
    role: 'Co-designed and co-taught',
    institution: 'Northwood University',
    detail:
      'Built the syllabus with Prof. Marsh, wrote four of the assignments and the quantization lab. 38 students.',
    href: '#',
  },
  {
    term: 'Fall 2025',
    code: 'CS 3120',
    title: 'Machine Learning',
    role: 'Head teaching assistant',
    institution: 'Northwood University',
    detail: 'Ran the TA team of six, held weekly office hours, rewrote the autograder for the optimisation unit.',
  },
  {
    term: 'Spring 2025',
    code: 'CS 2100',
    title: 'Computer Systems',
    role: 'Teaching assistant',
    institution: 'Northwood University',
    detail: 'Two lab sections on memory hierarchy and profiling.',
  },
  {
    term: 'Fall 2024',
    code: 'CS 3120',
    title: 'Machine Learning',
    role: 'Teaching assistant',
    institution: 'Northwood University',
  },
  {
    term: 'Summer 2024',
    code: '—',
    title: 'Intro to Python for Researchers',
    role: 'Instructor',
    institution: 'Northwood Summer Bridge Program',
    detail: 'Two-week course for incoming students without a programming background.',
  },
];

export type Mentee = {
  name: string;
  detail: string;
};

export const mentoring: Mentee[] = [
  { name: 'Ravi Chandran', detail: 'Undergraduate thesis on activation outliers, 2025–2026. Now a PhD student at Ashfield.' },
  { name: 'Jae-Won Ku', detail: 'Master’s project on speculative decoding, 2025.' },
  { name: 'Nour Haddad', detail: 'Summer research programme, 2024. Co-author on the ENLSP workshop paper.' },
];
