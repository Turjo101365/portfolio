import { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core languages used across backend systems, algorithms, and applications',
    items: [
      { name: 'Python', badgeUrl: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white' },
      { name: 'TypeScript', badgeUrl: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white' },
      { name: 'JavaScript', badgeUrl: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black' },
      { name: 'C#', badgeUrl: 'https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white' },
      { name: 'C++', badgeUrl: 'https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white' },
      { name: 'PHP', badgeUrl: 'https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white' }
    ]
  },
  {
    category: 'AI / Machine Learning & Optimization',
    description: 'LLM orchestration, RAG pipelines, mathematical optimization, and vision models',
    items: [
      { name: 'LangChain', badgeUrl: 'https://img.shields.io/badge/LangChain-1C3C3C?style=flat&logo=langchain&logoColor=white' },
      { name: 'Ollama', badgeUrl: 'https://img.shields.io/badge/Ollama-000000?style=flat&logo=ollama&logoColor=white' },
      { name: 'MediaPipe', badgeUrl: 'https://img.shields.io/badge/MediaPipe-0097A7?style=flat&logo=google&logoColor=white' },
      { name: 'SciPy', badgeUrl: 'https://img.shields.io/badge/SciPy-8CAAE6?style=flat&logo=scipy&logoColor=white' },
      { name: 'NumPy', badgeUrl: 'https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white' },
      { name: 'Hugging Face', badgeUrl: 'https://img.shields.io/badge/Hugging_Face-FFD21E?style=flat&logo=huggingface&logoColor=black' },
      { name: 'OpenAI', badgeUrl: 'https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white' }
    ]
  },
  {
    category: 'Backend & Architecture',
    description: 'High-concurrency servers, microservices, transactional safety, and APIs',
    items: [
      { name: 'Node.js', badgeUrl: 'https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white' },
      { name: 'Express', badgeUrl: 'https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white' },
      { name: 'ASP.NET Core', badgeUrl: 'https://img.shields.io/badge/ASP.NET_Core-512BD4?style=flat&logo=dotnet&logoColor=white' },
      { name: 'FastAPI', badgeUrl: 'https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white' },
      { name: 'Laravel', badgeUrl: 'https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white' }
    ]
  },
  {
    category: 'Frontend & 3D Graphics',
    description: 'Modern reactive user interfaces, WebGL 3D simulations, and telemetry dashboards',
    items: [
      { name: 'React', badgeUrl: 'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black' },
      { name: 'Vite', badgeUrl: 'https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white' },
      { name: 'Three.js', badgeUrl: 'https://img.shields.io/badge/Three.js-000000?style=flat&logo=threedotjs&logoColor=white' },
      { name: 'Tailwind CSS', badgeUrl: 'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white' }
    ]
  },
  {
    category: 'Databases & Storage',
    description: 'Relational data stores, row-level concurrency locking, and caching',
    items: [
      { name: 'SQL Server', badgeUrl: 'https://img.shields.io/badge/SQL_Server-CC292B?style=flat&logo=microsoftsqlserver&logoColor=white' },
      { name: 'MySQL', badgeUrl: 'https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white' },
      { name: 'PostgreSQL', badgeUrl: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white' },
      { name: 'Redis', badgeUrl: 'https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white' },
      { name: 'Prisma', badgeUrl: 'https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white' }
    ]
  },
  {
    category: 'DevOps, Cloud & Tooling',
    description: 'Containerization, continuous integration, version control, and cloud platforms',
    items: [
      { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white' },
      { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white' },
      { name: 'GitHub Actions', badgeUrl: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white' },
      { name: 'Linux', badgeUrl: 'https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black' },
      { name: 'Postman', badgeUrl: 'https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white' }
    ]
  }
];
