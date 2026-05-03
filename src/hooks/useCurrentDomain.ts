import { useEffect, useState } from 'react';
import { findDomainByHostname, type Domain } from '../data/domains';

export interface DomainContext {
  hostname: string;
  domain: Domain | null;
  isPreview: boolean;
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
    return { hostname: '', domain: null, isPreview: true };
  }
  const hostname = window.location.hostname;
  const domain = findDomainByHostname(hostname) ?? null;
  const isPreview =
    !domain &&
    (hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.endsWith('.vercel.app') ||
      hostname.endsWith('.local'));
  return { hostname, domain, isPreview };
}
