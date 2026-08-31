export interface SkillLayer {
  title: string;
  label: string;
  items: string[];
}

export const skillLayers: SkillLayer[] = [
  {
    title: 'Frontend',
    label: 'WHAT USERS TOUCH',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
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
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    title: 'Cloud & DevOps',
    label: 'WHAT KEEPS IT UP AT 3AM',
    items: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Terraform'],
  },
  {
    title: 'Tools',
    label: 'HOW THE TEAM MOVES FAST',
    items: ['Git', 'Figma', 'Linear', 'Postman'],
  },
];

export const marqueeStack: string[] = [
  'React',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'TypeScript',
  'GraphQL',
  'Redis',
];