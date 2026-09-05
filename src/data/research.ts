// Three or four threads, in plain language. If a sentence would still be true
// for someone else's research, rewrite it.

export type Thread = {
  title: string;
  blurb: string;
  keywords: string[];
};

export const threads: Thread[] = [
  {
    title: 'Efficiency after training',
    blurb:
      'Most efficiency work assumes you can retrain. I care about the case where you cannot: a fixed checkpoint, a fixed budget, and a serving target you have to hit this week. Quantization, cache eviction, sparse routing.',
    keywords: ['quantization', 'KV caches', 'sparse attention'],
  },
  {
    title: 'What breaks, and where',
    blurb:
      'Compression rarely fails uniformly. It fails in a few heads, on a few channels, at a few context lengths. Locating the failure usually costs less than engineering around it, so I spend a lot of time on diagnostics.',
    keywords: ['attention analysis', 'calibration', 'evaluation'],
  },
  {
    title: 'Serving, not benchmarks',
    blurb:
      'A method that wins on FLOPs and loses on wall clock has not won. I build and measure real serving systems, and I report latency at the tail rather than the mean.',
    keywords: ['ML systems', 'scheduling', 'GPU kernels'],
  },
];
