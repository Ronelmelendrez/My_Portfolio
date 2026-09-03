import virtualAssistance101 from '@/assets/images/certificate/VIRTUAL_ASSISTANCE_101.webp';
import vcWebinarForStartups from '@/assets/images/certificate/VC _WEBINAR _FOR_STARTUPS.webp';
import theAiAdvantage from '@/assets/images/certificate/THE_AI_ADVANTAGE.webp';
import designThinkingProcess from '@/assets/images/certificate/DESIGN_THINKING_PROCESS.webp';
import aiForSmarterBusinesses from '@/assets/images/certificate/AI_FOR_SMARTER_BUSINESSES.webp';

export interface Certificate {
  slug: string;
  version: string;
  issuer: string;
  credentialId?: string;
  image?: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    slug: 'The AI Advantage: Understanding AI and Why It Matters to Me and My Organization',
    version: '2026',
    issuer: 'Department of Science and Technology (DOST) - Advanced Science and Technology Institute (ASTI)',
    credentialId: 'HdvHbnjGh0',
    image: theAiAdvantage,
    credentialUrl: 'https://diana.acabai.ph/mod/customcert/verify_certificate.php',
  },
  {
    slug: 'Virtual Assistance 101 & Smart Work Habits',
    version: '2026',
    issuer: 'DICT South Cotabato Field Office',
    image: virtualAssistance101,
  },
  {
    slug: 'From Ideas to Investment: VC Webinar for Startups',
    version: '2026',
    issuer: 'Department of Information and Communications Technology (DICT)',
    image: vcWebinarForStartups,
  },
  {
    slug: ' Design Thinking Process',
    version: '2025',
    issuer: 'ICT Industry Development Bureau (IIDB) of the Department of Information - Communications Technology Caraga Region (DICT-13)',
    credentialId: 'CN-P25-0219',
    image: designThinkingProcess,
  },
  {
    slug: 'Frontier Tech trends Webinar: AI for Smarter Businesses',
    version: '2026',
    issuer: 'ICT Industry Development Bureau (IIDB)',
    image: aiForSmarterBusinesses,
  },
];
