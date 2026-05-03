import { useCallback, useRef, useState, type CSSProperties } from 'react';
import type { Domain } from '../data/domains';
import { StatusPill } from './StatusPill';
import { CheckIcon, CopyIcon, ExternalIcon } from './icons';

interface Props {
  domain: Domain;
  active: boolean;
  index: number;
}

const statusClass: Record<Domain['status'], string> = {
  Reserved: 'card--reserved',
  Experimental: 'card--experimental',
  Unused: 'card--unused',
  Personal: 'card--personal',
};

export function DomainCard({ domain, active, index }: Props) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const t = useRef<number | null>(null);

  const onMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = ((e.clientX - r.left) / r.width) * 100;
    const cy = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty('--cx', `${cx}%`);
    el.style.setProperty('--cy', `${cy}%`);

    // gentle 3D tilt
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -3;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 4;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(domain.name);
    } catch {
      /* noop */
    }
    setCopied(true);
    if (t.current) window.clearTimeout(t.current);
    t.current = window.setTimeout(() => setCopied(false), 1500);
  }, [domain.name]);

  const style = { '--delay': `${index * 60 + 120}ms` } as CSSProperties;

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`card ${statusClass[domain.status]}${active ? ' card--active' : ''}`}
      style={style}
      aria-current={active ? 'true' : undefined}
    >
      <div className="card__main">
        <div className="card__row">
          <span className="card__name">{domain.name}</span>
          <span className="card__cat">· {domain.category}</span>
          {active && <span className="card__active-tag">Currently here</span>}
        </div>
        <p className="card__desc">{domain.description}</p>
      </div>
      <div className="card__side">
        <StatusPill status={domain.status} />
        <button
          type="button"
          className={`iconbtn${copied ? ' iconbtn--copied' : ''}`}
          onClick={handleCopy}
          aria-label={`Copy ${domain.name}`}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span className="iconbtn__feedback">Copied</span>
        </button>
        <a
          href={`https://${domain.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="iconbtn"
          aria-label={`Open ${domain.name} in new tab`}
        >
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}
