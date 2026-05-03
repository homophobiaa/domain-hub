import { Background } from './components/Background';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { DomainList } from './components/DomainList';
import { Footer } from './components/Footer';
import { useCurrentDomain } from './hooks/useCurrentDomain';

export default function App() {
  const ctx = useCurrentDomain();

  return (
    <>
      <Background />
      <div className="app">
        <div className="container shell">
          <TopNav />
          <main className="hero" aria-label="Domain status">
            <Hero ctx={ctx} />
            <DomainList ctx={ctx} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
