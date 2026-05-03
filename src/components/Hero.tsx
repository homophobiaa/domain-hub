import { StatusPill } from './StatusPill';
import { ArrowIcon, GitHubIcon } from './icons';
import type { DomainContext } from '../hooks/useCurrentDomain';

const GH_URL = 'https://github.com/homophobiaa';

interface Props {
  ctx: DomainContext;
}

export function Hero({ ctx }: Props) {
  const { hostname, domain, isPreview } = ctx;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <span className="pill">
        <span className="pill__dot" aria-hidden />
        Domain Hub
      </span>

      <h1 className="hero__title" id="hero-title">
        Reserved domains, <em>parked with intention.</em>
      </h1>

      <p className="hero__subtitle">
        A small constellation of domains held by{' '}
        <a
          href={GH_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--ink)', borderBottom: '1px dashed var(--hairline-strong)' }}
        >
          @homophobiaa
        </a>
        . Some are placeholders for future projects, others are personal — all of them point
        here while they wait for the right moment to ship.
      </p>

      <div className="hero__cta">
        <a
          className="btn btn--primary"
          href="#domains"
        >
          Browse domains
          <ArrowIcon />
        </a>
        <a
          className="btn btn--secondary"
          href={GH_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon size={16} />
          GitHub
        </a>
      </div>

      <div className="current" role="status" aria-live="polite">
        <div>
          <div className="current__label">You are visiting</div>
          <div className="current__host">
            {hostname || 'unknown'}
          </div>
          <div className="current__meta">
            {domain
              ? domain.description
              : isPreview
                ? 'Preview environment — not one of the listed live domains.'
                : 'Hostname not recognised — unlisted domain.'}
          </div>
        </div>
        <div>
          {domain ? (
            <StatusPill status={domain.status} />
          ) : (
            <StatusPill status="Live" />
          )}
        </div>
      </div>
    </section>
  );
}
