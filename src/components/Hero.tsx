import type { DomainContext } from '../hooks/useCurrentDomain';
import { domains } from '../data/domains';
import { StatusPill } from './StatusPill';
import { TypingText } from './TypingText';
import { AnimatedCount } from './AnimatedCount';
import { BoltIcon, CodeIcon, GitHubIcon, PlugIcon, ShieldIcon } from './icons';

const GH_URL = 'https://github.com/homophobiaa';

interface Props {
  ctx: DomainContext;
}

export function Hero({ ctx }: Props) {
  const { hostname, domain, env } = ctx;

  const headline =
    env === 'preview'
      ? 'Preview deployment.'
      : domain
        ? 'Oops — this domain isn’t doing anything yet.'
        : 'This domain is parked for now.';

  const verdict =
    env === 'preview'
      ? 'You are viewing a development or preview deployment.'
      : domain
        ? 'This domain is reserved but does not currently point to an active product.'
        : 'Hostname not on the registry — this is an unlisted parked domain.';

  const statusPill =
    env === 'preview' ? (
      <StatusPill status="Preview" label="Preview environment" />
    ) : domain ? (
      <StatusPill status="Live" label={`Parked · ${domain.note}`} />
    ) : (
      <StatusPill status="Unknown" label="Unlisted" />
    );

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
        ) : (
          <>
            {headline.split('—').length > 1 ? (
              <>
                {headline.split('—')[0]}—<em>{headline.split('—')[1]}</em>
              </>
            ) : (
              <em>{headline}</em>
            )}
          </>
        )}
      </h1>

      <p className="status__sub">
        This domain is owned and reserved by{' '}
        <a
          href={GH_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--ink)', borderBottom: '1px dashed var(--hairline-strong)' }}
        >
          @homophobiaa
        </a>
        . It currently redirects to this static hub until it becomes part of a real project.
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
          ) : (
            verdict
          )}
        </p>
      </div>

      <div className="status__foot">
        <div className="kvrow">
          <span><span className="k">domains</span><b><AnimatedCount value={domains.length} /></b></span>
          <span><span className="k">env</span><b>{env}</b></span>
          <span><span className="k">stack</span><b>static</b></span>
        </div>
        <div className="chiprow" aria-hidden>
          <span className="chip" style={{ ['--cd' as string]: '0s' }}>
            <ShieldIcon /> Reserved
          </span>
          <span className="chip" style={{ ['--cd' as string]: '0.4s' }}>
            <BoltIcon /> Static
          </span>
          <span className="chip" style={{ ['--cd' as string]: '0.8s' }}>
            <CodeIcon /> Frontend-only
          </span>
          <span className="chip" style={{ ['--cd' as string]: '1.2s' }}>
            <PlugIcon /> No backend
          </span>
        </div>
      </div>

      <div className="status__foot" style={{ borderTop: 'none', paddingTop: 0 }}>
        <a
          className="btn btn--secondary"
          href={GH_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon size={14} />
          @homophobiaa
        </a>
        <span style={{ fontSize: 12, color: 'var(--ink-tertiary)' }}>
          Parked, not forgotten.
        </span>
      </div>
    </section>
  );
}
