import orbit1 from '@/assets/images/project/orbit-1.png';
import orbit2 from '@/assets/images/project/orbit-2.png';
import orbit3 from '@/assets/images/project/orbit-3.png';
import orbit4 from '@/assets/images/project/orbit-4.png';
import pulse1 from '@/assets/images/project/pulse-1.png';
import pulse2 from '@/assets/images/project/pulse-2.png';
import pulse3 from '@/assets/images/project/pulse-3.png';
import pulse4 from '@/assets/images/project/pulse-4.png';
import nimbus1 from '@/assets/images/project/nimbus-1.png';
import nimbus2 from '@/assets/images/project/nimbus-2.png';
import nimbus3 from '@/assets/images/project/nimbus-3.png';
import nimbus4 from '@/assets/images/project/nimbus-4.png';
import fieldnote1 from '@/assets/images/project/fieldnote-1.png';
import fieldnote2 from '@/assets/images/project/fieldnote-2.png';
import fieldnote3 from '@/assets/images/project/fieldnote-3.png';
import fieldnote4 from '@/assets/images/project/fieldnote-4.png';
import aperture1 from '@/assets/images/project/aperture-1.png';
import aperture2 from '@/assets/images/project/aperture-2.png';
import aperture3 from '@/assets/images/project/aperture-3.png';
import aperture4 from '@/assets/images/project/aperture-4.png';
import farmWebHome from '@/assets/images/project/farm2home_website/webhomepage.webp';
import farmShop from '@/assets/images/project/farm2home_website/shoppage.webp';
import farmAbout from '@/assets/images/project/farm2home_website/aboutpage.webp';
import farmHowItWorks from '@/assets/images/project/farm2home_website/howitworks.webp';
import farmContact from '@/assets/images/project/farm2home_website/contactpage.webp';
import f2hAdminLandingPage from '@/assets/images/project/farm2home_admin/adminhomepage.webp';
import f2hAdminProductPage from '@/assets/images/project/farm2home_admin/adminproductpage.webp';
import f2hAdminInventorypage from '@/assets/images/project/farm2home_admin/admininventorypage.webp';
import f2hAdminDeliveryPage from '@/assets/images/project/farm2home_admin/admindeliverypage.webp';
import f2hAdminAnalyticsPage from '@/assets/images/project/farm2home_admin/adminanalyticspage.webp';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  liveUrl: string;
  githubUrl: string;
  /** Cover image shown on the project card and used as the slider's first slide. */
  image?: string;
  /** Gallery images shown in the project modal slider. */
  images?: string[];
  /** Full-detail content shown in the project modal (falls back to description when omitted). */
  longDescription?: string;
  features?: string[];
  role?: string;
  year?: string;
  status?: string;
  subtitle?: string;
  category?: string;
  featured?: boolean;
  platform?: string;
}

export const projects: Project[] = [
  {
    title: 'Orbit — Analytics Dashboard',
    description:
      'Real-time analytics platform processing 2M+ events daily with sub-second query response.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    gradient: '135deg, #3B82F6, #06B6D4',
    liveUrl: '#',
    githubUrl: '#',
    image: orbit1,
    images: [orbit1, orbit2, orbit3, orbit4],
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
    title: 'Farm2Home — Website',
    description:
    'Public-facing website introducing the Farm2Home startup, its mission, services, and farm-to-home marketplace.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    gradient: '135deg, #22C55E, #14B8A6',
    liveUrl: 'https://farm2homewebsite.vercel.app/',
    githubUrl: 'https://github.com/Ronelmelendrez/Farmtohome',
    image: farmWebHome,
    images: [
      farmShop,
      farmHowItWorks,
      farmAbout,
      farmContact,
  ],
    longDescription:
      'The Farm2Home website serves as the public-facing platform for the startup. It introduces the Farm2Home concept, communicates its value to customers, and presents the vision of making fresh local products more accessible through digital technology.',
    features: [
      'Responsive startup landing page',
      'Farm2Home brand and startup presentation',
      'Product and service showcase',
      'Responsive design for desktop and mobile',
      'Clear calls-to-action for customers and partners',
      'Deployed and accessible through Vercel',
  ],
    role: 'Frontend Developer',
    year: '2026',
    status: 'Live',
  },
  {
    title: 'Farm2Home — Admin Dashboard',
    description:
      'Administrative dashboard for managing Farm2Home products, customers, orders, inventory, and platform operations.',
    tech: ['React', 'Express.js', 'Supabase', 'Tailwind CSS'],
    gradient: '135deg, #15803D, #0F766E',
    liveUrl: 'https://farmtohome-ashy.vercel.app/',
    githubUrl: 'https://github.com/Ronelmelendrez/Farmtohome',
    image: f2hAdminLandingPage,
    images: [
      f2hAdminProductPage,
      f2hAdminInventorypage,
      f2hAdminDeliveryPage,
      f2hAdminAnalyticsPage,
    ],
    longDescription:
      'The Farm2Home Admin Dashboard provides the operational side of the startup ecosystem. It allows administrators to manage products, monitor customer orders, manage inventory, and oversee the data supporting the Farm2Home mobile application.',
    features: [
      'Product and category management',
      'Customer and order management',
      'Inventory and stock management',
      'Centralized operational dashboard',
      'Supabase-powered database integration',
      'Administrative tools for managing the Farm2Home platform',
    ],
    role: 'Full Stack Developer',
   year: '2026',
    status: 'Completed',
  },
  {
    title: 'Pulse — Team Chat',
    description: 'Lightweight team messaging tool with threads, search, and file sharing.',
    tech: ['Next.js', 'Socket.io', 'PostgreSQL'],
    gradient: '135deg, #06B6D4, #1E293B',
    liveUrl: '#',
    githubUrl: '#',
    image: pulse1,
    images: [pulse1, pulse2, pulse3, pulse4],
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
    image: nimbus1,
    images: [nimbus1, nimbus2, nimbus3, nimbus4],
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
    title: 'Fieldnote — Mobile CRM',
    description: 'Offline-first field service app with a browser-native sync engine.',
    tech: ['React Native', 'RxDB', 'Express'],
    gradient: '135deg, #06B6D4, #3B82F6',
    liveUrl: '#',
    githubUrl: '#',
    image: fieldnote1,
    images: [fieldnote1, fieldnote2, fieldnote3, fieldnote4],
    role: 'Mobile Developer',
    year: '2023',
    status: 'Live',
  },
  {
    title: 'Aperture — Design System',
    description: 'Shared component library adopted across six internal products.',
    tech: ['React', 'Storybook', 'Tailwind'],
    gradient: '135deg, #1E293B, #3B82F6',
    liveUrl: '#',
    githubUrl: '#',
    image: aperture1,
    images: [aperture1, aperture2, aperture3, aperture4],
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
