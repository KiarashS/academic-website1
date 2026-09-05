// -----------------------------------------------------------------------------
// One entry per paper. Newest first — the site does not re-sort, so the order
// here is the order on the page. Mark your own name exactly as it appears in
// `site.name` and it will be emphasised automatically. A trailing `*` on an
// author marks equal contribution.
// -----------------------------------------------------------------------------

export type PubKind = 'conference' | 'journal' | 'workshop' | 'preprint' | 'thesis';

export type PubLink = {
  label: string;
  href: string;
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueLong?: string;
  year: number;
  kind: PubKind;
  /** e.g. "Oral", "Spotlight", "Best Paper Runner-up". Rendered as a badge. */
  note?: string;
  /** One or two sentences, plain language. Shown under the title. */
  summary?: string;
  links?: PubLink[];
  bibtex?: string;
  /** Shown in the "Selected work" block on the home page. */
  selected?: boolean;
};

export const publications: Publication[] = [
  {
    id: 'rolling-caches-2026',
    title: 'Rolling Caches: Constant-Memory Decoding for Million-Token Contexts',
    authors: ['Alex Rivera', 'Priya Raghunathan', 'Elena Marsh'],
    venue: 'arXiv preprint',
    year: 2026,
    kind: 'preprint',
    summary:
      'A decoding scheme that keeps KV memory flat past one million tokens by evicting on attention mass rather than recency. Loses 0.4 points on RULER against a full cache.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/0000.00000' },
      { label: 'Code', href: 'https://github.com/example/rolling-caches' },
    ],
    bibtex: `@article{rivera2026rolling,
  title   = {Rolling Caches: Constant-Memory Decoding for Million-Token Contexts},
  author  = {Rivera, Alex and Raghunathan, Priya and Marsh, Elena},
  journal = {arXiv preprint arXiv:0000.00000},
  year    = {2026}
}`,
    selected: true,
  },
  {
    id: 'sparse-attention-tax-2026',
    title: 'Sparse Attention Without the Sparsity Tax: Block Routing at Inference Time',
    authors: ['Alex Rivera', 'Daniel Okonkwo', 'Elena Marsh'],
    venue: 'ICML 2026',
    venueLong: 'International Conference on Machine Learning',
    year: 2026,
    kind: 'conference',
    note: 'Oral',
    summary:
      'Most sparse attention kernels are slower than dense ones below 32k tokens. We route blocks with a learned predictor and get real wall-clock speedups from 8k up.',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/0000.00001' },
      { label: 'Code', href: 'https://github.com/example/block-routing' },
      { label: 'Slides', href: '#' },
      { label: 'Video', href: '#' },
    ],
    bibtex: `@inproceedings{rivera2026sparse,
  title     = {Sparse Attention Without the Sparsity Tax: Block Routing at Inference Time},
  author    = {Rivera, Alex and Okonkwo, Daniel and Marsh, Elena},
  booktitle = {International Conference on Machine Learning (ICML)},
  year      = {2026}
}`,
    selected: true,
  },
  {
    id: 'ternary-adapters-2025',
    title: 'Ternary Adapters: 1.58-Bit Fine-Tuning for Edge Deployment',
    authors: ['Alex Rivera*', 'Mei-Lin Chao*', 'Elena Marsh'],
    venue: 'NeurIPS 2025',
    venueLong: 'Conference on Neural Information Processing Systems',
    year: 2025,
    kind: 'conference',
    note: 'Spotlight',
    summary:
      'Adapter weights constrained to {-1, 0, 1} recover 97% of LoRA quality on eight downstream tasks while fitting the update in 40 MB for a 7B model.',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/0000.00002' },
      { label: 'Code', href: 'https://github.com/example/ternary-adapters' },
      { label: 'Poster', href: '#' },
    ],
    bibtex: `@inproceedings{rivera2025ternary,
  title     = {Ternary Adapters: 1.58-Bit Fine-Tuning for Edge Deployment},
  author    = {Rivera, Alex and Chao, Mei-Lin and Marsh, Elena},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2025}
}`,
    selected: true,
  },
  {
    id: 'kestrel-2025',
    title: 'Kestrel: Scheduling Heterogeneous Inference Batches on Shared GPUs',
    authors: ['Tomás Beltrán', 'Alex Rivera', 'Hannah Weiss', 'Elena Marsh'],
    venue: 'MLSys 2025',
    venueLong: 'Conference on Machine Learning and Systems',
    year: 2025,
    kind: 'conference',
    summary:
      'A scheduler that mixes prefill-heavy and decode-heavy requests in the same batch. 1.9x throughput over vLLM at equal p99 latency on a 4xA100 node.',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'Code', href: 'https://github.com/example/kestrel' },
    ],
    bibtex: `@inproceedings{beltran2025kestrel,
  title     = {Kestrel: Scheduling Heterogeneous Inference Batches on Shared GPUs},
  author    = {Beltr{\\'a}n, Tom{\\'a}s and Rivera, Alex and Weiss, Hannah and Marsh, Elena},
  booktitle = {Conference on Machine Learning and Systems (MLSys)},
  year      = {2025}
}`,
  },
  {
    id: 'calibration-quantized-2025',
    title: 'On the Calibration of Quantized Language Models',
    authors: ['Alex Rivera', 'Elena Marsh'],
    venue: 'TMLR',
    venueLong: 'Transactions on Machine Learning Research',
    year: 2025,
    kind: 'journal',
    summary:
      'Post-training quantization leaves accuracy roughly intact and confidence badly overstated. We measure the gap across 14 models and propose a cheap recalibration pass.',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'OpenReview', href: '#' },
      { label: 'Data', href: '#' },
    ],
    bibtex: `@article{rivera2025calibration,
  title   = {On the Calibration of Quantized Language Models},
  author  = {Rivera, Alex and Marsh, Elena},
  journal = {Transactions on Machine Learning Research (TMLR)},
  year    = {2025}
}`,
  },
  {
    id: 'entropy-collapse-2024',
    title: 'Where Did the Entropy Go? Diagnosing Collapse in Low-Bit Attention',
    authors: ['Alex Rivera', 'Priya Raghunathan', 'Elena Marsh'],
    venue: 'ICLR 2024',
    venueLong: 'International Conference on Learning Representations',
    year: 2024,
    kind: 'conference',
    summary:
      'Attention distributions collapse to a handful of sink tokens below 4 bits. The failure is localised to 3% of heads, and protecting those heads fixes most of it.',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/0000.00003' },
      { label: 'Code', href: 'https://github.com/example/entropy-collapse' },
    ],
    bibtex: `@inproceedings{rivera2024entropy,
  title     = {Where Did the Entropy Go? Diagnosing Collapse in Low-Bit Attention},
  author    = {Rivera, Alex and Raghunathan, Priya and Marsh, Elena},
  booktitle = {International Conference on Learning Representations (ICLR)},
  year      = {2024}
}`,
    selected: true,
  },
  {
    id: 'retrieval-heads-2024',
    title: 'Retrieval Heads Are Not Enough: Long-Context Failure Modes in Compressed KV Caches',
    authors: ['Mei-Lin Chao', 'Alex Rivera', 'Elena Marsh'],
    venue: 'EMNLP 2024 Findings',
    venueLong: 'Findings of the Conference on Empirical Methods in Natural Language Processing',
    year: 2024,
    kind: 'conference',
    summary:
      'Compressing the KV cache preserves needle-in-a-haystack retrieval and quietly destroys multi-hop reasoning over the same context.',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/0000.00004' },
    ],
    bibtex: `@inproceedings{chao2024retrieval,
  title     = {Retrieval Heads Are Not Enough: Long-Context Failure Modes in Compressed KV Caches},
  author    = {Chao, Mei-Lin and Rivera, Alex and Marsh, Elena},
  booktitle = {Findings of EMNLP},
  year      = {2024}
}`,
  },
  {
    id: 'length-adaptive-2023',
    title: 'Length-Adaptive Distillation for Encoder Models',
    authors: ['Alex Rivera', 'Hannah Weiss', 'Elena Marsh'],
    venue: 'ACL 2023',
    venueLong: 'Annual Meeting of the Association for Computational Linguistics',
    year: 2023,
    kind: 'conference',
    summary:
      'Distilling an encoder at one sequence length and deploying it at another costs three points. Training the student on a length schedule recovers them.',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'Code', href: 'https://github.com/example/length-adaptive' },
    ],
    bibtex: `@inproceedings{rivera2023length,
  title     = {Length-Adaptive Distillation for Encoder Models},
  author    = {Rivera, Alex and Weiss, Hannah and Marsh, Elena},
  booktitle = {Annual Meeting of the Association for Computational Linguistics (ACL)},
  year      = {2023}
}`,
  },
  {
    id: 'outlier-channels-2023',
    title: 'A Small Study of Outlier Channels in 4-Bit Transformers',
    authors: ['Alex Rivera'],
    venue: 'ENLSP @ NeurIPS 2023',
    venueLong: 'Workshop on Efficient Natural Language and Speech Processing',
    year: 2023,
    kind: 'workshop',
    summary:
      'Six of 4096 channels carry activations two orders of magnitude larger than the rest. Keeping those six in 16 bits is most of what per-channel quantization buys you.',
    links: [{ label: 'PDF', href: '#' }],
    bibtex: `@inproceedings{rivera2023outlier,
  title     = {A Small Study of Outlier Channels in 4-Bit Transformers},
  author    = {Rivera, Alex},
  booktitle = {NeurIPS Workshop on Efficient Natural Language and Speech Processing (ENLSP)},
  year      = {2023}
}`,
  },
  {
    id: 'profiling-ondevice-2022',
    title: 'Profiling Memory Bottlenecks in On-Device Transformers',
    authors: ['Alex Rivera', 'Sofia Lindqvist'],
    venue: 'EdgeML @ MLSys 2022',
    venueLong: 'Workshop on Machine Learning at the Edge',
    year: 2022,
    kind: 'workshop',
    summary:
      'My undergraduate thesis work: on six phones, transformer latency tracked memory bandwidth rather than FLOPs, by a wide margin.',
    links: [{ label: 'PDF', href: '#' }],
    bibtex: `@inproceedings{rivera2022profiling,
  title     = {Profiling Memory Bottlenecks in On-Device Transformers},
  author    = {Rivera, Alex and Lindqvist, Sofia},
  booktitle = {MLSys Workshop on Machine Learning at the Edge (EdgeML)},
  year      = {2022}
}`,
  },
];

export const kindLabels: Record<PubKind, string> = {
  conference: 'Conference',
  journal: 'Journal',
  workshop: 'Workshop',
  preprint: 'Preprint',
  thesis: 'Thesis',
};
