import { GitHubIcon } from './icons';

const GH_URL = 'https://github.com/homophobiaa';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__note">
          Maintained by{' '}
          <a
            href={GH_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink-muted)' }}
          >
            @homophobiaa
          </a>
          . This page is intentionally static, lightweight, and frontend-only.
        </div>
        <div className="footer__links">
          <span style={{ color: 'var(--ink-tertiary)' }}>© {year}</span>
          <a
            href={GH_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            <GitHubIcon size={14} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
