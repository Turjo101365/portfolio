import { ResearchPaper } from '../types';

export const researchPaper: ResearchPaper = {
  id: 'quantization-evaluation',
  title: 'Is Quantization Language-Neutral?',
  tagline: 'Measuring whether bitsandbytes quantization degrades LLM accuracy disproportionately for low-resource languages compared to English on BELEBELE.',
  context: 'Model quantization (INT8, NF4) is essential for deploying large language models on edge hardware, but uniform bit-reduction algorithms are predominantly validated on English benchmarks. This empirical pipeline investigates accuracy degradation across South Asian and low-resource languages.',
  hypotheses: [
    'H1: Quantization (INT8 & NF4) exhibits non-uniform accuracy degradation across languages, with lower-resource scripts suffering higher relative drop-offs.',
    'H2: Tokenizer vocabulary fragmentation in non-Latin scripts amplifies logit entropy post-quantization.',
    'H3: Deterministic letter-logit scoring isolates precision degradation from generative autoregressive drift.'
  ],
  modelsEvaluated: [
    'Qwen/Qwen2.5-3B-Instruct (Pinned at aa8e7253)',
    'Gemma-2-2B-IT (Replication phase)',
    'BLOOMZ (Multilingual baseline)'
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
    'All evaluations executed strictly on Kaggle T4 GPUs using untouched 900-item BELEBELE validation sets.',
    'Scored via single forward-pass argmax over option token logits (avoiding non-deterministic generation parse failures).',
    'Demonstrated that NF4 maintains competitive latency savings while exhibiting measurable degradation variance across complex Indic scripts compared to Latin.'
  ],
  metricsTable: [
    { language: 'English (eng_Latn)', script: 'Latin', fp16: '82.4%', int8: '81.7%', nf4: '80.2%', delta: '-2.2%' },
    { language: 'Bangla (ben_Beng)', script: 'Bengali', fp16: '64.8%', int8: '63.5%', nf4: '60.9%', delta: '-3.9%' },
    { language: 'Sinhala (sin_Sinh)', script: 'Sinhala', fp16: '51.2%', int8: '49.8%', nf4: '46.7%', delta: '-4.5%' },
    { language: 'Assamese (asm_Beng)', script: 'Bengali', fp16: '55.3%', int8: '53.9%', nf4: '50.4%', delta: '-4.9%' },
    { language: 'Nepali (npi_Deva)', script: 'Devanagari', fp16: '58.1%', int8: '56.7%', nf4: '53.6%', delta: '-4.5%' }
  ]
};
