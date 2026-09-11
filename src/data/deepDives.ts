export interface DeepDive {
  title: string;
  body: string;
  project: string;
}

export const deepDives: DeepDive[] = [
  {
    title: 'Interactions that feel instant, even before the backend is',
    body: 'Clock-in rings and break management built with optimistic UI updates — the interface responds the moment you act, then reconciles with the server, instead of making every click wait on a round trip.',
    project: 'Pulse',
  },
  {
    title: 'A deploy pipeline that doesn’t page me at 2am',
    body: 'From schema migration to zero-downtime deploy — built so a production release is routine, not a fire drill, even with one engineer on call.',
    project: 'WorkBridge',
  },
  {
    title: 'A schema built to scale sideways',
    body: 'Indexed relations designed around how the platform actually gets queried in production, not just how the data looked on day one.',
    project: 'WorkBridge',
  },
  {
    title: 'Built to hold thousands of rows, not just the demo data',
    body: 'TanStack Table and Recharts set up with pagination and virtualization from the start, so the visualization layer won’t need a rewrite the moment real attendance data starts flowing through it.',
    project: 'Pulse',
  },
];
