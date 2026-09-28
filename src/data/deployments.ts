import { Deployment } from '../types';

export const deployments: Deployment[] = [
  {
    id: 'goli-transit',
    title: 'Goli Transit Engine',
    description: 'Multi-modal transit pathfinder with dynamic congestion recalculation and 3D corridor visualizer for Dhaka.',
    url: 'https://frontend-nine-ashen-17.vercel.app',
    githubUrl: 'https://github.com/Turjo101365/Goli-Transit',
    platform: 'Vercel (Edge)',
    status: 'Operational',
    latency: '42ms',
    accent: 'crimson'
  },
  {
    id: 'gridwise',
    title: 'GridWise Dispatch API',
    description: 'LLM semantic directive parser and SciPy HiGHS linear programming campus microgrid optimization service.',
    url: 'https://gridwise-hampton.onrender.com',
    githubUrl: 'https://github.com/fairuz-anadi/gridWise',
    platform: 'Render + Docker',
    status: 'Operational',
    latency: '130ms',
    accent: 'amber'
  },
  {
    id: 'mela',
    title: 'MELA Event Portal',
    description: 'Enterprise festival stall leasing and ticket sales with SQL Server pessimistic concurrency locking.',
    url: 'https://mela.runasp.net',
    githubUrl: 'https://github.com/Turjo101365/MELA',
    platform: 'MonsterASP.NET / IIS',
    status: 'Operational',
    latency: '85ms',
    accent: 'teal'
  },
  {
    id: 'fridgemama',
    title: 'FridgeMama Smart Fridge',
    description: 'AI-assisted kitchen inventory companion with YOLO vision sidecar and shelf-life tracking.',
    url: 'https://fridgemama.vercel.app',
    githubUrl: 'https://github.com/fairuz-anadi/leftover-chef',
    platform: 'Vercel + Docker',
    status: 'Operational',
    latency: '55ms',
    accent: 'purple'
  }
];
