import { domains } from '../data/domains';
import { DomainCard } from './DomainCard';
import { AnimatedCount } from './AnimatedCount';
import type { DomainContext } from '../hooks/useCurrentDomain';

interface Props {
  ctx: DomainContext;
}

export function DomainList({ ctx }: Props) {
  return (
    <section className="list" aria-labelledby="list-title">
      <header className="list__head">
        <h2 className="list__title" id="list-title">
          Registry · parked domains
        </h2>
        <span className="list__count" aria-label={`${domains.length} domains`}>
          <strong><AnimatedCount value={domains.length} /></strong> entries
        </span>
      </header>

      <div role="list" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {domains.map((d, i) => (
          <div role="listitem" key={d.name}>
            <DomainCard
              domain={d}
              active={ctx.domain?.name === d.name}
              index={i}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
