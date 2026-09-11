import type Lenis from 'lenis';

let activeLenis: Lenis | null = null;

export function setActiveLenis(instance: Lenis | null) {
  activeLenis = instance;
}

export function getActiveLenis(): Lenis | null {
  return activeLenis;
}

/**
 * Smoothly scroll to an in-page anchor, using Lenis when available (matching
 * the site's wheel-scroll feel) and falling back to native smooth-scroll
 * (prefers-reduced-motion, or before Lenis has mounted).
 */
export function smoothScrollToHash(hash: string, offset = -90) {
  const target = document.querySelector(hash);
  if (!target) return;

  if (activeLenis) {
    activeLenis.scrollTo(target as HTMLElement, { offset, duration: 1.2 });
  } else {
    const y = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
