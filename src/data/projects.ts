export interface FeaturedProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  challenge: { title: string; body: string };
  stack: string[];
  liveUrl: string;
  codeUrl?: string;
  imageAlt: string;
  status: 'Live in production' | 'Self-initiated';
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'workbridge',
    name: 'WorkBridge',
    tagline: 'Production workforce platform — architected and shipped solo',
    description:
      'The flagship platform at Hanbee Technology. Every layer — API, database schema, auth, deploy — built end to end by one engineer.',
    problem:
      'Hanbee needed a production-grade internal platform with no existing team or codebase to build from.',
    solution:
      'Designed and shipped the full stack alone: Node.js/Express REST APIs, PostgreSQL schema design, OAuth-based authentication with email flows, and a React 19 + Tailwind + Framer Motion front end — now live in production with zero team dependencies.',
    challenge: {
      title: 'Auth "working" and auth being safe in production are different problems.',
      body: 'The real work was in the edge cases: expired and revoked OAuth tokens, the same person signing in with email one day and Google the next without ending up as two accounts, and keeping sessions safe with httpOnly cookies and CSRF protection — with no security team to catch what I missed.',
    },
    stack: ['React 19', 'Node.js', 'Express', 'PostgreSQL', 'OAuth', 'REST APIs', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://workbridge.hanbee.in',
    imageAlt: 'WorkBridge production platform',
    status: 'Live in production',
  },
  {
    slug: 'pulse',
    name: 'Pulse',
    tagline: 'Enterprise multi-vertical workforce management platform',
    description:
      'A self-initiated system built to scale across corporate orgs, public school districts, and private training institutions.',
    problem:
      'Different organization types (corporate, schools, training institutes) needed one unified system for attendance, approvals, and compliance — without forking the codebase per vertical.',
    solution:
      'Built a single scalable architecture with real-time attendance tracking (interactive clock-in rings, break management), multi-tier request approval workflows for leave and shift coverage, and role-based access control with compliance credential tracking — data visualized with TanStack Table and Recharts.',
    challenge: {
      title: 'A smooth table with 50 rows says nothing about 5,000.',
      body: 'Attendance and compliance records grow fast, and that’s a frontend problem before it’s a backend one. I built the data layer around TanStack Table’s pagination and virtualization from day one, with optimistic UI updates on every clock-in and approval, so the interface stays responsive under real load once it’s wired to a production data source.',
    },
    stack: ['React 19', 'Tailwind CSS', 'Framer Motion', 'TanStack Table', 'Recharts'],
    liveUrl: 'https://managementsystem-fkx0.onrender.com',
    imageAlt: 'Pulse workforce management platform',
    status: 'Self-initiated',
  },
];

export const githubUsername = 'Arunkumar3624';
export const githubProfileUrl = `https://github.com/${githubUsername}`;
