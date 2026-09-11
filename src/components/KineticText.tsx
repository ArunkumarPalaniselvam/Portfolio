import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'span' | 'div';
  /** When provided, animation is controlled externally (e.g. by a loader
   * gate) instead of triggering on scroll into view. */
  start?: boolean;
}

/**
 * Per-word blur-in reveal — used for small labels (section overlines, the
 * hero role line) so kinetic type reads consistently across the site
 * instead of a single flat fade.
 */
export function KineticText({ text, className, delay = 0, as = 'span', start }: KineticTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const words = text.split(' ');
  const Tag = as === 'div' ? motion.div : motion.span;

  const controlledProps =
    start === undefined
      ? { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-40px' } }
      : { initial: 'hidden', animate: start ? 'visible' : 'hidden' };

  return (
    <Tag className={className} {...controlledProps}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
          variants={{
            hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8, filter: prefersReducedMotion ? 'none' : 'blur(6px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.5, delay: delay + i * 0.035, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Tag>
  );
}
