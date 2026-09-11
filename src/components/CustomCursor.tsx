import { useEffect, useRef, useState } from 'react';

type CursorMode = 'default' | 'hover' | 'view';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);
  const [mode, setMode] = useState<CursorMode>('default');
  const [label, setLabel] = useState('');

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let frameId: number;

    function handleMove(event: MouseEvent) {
      x = event.clientX;
      y = event.clientY;
    }

    function handleOver(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const viewEl = target.closest<HTMLElement>('[data-cursor-view]');
      if (viewEl) {
        setMode('view');
        setLabel(viewEl.dataset.cursorView || 'View');
        if (cursor) {
          const img = viewEl.dataset.cursorImg;
          cursor.style.backgroundImage = img ? `url(${img})` : '';
        }
        return;
      }
      if (cursor) cursor.style.backgroundImage = '';
      if (target.closest('a, button, [data-cursor-hover]')) {
        setMode('hover');
        return;
      }
      setMode('default');
    }

    function animate() {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (cursor) cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      frameId = requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    frameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(frameId);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div ref={cursorRef} className={`custom-cursor custom-cursor--${mode}`} aria-hidden="true">
      {mode === 'view' && <span className="custom-cursor__label">{label}</span>}
    </div>
  );
}
