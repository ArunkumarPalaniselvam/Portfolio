import { motion } from 'framer-motion';
import heroGlow from '../assets/images/hero-glow.jpg';
import cursorPeek from '../assets/images/cursor-peek-outdoor.jpg';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { RevealMask } from './RevealMask';
import { KineticText } from './KineticText';
import styles from './Hero.module.css';

const LINES = [
  { text: 'Arunkumar', style: 'plain' as const },
  { text: 'builds backends', style: 'plain' as const },
  { text: 'that ship.', style: 'accent' as const },
];

interface HeroProps {
  ready: boolean;
}

export function Hero({ ready }: HeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const start = ready || prefersReducedMotion;

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.blobViolet} aria-hidden="true" />
      <div className={styles.blobCyan} aria-hidden="true" />

      <div className={styles.copy}>
        <p className={styles.overline}>
          <span className={styles.dot} />
          <KineticText text="Full-Stack / Backend Developer — Hanbee Technology" delay={0.1} start={start} />
        </p>

        <h1 className={styles.headline}>
          {LINES.map((line, i) => (
            <span className={styles.headlineLine} key={line.text}>
              <motion.span
                initial={{ y: '110%' }}
                animate={start ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={line.style === 'accent' ? `gradient-text ${styles.accentWord}` : undefined}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className={styles.lede}
          initial={{ opacity: 0, y: 16 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          I design, architect, and ship production-grade systems end to end — Node.js and Express
          APIs, PostgreSQL schemas, and React 19 front ends built with the same care — most
          recently as the sole engineer behind <strong>workbridge.hanbee.in</strong>.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 16 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#work" className="btn btn--primary" data-cursor-hover>
            See the work
          </a>
          <a
            href="https://wa.me/919342804230?text=Hi%20Arunkumar%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
            data-cursor-hover
          >
            Let&rsquo;s talk
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.visual}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={start ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.frame}>
          <RevealMask
            baseSrc={heroGlow}
            revealSrc={cursorPeek}
            alt="Arunkumar P"
            className={styles.frameImg}
          />
          <div className={styles.frameBorder} aria-hidden="true" />
        </div>
      </motion.div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        Scroll
      </div>
    </section>
  );
}
