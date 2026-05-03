import type { DomainContext } from '../hooks/useCurrentDomain';
import { domains } from '../data/domains';
import { StatusPill } from './StatusPill';
import { TypingText } from './TypingText';
import { AnimatedCount } from './AnimatedCount';
import { GitHubIcon } from './icons';

const GH_URL = 'https://github.com/homophobiaa';

interface Props {
  ctx: DomainContext;
}

export function Hero({ ctx }: Props) {
  const { hostname, domain, env } = ctx;

  const statusPill =
    env === 'preview' ? (
      <StatusPill status="Preview" label="Preview environment" />
    ) : domain ? (
      domain.status === 'Live' ? (
        <StatusPill status="Live" label={domain.note} />
      ) : (
        <StatusPill status={domain.status} label={`Parked · ${domain.note}`} />
      )
    ) : (
      <StatusPill status="Unknown" label="Unlisted" />
    );

  const isLive = domain?.status === 'Live';

  return (
    <section className="panel" aria-labelledby="hero-title">
      <div className="panel__shimmer" aria-hidden />

      <div className="status__head">
        <span className="status__title">Current request</span>
        {statusPill}
      </div>

      <h1 className="status__headline" id="hero-title">
        {env === 'preview' ? (
          <>You are inside a <em>preview environment</em>.</>
        ) : isLive ? (
          <>This domain is <em>live</em>.</>
        ) : (
          <>Oops, <em>nothing lives here yet</em>.</>
        )}
      </h1>

      <p className="status__sub">
        This domain is reserved by{' '}
        <a
          href={GH_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--ink)', borderBottom: '1px dashed var(--hairline-strong)' }}
        >
          @homophobiaa
        </a>{' '}
        and currently points to this domain hub.
      </p>

      <div className="status__domainbox" aria-live="polite">
        <div className="status__domainmeta">
          <span className="status__hostlabel">Detected host</span>
          {domain ? <StatusPill status={domain.status} /> : null}
        </div>
        <div className="status__host" aria-label={`Detected hostname ${hostname}`}>
          <TypingText text={hostname || 'unknown'} />
        </div>
        <p className="status__verdict">
          {domain ? (
            <>
              <strong>{domain.category}</strong> · {domain.description}
            </>
          ) : env === 'preview' ? (
            'Development or preview deployment.'
          ) : (
            'Not connected to an active project yet.'
          )}
        </p>
      </div>

      <div className="status__foot">
        <div className="kvrow">
          <span><span className="k">domains</span><b><AnimatedCount value={domains.length} /></b></span>
          <span><span className="k">env</span><b>{env}</b></span>
        </div>
        <a
          className="btn btn--secondary"
          href={GH_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon size={14} />
          @homophobiaa
        </a>
      </div>
    </section>
  );
}
