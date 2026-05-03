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
    description: 'Primary reserved domain for the future FlowHub product.',
    note: 'Not live yet',
  },
  {
    name: 'getflowhub.xyz',
    status: 'Experimental',
    category: 'FlowHub',
    description:
      'Alternate FlowHub domain kept for experiments, redirects, or future use.',
    note: 'Parked',
  },
  {
    name: 'getflowhub.cloud',
    status: 'Reserved',
    category: 'Infrastructure',
    description:
      'Cloud-flavored FlowHub domain reserved for possible infrastructure or deployment use.',
    note: 'Parked',
  },
  {
    name: 'gamehubbg.com',
    status: 'Unused',
    category: 'GameHub',
    description:
      'Reserved domain for possible game-related projects or experiments.',
    note: 'Inactive',
  },
  {
    name: 'deadvector.gamehubbg.com',
    status: 'Live',
    category: 'Game project',
    description:
      'Active browser game project hosted under the GameHub domain.',
    note: 'Live project',
  },
  {
    name: 'deyanilkov.com',
    status: 'Personal',
    category: 'Personal brand',
    description:
      'Personal branding domain reserved for a portfolio or public profile.',
    note: 'Reserved',
  },
];

export function findDomainByHostname(hostname: string): Domain | undefined {
  const normalized = hostname.toLowerCase().replace(/^www\./, '');
  return domains.find((d) => d.name === normalized);
}
