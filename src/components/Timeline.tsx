import { timeline } from '../data/skills';
import { Reveal } from './Reveal';
import { KineticText } from './KineticText';
import styles from './Timeline.module.css';

export function Timeline() {
  return (
    <section className={styles.section}>
      <Reveal>
        <KineticText text="Path so far" className="section-overline" />
        <h2 style={{ fontSize: 'var(--text-h2)', letterSpacing: '-0.02em' }}>Certification &amp; education</h2>
      </Reveal>

      <div className={styles.list}>
        {timeline.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} y={16} className={styles.item}>
            <span className={styles.dot} />
            <div className={styles.period}>{item.period}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.place}>{item.place}</div>
            {item.detail && <div className={styles.detail}>{item.detail}</div>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
