export interface SkillLayer {
  title: string;
  label: string;
  items: string[];
}

export const skillLayers: SkillLayer[] = [
  {
    title: 'Frontend',
    label: 'WHAT USERS TOUCH',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    label: 'WHERE THE RULES LIVE',
    items: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Python'],
  },
  {
    title: 'Mobile',
    label: 'SAME LOGIC, SMALLER SCREEN',
    items: ['React Native', 'Expo', 'Flutter (basic)'],
  },
  {
    title: 'Database',
    label: 'WHAT NEVER GETS LOST',
    items: ['PostgreSQL', 'Supabase', 'Redis', 'Prisma', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    label: 'WHAT KEEPS IT UP AT 3AM',
    items: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Render'],
  },
  {
    title: 'Tools',
    label: 'HOW THE TEAM MOVES FAST',
    items: ['Git', 'Figma', 'Postman'],
  },
];

import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiVuedotjs,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiRender,
  SiDocker,
  SiTypescript,
  SiGraphql,
  SiRedis,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export interface MarqueeItem {
  name: string;
  icon: IconType;
}

export const marqueeStack: MarqueeItem[] = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'React Native', icon: SiReact },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Render', icon: SiRender },
  { name: 'AWS', icon: FaAws },
  { name: 'Docker', icon: SiDocker },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Redis', icon: SiRedis },
];