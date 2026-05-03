import type { DomainStatus } from '../data/domains';

interface Props {
  status: DomainStatus | 'Preview' | 'Unknown';
  label?: string;
}

const classMap: Record<string, string> = {
  Reserved: 'pill pill--reserved',
  Unused: 'pill pill--unused',
  Personal: 'pill pill--personal',
  Experimental: 'pill pill--experimental',
  Live: 'pill pill--live',
  Preview: 'pill pill--preview',
  Unknown: 'pill pill--unknown',
};

export function StatusPill({ status, label }: Props) {
  return (
    <span className={classMap[status] ?? 'pill'}>
      <span className="pill__dot" aria-hidden />
      {label ?? status}
    </span>
  );
}
