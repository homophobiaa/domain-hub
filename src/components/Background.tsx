import { useEffect, useMemo, useRef } from 'react';

export function Background() {
  const ref = useRef<HTMLDivElement>(null);

  // pre-randomize particle layout once
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: -Math.random() * 18,
        duration: 14 + Math.random() * 14,
        size: 1 + Math.random() * 2,
      })),
    [],
  );

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let cx = tx;
    let cy = ty;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.setProperty('--mx', `${cx}px`);
      el.style.setProperty('--my', `${cy}px`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__grid" />
      <div className="bg__dots" />
      <div className="bg__orb bg__orb--a" />
      <div className="bg__orb bg__orb--b" />
      <div className="bg__orb bg__orb--c" />
      <div className="bg__streak bg__streak--a" />
      <div className="bg__streak bg__streak--b" />
      <div className="bg__streak bg__streak--c" />
      <div className="bg__particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="bg__particle"
            style={{
              left: `${p.left}%`,
              bottom: '-10vh',
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>
      <div ref={ref} className="bg__cursor" />
      <div className="bg__noise" />
    </div>
  );
}
