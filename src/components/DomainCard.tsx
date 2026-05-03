import { useCallback, useRef, useState, type CSSProperties } from 'react';
import type { Domain } from '../data/domains';
import { StatusPill } from './StatusPill';
import { CheckIcon, CopyIcon, ExternalIcon } from './icons';

interface Props {
  domain: Domain;
  active: boolean;
  index: number;
}

export function DomainCard({ domain, active, index }: Props) {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const onMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = ((e.clientX - rect.left) / rect.width) * 100;
    const cy = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--cx', `${cx}%`);
    el.style.setProperty('--cy', `${cy}%`);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(domain.hostname);
    } catch {
      // Fallback: select-and-copy fails silently.
    }
    setCopied(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 1600);
  }, [domain.hostname]);

  const externalUrl = `https://${domain.hostname}`;

  const style = { '--delay': `${index * 70}ms` } as CSSProperties;

  return (
    <article
      ref={cardRef}
      onPointerMove={onMove}
      className={`card${active ? ' card--active' : ''}`}
      style={style}
      aria-current={active ? 'true' : undefined}
    >
      <div className="card__head">
        <div>
          <div className="card__host">{domain.label}</div>
          {active && (
            <span className="card__active-tag">Currently visiting</span>
          )}
        </div>
        <StatusPill status={domain.status} />
      </div>

      <p className="card__desc">{domain.description}</p>

      <div className="card__foot">
        <span style={{ fontSize: 12, color: 'var(--ink-tertiary)', fontFamily: 'var(--font-mono)' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="card__actions">
          <button
            type="button"
            className={`iconbtn${copied ? ' iconbtn--copied' : ''}`}
            onClick={handleCopy}
            aria-label={`Copy ${domain.hostname}`}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span className="iconbtn__feedback">Copied</span>
          </button>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="iconbtn"
            aria-label={`Open ${domain.hostname} in new tab`}
          >
            <ExternalIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
