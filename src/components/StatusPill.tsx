import type { DomainStatus } from '../data/domains';

interface Props {
  status: DomainStatus | 'Live';
}

const classMap: Record<string, string> = {
  Reserved: 'pill pill--reserved',
  Unused: 'pill pill--unused',
  Personal: 'pill pill--personal',
  Experimental: 'pill pill--experimental',
  Live: 'pill pill--live',
};

export function StatusPill({ status }: Props) {
  return (
    <span className={classMap[status] ?? 'pill'}>
      <span className="pill__dot" aria-hidden />
      {status}
    </span>
  );
}
