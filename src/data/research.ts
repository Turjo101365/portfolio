import { ResearchItem, ResearchPaper } from '../types';

export const researchItems: ResearchItem[] = [
  {
    id: 'quantization-paper',
    type: 'Conference paper',
    status: 'Submitted — ICCIT',
    title: 'Is Quantization Language-Neutral?',
    subtitle: 'Tokenization Burden and Quantization Degradation in Open-Weight LLMs',
    authors: 'Samprity Haque, Fairuz Anadi, Tanmoy Chowdhury Turjo',
    affiliation: 'Dept. of CSE, Ahsanullah University of Science & Technology',
    venue: 'ICCIT (IEEE)',
    year: '2026',
    codeUrl: 'https://github.com/fairuz-anadi/quantization',
    abstract:
      'Quantization is how open-weight language models reach the hardware available in much of the world, but its cost is not paid equally across languages. A controlled evaluation of three open-weight models at FP16, INT8 and NF4 across five South Asian languages, using parallel BELEBELE items and item-level paired statistics.',
    findings: [
      'Damage is language-dependent: Sinhala loses 5.0 accuracy points more than English to 4-bit NF4 — the only language × precision interaction surviving correction across the grid.',
      "That damage tracks tokenization burden rather than a model's competence in the language. Across 14 (model, language) cells, NF4 degradation rank-correlates with median tokens per item at ρ=+0.814, while showing no relationship with base accuracy.",
      'For Bangla, the model that tokenizes it 4.1× more cheaply degrades 4.4 points less — despite the two models sitting two points apart at full precision.',
      'The intuitive remedy fails. Language-specific LoRA adaptation left quantization sensitivity unchanged at every strength tested, and at three epochs reduced Bangla accuracy by 5.8 points.',
      'Model ranking is precision-dependent: the stronger Bangla model at FP16 is the weaker one at NF4, and the change in ranking is significant even though neither ranking is.'
    ],
    method: [
      'Qwen2.5-3B-Instruct, Gemma-2-2b-it and BLOOMZ-3b, each pinned to an exact model revision',
      'English, Bangla, Sinhala, Assamese and Nepali — four writing systems',
      '900 parallel BELEBELE items per cell · 47 cells · 42,300 item-level scorings',
      'Three hypothesis sets pre-registered in version control before the data existed',
      'Exact McNemar tests, Wilson intervals, percentile bootstrap, Holm correction within stated families'
    ],
    metricsTable: [
      { language: 'English (eng_Latn)', script: 'Latin', fp16: '82.4%', int8: '81.7%', nf4: '80.2%', delta: '-2.2%' },
      { language: 'Bangla (ben_Beng)', script: 'Bengali', fp16: '64.8%', int8: '63.5%', nf4: '60.9%', delta: '-3.9%' },
      { language: 'Sinhala (sin_Sinh)', script: 'Sinhala', fp16: '51.2%', int8: '49.8%', nf4: '46.7%', delta: '-4.5%' },
      { language: 'Assamese (asm_Beng)', script: 'Bengali', fp16: '55.3%', int8: '53.9%', nf4: '50.4%', delta: '-4.9%' },
      { language: 'Nepali (npi_Deva)', script: 'Devanagari', fp16: '58.1%', int8: '56.7%', nf4: '53.6%', delta: '-4.5%' }
    ]
  },
  {
    id: 'cctv-safety-proposal',
    type: 'Poster presentation',
    status: 'Proposal',
    title: 'Cross-Site Robustness of Women Safety Detection',
    subtitle: 'Evaluating and improving vision-based detection across real-world CCTV deployments',
    venue: 'SEU REACT 2026 — Poster',
    year: '2026',
    abstract:
      "Women-safety surveillance models report strong accuracy on the camera network they were trained on, and that accuracy is often an illusion of competence that collapses on a different one. The proposal reframes the objective: the barrier to deployment isn't raw accuracy, it's transferability.",
    approach: [
      'Represents scenes through behaviour rather than appearance — trajectory, pose and proxemic cues like following, encirclement and isolation — because geometric descriptors are far less camera-dependent than RGB features.',
      'Learns domain-invariant features via adversarial domain alignment, invariant-risk-style penalties and domain-aware augmentation.',
      'Detects when a deployment environment has diverged from training conditions and attaches a calibrated confidence, turning a silent failure into an explicit one an operator can act on.',
      'Adapts to an unseen camera at test time from unlabeled stream data, updating only lightweight parameters with bounded magnitude and a rollback trigger.',
      'Evaluated leave-one-domain-out, so the headline metric is the in-domain minus cross-domain gap rather than single-site accuracy.'
    ],
    safeguards: [
      'No gender classification, no face recognition, no biometric profiling — the pipeline is behaviour-based only',
      'Human-in-the-loop by default; the system surfaces alerts for review and takes no enforcement action',
      'Ground truth from fully consented, staged recordings across at least two camera setups',
      'Bias auditing across crowd densities, clothing norms, times of day and site types'
    ]
  }
];

// Preserved for backwards compatibility
export const researchPaper: ResearchPaper = {
  id: 'quantization-evaluation',
  title: 'Is Quantization Language-Neutral?',
  tagline: 'Tokenization Burden and Quantization Degradation in Open-Weight LLMs',
  context: 'A controlled evaluation of three open-weight models at FP16, INT8 and NF4 across five South Asian languages, using parallel BELEBELE items and item-level paired statistics.',
  hypotheses: [
    'H1: Damage is language-dependent: Sinhala loses 5.0 accuracy points more than English to 4-bit NF4.',
    'H2: Damage tracks tokenization burden rather than a model competence in the language (ρ=+0.814).',
    'H3: Model ranking is precision-dependent: the stronger Bangla model at FP16 is the weaker one at NF4.'
  ],
  modelsEvaluated: [
    'Qwen2.5-3B-Instruct',
    'Gemma-2-2b-it',
    'BLOOMZ-3b'
  ],
  precisions: ['FP16 (Half Precision)', 'INT8 (LLM.int8())', 'NF4 (NormalFloat 4-bit QLoRA)'],
  languages: [
    { code: 'eng_Latn', name: 'English', script: 'Latin', notes: 'Reference baseline' },
    { code: 'ben_Beng', name: 'Bangla', script: 'Bengali', notes: 'Primary target' },
    { code: 'sin_Sinh', name: 'Sinhala', script: 'Sinhala', notes: 'Low-resource evaluation' },
    { code: 'asm_Beng', name: 'Assamese', script: 'Bengali script', notes: 'Low-resource evaluation' },
    { code: 'npi_Deva', name: 'Nepali', script: 'Devanagari', notes: 'Cross-script control' }
  ],
  findings: [
    'Damage is language-dependent: Sinhala loses 5.0 accuracy points more than English to 4-bit NF4.',
    'NF4 degradation rank-correlates with median tokens per item at ρ=+0.814, showing no correlation with base accuracy.',
    'Language-specific LoRA adaptation failed to mitigate quantization sensitivity across test sweeps.'
  ],
  metricsTable: researchItems[0].metricsTable!
};
