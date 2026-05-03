export type DomainStatus = 'Reserved' | 'Unused' | 'Personal' | 'Experimental';

export interface Domain {
  hostname: string;
  label: string;
  description: string;
  status: DomainStatus;
}

export const domains: Domain[] = [
  {
    hostname: 'getflowhub.app',
    label: 'getflowhub.app',
    description: 'Reserved for FlowHub — the canonical app domain.',
    status: 'Reserved',
  },
  {
    hostname: 'getflowhub.xyz',
    label: 'getflowhub.xyz',
    description: 'Experimental FlowHub workspace for prototypes and ideas.',
    status: 'Experimental',
  },
  {
    hostname: 'getflowhub.cloud',
    label: 'getflowhub.cloud',
    description: 'Cloud / infrastructure flavored FlowHub domain.',
    status: 'Reserved',
  },
  {
    hostname: 'gamehubbg.com',
    label: 'gamehubbg.com',
    description: 'Held for a future gaming-adjacent project.',
    status: 'Unused',
  },
  {
    hostname: 'deyanilkov.com',
    label: 'deyanilkov.com',
    description: 'Personal branding and portfolio domain.',
    status: 'Personal',
  },
];

export function findDomainByHostname(hostname: string): Domain | undefined {
  const normalized = hostname.toLowerCase().replace(/^www\./, '');
  return domains.find((d) => d.hostname === normalized);
}
