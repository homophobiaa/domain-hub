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
        <TopNav />
        <main className="main">
          <div className="container">
            <Hero ctx={ctx} />
            <DomainList ctx={ctx} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
