export interface Certificate {
  slug: string;
  version: string;
  issuer: string;
  credentialId: string;
}

export const certificates: Certificate[] = [
  {
    slug: 'aws-certified-solutions-architect',
    version: '2024',
    issuer: 'Amazon Web Services',
    credentialId: 'AWS-SAA-88213',
  },
  {
    slug: 'meta-react-advanced',
    version: '2023',
    issuer: 'Meta · Coursera',
    credentialId: 'META-RA-40217',
  },
  {
    slug: 'mongodb-certified-developer',
    version: '2022',
    issuer: 'MongoDB University',
    credentialId: 'MDB-C100-19558',
  },
  {
    slug: 'google-ux-design',
    version: '2021',
    issuer: 'Google · Coursera',
    credentialId: 'GUX-2021-77042',
  },
  {
    slug: 'certified-kubernetes-app-developer',
    version: '2020',
    issuer: 'The Linux Foundation',
    credentialId: 'CKAD-2020-30894',
  },
];