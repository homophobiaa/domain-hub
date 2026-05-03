import { useEffect, useState } from 'react';
import { findDomainByHostname, type Domain } from '../data/domains';

export type EnvKind = 'live' | 'preview' | 'unknown';

export interface DomainContext {
  hostname: string;
  domain: Domain | null;
  env: EnvKind;
}

export function useCurrentDomain(): DomainContext {
  const [ctx, setCtx] = useState<DomainContext>(() => resolve());

  useEffect(() => {
    setCtx(resolve());
  }, []);

  return ctx;
}

function resolve(): DomainContext {
  if (typeof window === 'undefined') {
    return { hostname: '', domain: null, env: 'preview' };
  }
  const hostname = window.location.hostname;
  const domain = findDomainByHostname(hostname) ?? null;
  if (domain) return { hostname, domain, env: 'live' };

  const isPreview =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.endsWith('.vercel.app') ||
    hostname.endsWith('.local');

  return { hostname, domain: null, env: isPreview ? 'preview' : 'unknown' };
}
