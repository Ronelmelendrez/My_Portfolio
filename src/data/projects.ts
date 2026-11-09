import orbit1 from '@/assets/images/project/orbit-1.png';
import orbit2 from '@/assets/images/project/orbit-2.png';
import orbit3 from '@/assets/images/project/orbit-3.png';
import orbit4 from '@/assets/images/project/orbit-4.png';
import apmsLandingPage from '@/assets/images/project/angkol-pritos-management-system/angkolPritosSystemLandingPage.webp';
import apmsDashboardPage from '@/assets/images/project/angkol-pritos-management-system/angkolPritosSystemDashboardPage.webp';
import apmsSalesPage from '@/assets/images/project/angkol-pritos-management-system/angkolPritosSystemSalesPage.webp';
import apmsCashDrawerPage from '@/assets/images/project/angkol-pritos-management-system/angkolPritosSystemCashDrawerPage.webp';
import apmsReportPage from '@/assets/images/project/angkol-pritos-management-system/angkolPritosSystemReportPage.webp';
import etacsLandingPage from '@/assets/images/project/excel-to-annex-c-system/excelToAnnexlandingPage.webp';
import etacsDashboardPage from '@/assets/images/project/excel-to-annex-c-system/excelToAnnexDashboardPage.webp';
import etacsExcelImportPage from '@/assets/images/project/excel-to-annex-c-system/excelToAnnexExcelImportsPage.webp';
import etacsReportGeneratorPage from '@/assets/images/project/excel-to-annex-c-system/excelToAnnexReportGeneratorPage.webp';
import etacsAuditPage from '@/assets/images/project/excel-to-annex-c-system/excelToAnnexAuditPage.webp';
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
    status: 'Live',
  },
  {
   title: "Angkol Prito's Trucking System",
   description:
     "Multi-branch operations system for Angkol Prito's & Lechon Manok with role-based Admin and Employee portals, branch-specific logins, and real-time sales, payroll, and cash management.",
   tech: [
     'React',
     'TypeScript',
     'Vite',
     'Tailwind CSS',
     'Supabase',
     'TanStack Query',
     'Vercel',
   ],
   gradient: '135deg, #E67E22, #C0392B',
   liveUrl: 'https://angkol-pritos-trucking-system.vercel.app/',
   githubUrl: 'https://github.com/Ronelmelendrez/Angkol_pritos_trucking_system',
   image: apmsLandingPage,
   images: [
     apmsDashboardPage,
     apmsSalesPage,
     apmsCashDrawerPage,
     apmsReportPage,
   ],
   longDescription:
     "Angkol Prito's Trucking System is a full-stack internal operations platform built for a multi-branch food business. It replaces scattered notebooks and manual record-keeping with one centralized system covering sales, customer orders, expenses, inventory, attendance, cash advances, utang (loans), daily cash reconciliation, payroll, and reporting. The system uses Supabase Auth and role-based access control to provide two separate experiences: an Admin portal for the owner/manager with access to every branch, and an Employee portal where each branch signs in with its own account and only sees its branch's data.",
   features: [
     'Role-based authentication with separate Admin and Employee portals',
     'Branch-specific employee logins provisioned during branch creation',
     'Branch-aware data access enforced through Supabase Row Level Security',
     'Sales, scheduled orders, expenses, and inventory tracking',
     'Chicken-part conversion costing and yield calculator',
     'Attendance, cash advances, loans, and payroll with automatic deductions',
     'Per-branch cash drawer opening, closing, and reconciliation',
     'Reports with sales vs. expenses, profit trends, branch comparison, and insights',
     'Mobile-first responsive design for staff working on the go',
     'Deployed on Vercel with Supabase Postgres, Auth, and Edge Functions',
   ],
   role: 'Full-Stack Developer',
   year: '2026',
   status: 'Live',
  },
  {
   title: 'Excel-to-Annex C — CAR Management System',
   description:
     'A web-based management system that transforms Excel household records into structured Case Assessment Reports (CAR) using the official Annex C document template.',
   tech: [
     'React',
     'TypeScript',
     'Vite',
     'Supabase',
     'PostgreSQL',
     'Tailwind CSS',
     'shadcn/ui',
     'Docxtemplater',
     'SheetJS',
   ],
   gradient: '135deg, #1D4ED8, #0F766E',
   liveUrl: 'https://excel-to-annex-c-car-management-sys.vercel.app',
   githubUrl: 'https://github.com/Ronelmelendrez/Excel-to-Annex-C_CAR_Management_System',
   image: etacsLandingPage,
   images: [
     etacsDashboardPage,
     etacsExcelImportPage,
     etacsReportGeneratorPage,
     etacsAuditPage,
   ],
   longDescription:
     'The Excel-to-Annex C CAR Management System is designed to streamline the preparation and management of Case Assessment Reports. It provides a centralized platform for importing household records from Excel workbooks, validating household member information, managing case assessments, and generating standardized Annex C documents using a structured DOCX template. The system aims to reduce manual data encoding, improve data consistency, and support a more organized report preparation and review workflow.',
   features: [
     'Excel workbook upload and structured data parsing',
     'Excel worksheet selection and column validation',
     'Household and household member data management',
     'Grantee identification and household data validation',
     'Case Assessment Report creation and editing',
     'Case assessment review and approval workflow',
     'Official Annex C DOCX template integration',
     'Automated DOCX and PDF report generation',
     'Import history and validation error tracking',
     'Supabase database integration and role-based access control',
   ],
   role: 'Full Stack Developer',
   year: '2026',
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
