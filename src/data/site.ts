// -----------------------------------------------------------------------------
// Everything personal lives here. Edit this file first.
// The content below is placeholder — Alex Rivera is not a real person.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Alex Rivera',
  // Shown in the browser tab and in search results, after your name.
  tagline: 'PhD Candidate in Computer Science',
  institution: 'Northwood University',
  affiliation: 'Department of Computer Science, Northwood University',
  location: 'Northwood, MA',
  advisor: { name: 'Elena Marsh', href: 'https://example.edu/~marsh' },
  email: 'arivera@cs.northwood.edu',
  // Used for canonical URLs, Open Graph and the sitemap.
  url: 'https://alexrivera.example',
  description:
    'Alex Rivera is a PhD candidate at Northwood University working on efficient machine learning: sparse attention, low-bit quantization and long-context inference.',
  portrait: '/portrait.svg',
  cvPdf: '/alex-rivera-cv.pdf',
  // Google Scholar-friendly: keep this in sync with the CV.
  interests: [
    'Efficient machine learning',
    'Long-context inference',
    'Quantization & sparsity',
    'ML systems',
  ],
} as const;

export type ProfileLink = {
  label: string;
  href: string;
  icon: 'mail' | 'scholar' | 'orcid' | 'github' | 'arxiv' | 'bluesky' | 'file';
};

export const profileLinks: ProfileLink[] = [
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=EXAMPLE', icon: 'scholar' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-1825-0097', icon: 'orcid' },
  { label: 'GitHub', href: 'https://github.com/example', icon: 'github' },
  { label: 'arXiv', href: 'https://arxiv.org/a/rivera_a_1', icon: 'arxiv' },
  { label: 'CV', href: site.cvPdf, icon: 'file' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Talks', href: '/talks/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'CV', href: '/cv/' },
];
