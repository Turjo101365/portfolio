import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'goli-transit',
    title: 'EZZ GO (Goli-Transit)',
    tagline: 'Multi-modal transit routing engine & live command center for high-density cities',
    summary: 'A hyper-local transit routing platform engineered to solve Dhaka\'s mobility bottlenecks across alleyways (golis), multi-modal networks (MRT-6 Metro, city buses, CNGs, rickshaws), and arterial corridors. Combines graph-based shortest path routing with real-time disruption recalculation.',
    category: 'Full-Stack · GIS & Routing',
    year: '2026',
    accent: 'crimson',
    technologies: ['Node.js', 'Express.js', 'React 18', 'Three.js', 'Leaflet GIS', 'MySQL 8', 'Redis', 'Zod', 'JWT'],
    liveUrl: 'https://frontend-nine-ashen-17.vercel.app',
    githubUrl: 'https://github.com/Turjo101365/Goli-Transit',
    isLive: true,
    
    badgeLabel: 'Full-Stack · Routing Engine',
    caseStudy: {
      overview: 'Dhaka is one of the densest cities on earth, characterized by informal narrow streets (golis) where four-wheel vehicles cannot enter, unpredictable road blockages, and an emerging metro corridor (MRT-6). Traditional mapping services fail to reflect multimodal local reality.',
      problem: 'Commuters frequently experience multi-hour delays because conventional navigation assumes homogeneous vehicle access and static road graphs, failing to calculate mode-switch penalties or narrow alley shortcuts.',
      technicalSolution: 'Engineered a multi-modal graph routing core utilizing Dijkstra and A* pathfinding with custom mode-transition penalties over a realistic spatial node network of Dhaka. Integrated real-time anomaly detection to dynamically penalize disrupted edges and calculate automated detours, supported by a database-driven fare engine, Three.js 3D corridor visualizer, and an operations command center.',
      keyHighlights: [
        'Multi-modal graph traversal: Walking, Rickshaws, CNGs, City Buses, and MRT-6 Metro',
        'Dynamic disruption rerouting with crowdsourced incident verification workflow',
        'Three.js 3D traffic simulation rendering volumetric corridor congestion',
        'Role-separated admin command center with audit logs, node editor, and fare matrices',
        'Bilingual interface with complete English and native Bengali (বাংলা) localization'
      ],
      metrics: [
        { label: 'Commits Contributed', value: '85 (Lead Author)' },
        { label: 'Modes Supported', value: '5 Transit Types' },
        { label: 'Live Server Status', value: '100% Operational' }
      ]
    }
  },
  {
    id: 'gridwise',
    title: 'GridWise',
    tagline: 'Plain-English operator directives translated into provably optimal microgrid schedules',
    summary: 'An intelligent energy scheduling engine uniting natural language processing, deterministic safety guardrails, and exact mathematical optimization to orchestrate 24-hour campus energy dispatch across batteries, solar PV, and grid tariffs.',
    category: 'Applied AI · Constrained Optimization',
    year: '2026',
    accent: 'amber',
    technologies: ['Python 3.12', 'FastAPI', 'SciPy (HiGHS LP)', 'NumPy', 'Pydantic v2', 'OpenAI', 'Groq', 'React 19', 'TypeScript', 'Docker'],
    liveUrl: 'https://gridwise-hampton.onrender.com',
    githubUrl: 'https://github.com/fairuz-anadi/gridWise',
    isLive: true,
    achievement: '🚀 BUP CSE Fest 2026 Software & AI Hackathon',
    badgeLabel: 'Hackathon · AI & LP Optimizer',
    caseStudy: {
      overview: 'Campus energy operators communicate in colloquial instructions ("hold 40% battery for evening exams", "feeder derated 5-8 PM"). Direct prompting of LLMs to generate dispatch schedules produces numerical hallucinations and battery damage.',
      problem: 'Bridging human linguistic nuance and strict physical electrical constraints without allowing probabilistic models to touch the actual kilowatt dispatch numbers.',
      technicalSolution: 'Decoupled semantic extraction from numerical optimization: LLMs (OpenAI/Groq) parse directives into structured JSON overrides. A deterministic guardrail pipeline validates physical sanity and passes the boundaries to a SciPy HiGHS linear programming solver that mathematically guarantees minimum cost under campus constraints.',
      keyHighlights: [
        'Zero-hallucination architecture: LLM parses linguistics, HiGHS solver computes megawatts',
        'Deterministic validation guardrails preventing battery overcharge or feeder overload',
        'Interactive React 19 operator console with Recharts 24-hour load telemetry',
        'FastAPI asynchronous REST backend with automated cron keep-alive pinging (0.13s response)',
        'Extensive pytest verification fixture based on official BUP CSE Fest test cases'
      ],
      metrics: [
        { label: 'Evaluation Speed', value: '0.13s Health P99' },
        { label: 'Optimization Engine', value: 'SciPy HiGHS LP' },
        { label: 'Operational Safety', value: '100% Guaranteed' }
      ]
    }
  },
  {
    id: 'acadiq',
    title: 'AcadIQ',
    tagline: 'Academic intelligence & multi-LLM jury exam moderation platform for university faculty',
    summary: 'An AI-powered academic decision-support platform designed to assist university faculty in syllabus coverage auditing, Bloom\'s taxonomy balancing, and historical question redundancy detection, featuring an automated Multi-LLM Jury evaluation pipeline.',
    category: 'Full-Stack · Multi-LLM Systems',
    year: '2026',
    accent: 'indigo',
    technologies: ['TypeScript 5.5', 'Node.js', 'Express', 'React 18', 'Prisma ORM', 'MySQL 8', 'Ollama', 'Docker Compose', 'Chart.js'],
    liveUrl: 'https://acadiq-platform.onrender.com',
    githubUrl: 'https://github.com/Turjo101365/AcadIQ',
    isLive: true,
    achievement: '🚀 AUST CSE Carnival AI Build Hackathon',
    badgeLabel: 'Hackathon · Multi-LLM Jury',
    caseStudy: {
      overview: 'University faculty invest significant manual hours auditing exam papers to ensure questions align proportionally with the syllabus, avoid excessive recall questions, and do not repeat previous years\' papers.',
      problem: 'Manual syllabus auditing is slow, inconsistent across departments, and prone to oversight. Single-LLM grading scripts are biased and lack transparent disagreement signaling.',
      technicalSolution: 'Built a full-stack platform with clean architecture. Features a local on-device Ollama subsystem for privacy-preserving PDF RAG, paired with a 4-model Multi-LLM Jury (Qwen2.5, Phi3.5, Mistral, LLoRA) that cross-grades student answers against reference rubrics and flags discrepancies for human review.',
      keyHighlights: [
        'Local Ollama AI system providing zero-cloud PDF RAG, vision QA, and question generation',
        'Multi-LLM Jury evaluator scoring student answers with automated discrepancy detection',
        'Bloom\'s taxonomy distribution & syllabus coverage analyzer with Chart.js analytics',
        'Student answer script batch evaluation with custom BeSTRaP and OS dataset seeding',
        'Docker containerized deployment with Prisma ORM and MySQL 8.0'
      ],
      metrics: [
        { label: 'Commits Contributed', value: '33 (Lead AI Author)' },
        { label: 'Models in Jury', value: '4 Distinct LLMs' },
        { label: 'Privacy Mode', value: '100% Local RAG' }
      ]
    }
  },
  {
    id: 'mela',
    title: 'MELA (MelaFair)',
    tagline: 'High-concurrency digital fair & event management platform with row-level database locking',
    summary: 'An enterprise cultural exhibition management platform built with ASP.NET Core 8 MVC and SQL Server 2022. Coordinates multi-day festivals, high-concurrency commercial stall leasing, and gate admission quotas without double-booking race conditions.',
    category: 'Enterprise Backend · Concurrency Control',
    year: '2026',
    accent: 'teal',
    technologies: ['C# 12', '.NET 8', 'ASP.NET Core MVC', 'SQL Server 2022', 'Dapper', 'Entity Framework Core', 'Docker', 'Tailwind CSS', 'GitHub Actions'],
    liveUrl: 'https://mela.runasp.net',
    githubUrl: 'https://github.com/Turjo101365/MELA',
    isLive: true,
    achievement: '🏛️ High-Throughput Relational Architecture Showcase',
    badgeLabel: 'Enterprise · Concurrency Safe',
    caseStudy: {
      overview: 'Traditional festival booth booking relies on manual paperwork or uncoordinated spreadsheets. When prime stalls open for booking simultaneously, race conditions trigger catastrophic double-bookings and revenue disputes.',
      problem: 'Ensuring atomic stall reservation and ticket inventory decrement under heavy millisecond concurrent traffic without database deadlocks or data corruption.',
      technicalSolution: 'Implemented a dual-ORM architecture pairing Dapper for high-speed stored procedures and analytical views with Entity Framework Core for entity mapping. Enforced atomic commercial booth reservations via SQL Server row-level update locks (UPDLOCK, ROWLOCK) and capacity triggers.',
      keyHighlights: [
        'Pessimistic database locking (UPDLOCK, ROWLOCK) guaranteeing zero double-bookings',
        'Dual-ORM hybrid: Dapper micro-ORM for stored procedures, EF Core for domain models',
        'Four discrete role personas (Admin, Vendor, Staff, Visitor) with cryptographic anti-forgery',
        'Containerized multi-stage Docker build with automated xUnit regression CI/CD',
        'Production hosting on MonsterASP.NET with SQL Server 2022 database cluster'
      ],
      metrics: [
        { label: 'Locking Strategy', value: 'UPDLOCK, ROWLOCK' },
        { label: 'Double Bookings', value: '0 (Mathematically Safe)' },
        { label: 'Automated Tests', value: 'xUnit CI Verified' }
      ]
    }
  },
  {
    id: 'dna-simulator',
    title: 'Human Bio-Simulator 3D',
    tagline: 'On-device computer vision hand tracking & volumetric WebGL physiological simulation',
    summary: 'A browser-native biomedical simulation platform integrating touchless Google MediaPipe hand gesture tracking, Three.js WebGL procedural shaders, biophysical telemetry HUD, and a local Ollama AI medical assistant in English and Bengali.',
    category: 'Visual Computing · Edge AI',
    year: '2026',
    accent: 'purple',
    technologies: ['JavaScript', 'Three.js (WebGL 2.0)', 'MediaPipe Vision (WASM)', 'React 18', 'Ollama LLM', 'Tailwind CSS', 'WebAssembly'],
    liveUrl: 'https://human-bio-simulator-dna.onrender.com',
    githubUrl: 'https://github.com/Turjo101365/DNA',
    isLive: true,
    achievement: '🧬 Zero-Cloud Vision & Shader Architecture',
    badgeLabel: 'Edge Vision · WebGL 2.0',
    caseStudy: {
      overview: 'Medical education and sterile surgical theaters require spatial comprehension that 2D diagrams cannot convey, but physical mice/keyboards create cross-contamination risks and cloud-based vision streaming compromises patient privacy.',
      problem: 'Executing real-time 60 FPS 3D volumetric anatomical rendering while concurrently running 21-point hand tracking directly in consumer browsers without cloud dependencies.',
      technicalSolution: 'Compiled Google MediaPipe Vision to WebAssembly with GPU acceleration to extract 21 hand landmarks locally. Developed a kinematic smoothing layer that transforms hand gestures into 3D camera orbital navigation, controlling 5 physiological shader models and an Ollama medical assistant.',
      keyHighlights: [
        'Zero-cloud privacy: MediaPipe WASM runs locally on GPU at 60 FPS directly from webcam',
        '5 anatomical systems: 4-chamber heart, synaptic EEG brain, lungs, visceral tract, 36-bp DNA',
        'Deterministic gesture engine with LERP inertia smoothing and tremor filtering',
        'Real-time biophysical telemetry HUD with Latin taxonomy raycast inspection',
        'Context-aware local Ollama AI assistant with complete bilingual English/Bangla localization'
      ],
      metrics: [
        { label: 'Vision Tracking', value: '21 3D Landmarks' },
        { label: 'Frame Rate', value: '60 FPS on GPU' },
        { label: 'Cloud Dependencies', value: '0 (100% Offline)' }
      ]
    }
  },
  {
    id: 'omnichat-ai',
    title: 'OmniChat AI',
    tagline: 'Multi-provider conversational AI platform & LangChain RAG orchestrator',
    summary: 'An enterprise-grade conversational AI platform engineered to eliminate vendor lock-in and browser credential leakage. Unifies OpenRouter, Hugging Face, and Botpress with a LangChain.js RAG pipeline and containerized MySQL 8.0.',
    category: 'Full-Stack · RAG Orchestration',
    year: '2026',
    accent: 'cyan',
    technologies: ['Node.js', 'Express.js', 'React 18', 'LangChain.js 0.3', 'MySQL 8.0', 'Docker Compose', 'Tailwind CSS', 'Vite 6'],
    githubUrl: 'https://github.com/Turjo101365/ai-chatbot-web',
    isLive: true,
    liveUrl: 'https://omnichat-ai-zqzu.onrender.com',
    achievement: '🧠 Decoupled Multi-Model Architecture',
    badgeLabel: 'LangChain · RAG Pipeline',
    caseStudy: {
      overview: 'Building generative AI web apps directly against single commercial providers exposes API keys in browser network inspection, creates vendor lock-in, and loses conversational context across user sessions.',
      problem: 'Architecting a production-safe gateway that isolates credentials, allows runtime model switching across cloud providers, and grounds conversations in private PDF documents.',
      technicalSolution: 'Designed a provider abstraction layer in Express.js supporting OpenRouter, Hugging Face Serverless, and Botpress. Built a LangChain.js RAG engine with recursive text splitting, in-memory vector similarity search, and session telemetry recorded in MySQL 8.0.',
      keyHighlights: [
        'Dynamic provider switching without client code refactoring or secret leakage',
        'PDF ingestion pipeline with recursive text chunking and vector similarity retrieval',
        'Relational MySQL 8.0 database tracking persistent chat sessions and token usage telemetry',
        'Security middleware with regex-based credential redaction and IP rate limiting',
        'Full containerization via Docker Compose including phpMyAdmin administration'
      ],
      metrics: [
        { label: 'Supported Gateways', value: 'OpenRouter, HF, Botpress' },
        { label: 'RAG Retrieval', value: 'Vector Similarity' },
        { label: 'Security Isolation', value: '100% Credential Redaction' }
      ]
    }
  }
];
