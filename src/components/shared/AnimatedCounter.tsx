import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  delay?: number;
}

export function AnimatedCounter({ target, duration = 2000, delay = 800 }: AnimatedCounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = Date.now();
    let raf: number;

    const timer = setTimeout(() => {
      const tick = () => {
        const p = Math.min((Date.now() - start - delay) / duration, 1);
        if (p < 0) {
          raf = requestAnimationFrame(tick);
          return;
        }
        const ease = 1 - Math.pow(1 - p, 3);
        setValue(Math.floor(target * ease));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      tick();
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay]);

  return <>{value.toLocaleString()}</>;
}
