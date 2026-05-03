import { GitHubIcon } from './icons';

const GH_URL = 'https://github.com/homophobiaa';

export function TopNav() {
  return (
    <header className="topnav">
      <div className="topnav__row">
        <a className="brand" href="/" aria-label="Domain Hub home">
          <span className="brand__logo" aria-hidden>
            <img src="/brand/Logo.svg" alt="" />
          </span>
          <span className="brand__name">Domain Hub</span>
          <span className="brand__sep" aria-hidden />
          <span className="brand__tag">parked &amp; reserved</span>
        </a>
        <div className="topnav__right">
          <a
            className="btn btn--ghost"
            href={GH_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon size={14} />
            @homophobiaa
          </a>
        </div>
      </div>
    </header>
  );
}
