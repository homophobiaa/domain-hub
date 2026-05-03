import { GitHubIcon } from './icons';

const GH_URL = 'https://github.com/homophobiaa';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__note">
        Maintained by{' '}
        <a href={GH_URL} target="_blank" rel="noopener noreferrer">
          @homophobiaa
        </a>
      </div>
      <div className="footer__links">
        <a
          href={GH_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
        >
          <GitHubIcon size={13} />
          GitHub
        </a>
      </div>
    </footer>
  );
}
