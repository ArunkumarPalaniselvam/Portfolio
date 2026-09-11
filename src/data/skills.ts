export interface SkillGroup {
  label: string;
  items: string[];
}

export const coreStack = ['Node.js', 'Express.js', 'PostgreSQL', 'React 19'];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'SQL'],
  },
  {
    label: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'Django', 'Django REST Framework', 'RESTful APIs', 'JWT Auth', 'RBAC'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Frontend',
    items: ['React 19', 'Tailwind CSS', 'Framer Motion', 'HTML'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Postman', 'VS Code', 'MySQL Workbench'],
  },
];

export const allSkills = Array.from(
  new Set([...coreStack, ...skillGroups.flatMap((group) => group.items)]),
);

export const currentFocus = [
  'Event-driven architecture',
  'Horizontal scaling & load balancing',
  'Caching strategies (Redis)',
  'CI/CD pipeline hardening',
];

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: 1, suffix: '', label: 'Production platform live' },
  { value: 2, suffix: '+', label: 'Full-stack projects shipped' },
  { value: 6, suffix: 'mo', label: 'Intensive full-stack training' },
  { value: 8.1, suffix: '', label: 'B.E. CGPA' },
];

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  detail?: string;
}

export const timeline: TimelineItem[] = [
  {
    period: 'Jun 2026 — Present',
    title: 'Software Engineer',
    place: 'Hanbee Technology',
    detail: 'Solo-architected and shipped workbridge.hanbee.in to production.',
  },
  {
    period: '6 Months',
    title: 'Full-Stack Development Certification',
    place: 'Besant Technologies, Thoraipakkam, Chennai',
    detail: 'Python, Django, REST APIs, SQL, MongoDB, React.',
  },
  {
    period: '2021 — 2025',
    title: 'B.E. Electrical & Electronics Engineering',
    place: 'Anand Institute of Higher Technology, Chennai',
    detail: 'CGPA 8.1',
  },
  {
    period: '2021',
    title: 'HSC',
    place: 'Nadar Hr Sec School, Rajapalayam',
    detail: '77.54%',
  },
];
