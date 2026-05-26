export type DomainStatus =
  | 'Reserved'
  | 'Unused'
  | 'Personal'
  | 'Experimental'
  | 'Live';

export interface Domain {
  name: string;
  status: DomainStatus;
  category: string;
  description: string;
  note: string;
}

export const domains: Domain[] = [
  {
    name: 'getflowhub.app',
    status: 'Reserved',
    category: 'FlowHub',
    description:
      'Primary reserved domain for the future FlowHub productivity platform.',
    note: 'Reserved',
  },
  {
    name: 'getflowhub.xyz',
    status: 'Experimental',
    category: 'FlowHub',
    description:
      'Experimental FlowHub domain used for testing, redirects, and future concepts.',
    note: 'Experimental',
  },
  {
    name: 'getflowhub.cloud',
    status: 'Reserved',
    category: 'Infrastructure',
    description:
      'Infrastructure-focused FlowHub domain reserved for deployment or backend-related services.',
    note: 'Reserved',
  },
  {
    name: 'gamehubbg.com',
    status: 'Live',
    category: 'GameHub',
    description:
      'Community-driven game showcase platform created for a SoftUni school event.',
    note: 'Active platform',
  },
  {
    name: 'deadvector.gamehubbg.com',
    status: 'Live',
    category: 'Game project',
    description:
      'Fast-paced browser action game hosted as part of the GameHub ecosystem.',
    note: 'Playable',
  },
  {
    name: 'rindex.tech',
    status: 'Live',
    category: 'RIndex',
    description:
      "Web-based cybersecurity experience that analyzes digital habits and simulates potential attack paths to estimate a user's online vulnerability.",
    note: 'In development',
  },
  {
    name: 'deyanilkov.com',
    status: 'Personal',
    category: 'Personal brand',
    description:
      'Personal portfolio and public identity domain for projects, experiments, and branding.',
    note: 'Personal',
  },
];

export function findDomainByHostname(
  hostname: string
): Domain | undefined {
  const normalized = hostname.toLowerCase().replace(/^www\./, '');

  return domains.find((d) => d.name === normalized);
}