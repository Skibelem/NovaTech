import React, { useEffect, useMemo, useRef } from 'react';

function CursorGlow() {
  const rafIdRef = useRef(null);
  const enabledRef = useRef(false);
  const hiddenRef = useRef(false);

  const targetRef = useRef({ x: -9999, y: -9999 });
  const currentRef = useRef({ x: -9999, y: -9999 });

  const mainRef = useRef(null);
  const accentRef = useRef(null);

  const config = useMemo(
    () => ({
      // smoothing factor (higher = more responsive, lower = more smooth)
      ease: 0.12,
      // base sizes
      mainSize: { w: 420, h: 420 },
      accentSize: { w: 220, h: 220 },
      // intensity multipliers
      baseOpacity: 0.14,
      accentOpacity: 0.08,
      hoverBoostOpacity: 0.22,
      hoverBoostAccentOpacity: 0.12,
      // translate offset to center circle on cursor
      offset: (size) => Math.round(size / 2),
    }),
    []
  );

  useEffect(() => {
    const prefersCoarsePointer = window.matchMedia?.('(pointer: coarse)')?.matches;
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0 || prefersCoarsePointer;

    // Graceful disable for touch / coarse pointers
    if (isTouchDevice) return;

    const onVisibility = () => {
      hiddenRef.current = document.hidden;
    };

    onVisibility();
    document.addEventListener('visibilitychange', onVisibility, { passive: true });

    // Enable
    enabledRef.current = true;

    const onMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const interactiveSelector =
      'a,button,[role="button"],input,textarea,select,[data-cursor-glow],.card,.project-card';

    const bumpHover = (on) => {
      const mainEl = mainRef.current;
      const accentEl = accentRef.current;
      if (!mainEl || !accentEl) return;

      if (on) {
        mainEl.style.opacity = String(config.hoverBoostOpacity);
        accentEl.style.opacity = String(config.hoverBoostAccentOpacity);
      } else {
        mainEl.style.opacity = String(config.baseOpacity);
        accentEl.style.opacity = String(config.accentOpacity);
      }
    };

    const onPointerOver = (ev) => {
      const el = ev.target?.closest?.(interactiveSelector);
      if (!el) return;
      bumpHover(true);
    };

    const onPointerOut = (ev) => {
      const related = ev.relatedTarget;
      // If moving to another interactive element, keep boosted
      if (related?.closest?.(interactiveSelector)) return;
      bumpHover(false);
    };

    // Track cursor position
    window.addEventListener('mousemove', onMove, { passive: true });

    // Subtle hover enhancement without re-renders
    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.addEventListener('pointerout', onPointerOut, { passive: true });

    const tick = () => {
      rafIdRef.current = window.requestAnimationFrame(tick);

      if (!enabledRef.current || hiddenRef.current) return;

      const t = targetRef.current;
      const c = currentRef.current;

      // If far away (initial), avoid drifting animations
      const dx = t.x - c.x;
      const dy = t.y - c.y;
      if (Math.abs(dx) + Math.abs(dy) < 0.5) {
        c.x = t.x;
        c.y = t.y;
      } else {
        c.x += dx * config.ease;
        c.y += dy * config.ease;
      }

      const mainEl = mainRef.current;
      const accentEl = accentRef.current;

      if (mainEl) {
        const mx = Math.round(c.x - config.offset(config.mainSize.w));
        const my = Math.round(c.y - config.offset(config.mainSize.h));
        // GPU-friendly transform (translate3d)
        mainEl.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }

      if (accentEl) {
        const mx = Math.round(c.x - config.offset(config.accentSize.w));
        const my = Math.round(c.y - config.offset(config.accentSize.h));
        accentEl.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
    };

    rafIdRef.current = window.requestAnimationFrame(tick);

    return () => {
      enabledRef.current = false;

      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('mousemove', onMove);

      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);

      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
    };
  }, [config]);

  return (
    <>
      <div
        ref={mainRef}
        className="cursor-glow-layer cursor-glow-main"
        aria-hidden="true"
      />
      <div
        ref={accentRef}
        className="cursor-glow-layer cursor-glow-accent"
        aria-hidden="true"
      />
    </>
  );
}

export default CursorGlow;
