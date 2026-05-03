import { domains } from '../data/domains';
import { DomainCard } from './DomainCard';
import type { DomainContext } from '../hooks/useCurrentDomain';

interface Props {
  ctx: DomainContext;
}

export function DomainList({ ctx }: Props) {
  return (
    <section className="section" id="domains" aria-labelledby="domains-title">
      <header className="section__head">
        <div>
          <h2 className="section__title" id="domains-title">
            Reserved & parked
          </h2>
          <p className="section__sub">
            Each domain points here. The card matching your current host is highlighted.
          </p>
        </div>
        <div className="section__count" aria-label={`${domains.length} domains`}>
          <strong>{String(domains.length).padStart(2, '0')}</strong> domains
        </div>
      </header>

      <div className="grid" role="list">
        {domains.map((d, i) => (
          <div role="listitem" key={d.hostname}>
            <DomainCard
              domain={d}
              active={ctx.domain?.hostname === d.hostname}
              index={i}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
