export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  liveUrl: string;
  githubUrl: string;
  /** Full-detail content shown in the project modal (falls back to description when omitted). */
  longDescription?: string;
  features?: string[];
  role?: string;
  year?: string;
  status?: string;
  /** Gallery images for the modal slider — 4 auto-generated artwork slides by default. */
  images?: string[];
}

const projectData: Project[] = [
  {
    title: 'Orbit — Analytics Dashboard',
    description:
      'Real-time analytics platform processing 2M+ events daily with sub-second query response.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    gradient: '135deg, #3B82F6, #06B6D4',
    liveUrl: '#',
    githubUrl: '#',
    longDescription:
      'Orbit is a real-time analytics platform that ingests over 2 million events per day and turns them into live, explorable dashboards. Events stream through a Node.js ingestion layer, aggregate into PostgreSQL, and hot datasets are cached in Redis to keep query responses under a second — even across months of historical data.',
    features: [
      'Real-time event ingestion with WebSocket-powered live charts',
      'Sub-second queries on 2M+ daily events via Redis caching',
      'Custom dashboard builder with drag-and-drop widgets',
      'Role-based access control and shareable report links',
    ],
    role: 'Full Stack Developer',
    year: '2024',
    status: 'Live',
  },
  {
    title: 'Fieldnote — Mobile CRM',
    description: 'Cross-platform CRM for field sales teams with offline-first sync.',
    tech: ['React Native', 'Expo', 'GraphQL'],
    gradient: '135deg, #06B6D4, #3B82F6',
    liveUrl: '#',
    githubUrl: '#',
    longDescription:
      'Fieldnote is a cross-platform CRM built for field sales teams who work in areas with unreliable connectivity. Every interaction is stored locally first through an offline-first sync engine, then reconciled with the GraphQL backend when a connection returns — so reps never lose a note, contact, or deal update.',
    features: [
      'Offline-first data layer with automatic background sync',
      'Conflict-free merge of offline edits per field',
      'Route planning and check-in reminders for client visits',
      'Push notifications for deal stage changes',
    ],
    role: 'Mobile Developer',
    year: '2024',
    status: 'Live',
  },
  {
    title: 'Ledger — Invoicing API',
    description: 'Multi-tenant invoicing and billing API used by 40+ small businesses.',
    tech: ['Express', 'MongoDB', 'Stripe API'],
    gradient: '135deg, #3B82F6, #1E293B',
    liveUrl: '#',
    githubUrl: '#',
    longDescription:
      'Ledger is a multi-tenant invoicing and billing API that powers invoicing for 40+ small businesses. It handles client management, recurring invoices, payment tracking, and Stripe payment collection — with strict per-tenant data isolation and idempotent webhooks so no payment is ever double-counted.',
    features: [
      'Multi-tenant architecture with strict data isolation',
      'Recurring invoices with automatic retry on failed payments',
      'Stripe integration with idempotent webhook processing',
      'PDF invoice generation and email delivery',
    ],
    role: 'Backend Developer',
    year: '2023',
    status: 'Live',
  },
  {
    title: 'Pulse — Team Chat',
    description: 'Lightweight team messaging tool with threads, search, and file sharing.',
    tech: ['Next.js', 'Socket.io', 'PostgreSQL'],
    gradient: '135deg, #06B6D4, #1E293B',
    liveUrl: '#',
    githubUrl: '#',
    longDescription:
      'Pulse is a lightweight team messaging tool focused on speed: threads, full-text search, and file sharing without the bloat. Messages are delivered over Socket.io with optimistic UI updates, while PostgreSQL stores the canonical history that powers instant search across every channel.',
    features: [
      'Real-time messaging with typing indicators and read receipts',
      'Threaded conversations to keep channels organized',
      'Instant full-text search across channels and files',
      'Drag-and-drop file sharing with image previews',
    ],
    role: 'Full Stack Developer',
    year: '2023',
    status: 'In Development',
  },
  {
    title: 'Nimbus — Cloud Deploys',
    description: 'One-click deployment pipeline abstraction over AWS and Docker.',
    tech: ['AWS', 'Docker', 'Terraform'],
    gradient: '135deg, #3B82F6, #06B6D4',
    liveUrl: '#',
    githubUrl: '#',
    longDescription:
      'Nimbus is a one-click deployment pipeline that abstracts away AWS infrastructure. Applications are containerized with Docker, provisioned with Terraform modules, and deployed behind a load balancer with automatic SSL, health checks, and zero-downtime rollouts — no cloud expertise required.',
    features: [
      'One-click deploys from Git push to production',
      'Terraform modules for repeatable AWS infrastructure',
      'Zero-downtime rollouts gated by health checks',
      'Automatic SSL provisioning and renewal',
    ],
    role: 'DevOps Engineer',
    year: '2024',
    status: 'Live',
  },
  {
    title: 'Aperture — Design System',
    description: 'Shared component library adopted across six internal products.',
    tech: ['React', 'Storybook', 'Tailwind'],
    gradient: '135deg, #1E293B, #3B82F6',
    liveUrl: '#',
    githubUrl: '#',
    longDescription:
      'Aperture is a shared component library adopted across six internal products. Built on React and Tailwind with accessibility baked in, every component ships with Storybook documentation, visual regression tests, and design tokens that keep color and spacing consistent across every product surface.',
    features: [
      '40+ accessible React components with keyboard support',
      'Design tokens for consistent color, spacing, and type',
      'Storybook documentation with live playgrounds',
      'Visual regression testing on every pull request',
    ],
    role: 'Frontend Developer',
    year: '2023',
    status: 'Live',
  },
];

/**
 * Mock gallery images for the project modals, imported through Vite's asset
 * pipeline from `src/assets/images/project/<slug>-<1-4>.png`.
 * Drop files in that folder (or replace them with real screenshots) and they
 * are picked up automatically — no code changes needed.
 */
const galleryImages = import.meta.glob<{ default: string }>('../assets/images/project/*.png', {
  eager: true,
});

const imageByFile = new Map(
  Object.entries(galleryImages).map(([file, mod]) => [file.split('/').pop() as string, mod.default]),
);

/** 'Orbit — Analytics Dashboard' -> 'orbit' */
const toSlug = (title: string): string =>
  title
    .split(/[—–\-:(']/)[0]
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** The 4 gallery images for a project (`<slug>-1.png` … `<slug>-4.png`). */
const projectImages = (title: string): string[] =>
  [1, 2, 3, 4]
    .map((n) => imageByFile.get(`${toSlug(title)}-${n}.png`))
    .filter((src): src is string => Boolean(src));

export const projects: Project[] = projectData.map((project) => {
  const images = projectImages(project.title);
  return images.length > 0 ? { ...project, images } : project;
});