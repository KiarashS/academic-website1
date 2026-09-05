export type Project = {
  name: string;
  blurb: string;
  role: string;
  tags: string[];
  links: { label: string; href: string }[];
  /** Optional two-line monospace snippet shown on the card. */
  snippet?: string;
};

export const projects: Project[] = [
  {
    name: 'rolling-cache',
    blurb:
      'A drop-in KV cache for Hugging Face models that evicts on attention mass instead of recency. Keeps memory flat past a million tokens.',
    role: 'Author and maintainer',
    tags: ['PyTorch', 'CUDA', 'inference'],
    links: [
      { label: 'GitHub', href: 'https://github.com/example/rolling-caches' },
      { label: 'Docs', href: '#' },
      { label: 'Paper', href: '/publications/#rolling-caches-2026' },
    ],
    snippet: 'from rolling_cache import RollingCache\nmodel.generate(ids, past_key_values=RollingCache(budget=8192))',
  },
  {
    name: 'kestrel',
    blurb:
      'Batch scheduler for shared GPU inference. Mixes prefill-heavy and decode-heavy requests so a node does not idle waiting on one long prompt.',
    role: 'Second author, wrote the admission controller',
    tags: ['Rust', 'systems', 'serving'],
    links: [
      { label: 'GitHub', href: 'https://github.com/example/kestrel' },
      { label: 'Paper', href: '/publications/#kestrel-2025' },
    ],
    snippet: 'kestrel serve --model llama-3-70b --gpus 4 --policy mixed\n→ 1.9x throughput vs vLLM at equal p99',
  },
  {
    name: 'quantbench',
    blurb:
      'Reproducible evaluation harness for post-training quantization. Fourteen model families, six methods, one command, with calibration metrics reported alongside accuracy.',
    role: 'Author',
    tags: ['Python', 'evaluation', 'reproducibility'],
    links: [
      { label: 'GitHub', href: 'https://github.com/example/quantbench' },
      { label: 'Leaderboard', href: '#' },
    ],
    snippet: 'quantbench run --model llama-3-8b --method gptq --bits 4\n→ acc 68.1  ece 0.114  (fp16: acc 69.0  ece 0.031)',
  },
  {
    name: 'attention-atlas',
    blurb:
      'A small web tool for staring at attention maps head by head. Built to debug entropy collapse; kept because students found it useful.',
    role: 'Author',
    tags: ['TypeScript', 'visualisation'],
    links: [
      { label: 'GitHub', href: 'https://github.com/example/attention-atlas' },
      { label: 'Demo', href: '#' },
    ],
    snippet: 'atlas --checkpoint ./ckpt --layer 18 --head 7\n→ entropy 0.41  sink mass 0.88  (fp16: 2.10 / 0.12)',
  },
];
