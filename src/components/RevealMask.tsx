import { useEffect, useRef, useState } from 'react';
import styles from './RevealMask.module.css';

interface RevealMaskProps {
  baseSrc: string;
  revealSrc: string;
  alt: string;
  /** Reveal circle radius as a fraction of the element's own rendered
   * width, so a bigger photo gets a proportionally bigger reveal instead
   * of a fixed pixel size that reads as "too small" on larger images. */
  radiusRatio?: number;
  className?: string;
}

/**
 * Two images stacked in the exact same spot. The top one is clipped to a
 * circle that follows the pointer, so moving the cursor over the photo
 * reveals only the corresponding patch of the second image underneath it —
 * not a whole separate preview, just the part directly beneath the cursor.
 */
export function RevealMask({ baseSrc, revealSrc, alt, radiusRatio = 0.34, className }: RevealMaskProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLImageElement>(null);
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const wrap = wrapRef.current;
    const reveal = revealRef.current;
    if (!wrap || !reveal) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let hovering = false;
    let frameId: number;
    let radius = wrap.getBoundingClientRect().width * radiusRatio;

    function applyClip() {
      reveal!.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
    }

    function loop() {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      applyClip();
      if (hovering || Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        frameId = requestAnimationFrame(loop);
      }
    }

    function handleMove(event: MouseEvent) {
      const rect = wrap!.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
      if (!hovering) {
        x = targetX;
        y = targetY;
        applyClip();
      }
    }

    function handleEnter(event: MouseEvent) {
      hovering = true;
      const rect = wrap!.getBoundingClientRect();
      radius = rect.width * radiusRatio;
      x = targetX = event.clientX - rect.left;
      y = targetY = event.clientY - rect.top;
      applyClip();
      setActive(true);
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(loop);
    }

    function handleLeave() {
      hovering = false;
      setActive(false);
    }

    wrap.addEventListener('mouseenter', handleEnter);
    wrap.addEventListener('mousemove', handleMove);
    wrap.addEventListener('mouseleave', handleLeave);

    return () => {
      wrap.removeEventListener('mouseenter', handleEnter);
      wrap.removeEventListener('mousemove', handleMove);
      wrap.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(frameId);
    };
  }, [isTouch, radiusRatio]);

  return (
    <div ref={wrapRef} className={`${styles.wrap} ${className ?? ''}`}>
      <img src={baseSrc} alt={alt} className={styles.base} />
      {!isTouch && (
        <img
          ref={revealRef}
          src={revealSrc}
          alt=""
          aria-hidden="true"
          className={`${styles.reveal} ${active ? styles['reveal--active'] : ''}`}
        />
      )}
    </div>
  );
}
