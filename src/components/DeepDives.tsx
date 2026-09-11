import { deepDives } from '../data/deepDives';
import { githubProfileUrl } from '../data/projects';
import { Reveal } from './Reveal';
import styles from './DeepDives.module.css';

export function DeepDives() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.header}>
        <h3>Technical deep dives</h3>
        <p>The parts of WorkBridge and Pulse that took real thinking to get right.</p>
      </Reveal>

      <div className={styles.grid}>
        {deepDives.map((dive, i) => (
          <Reveal key={dive.title} delay={i * 0.06} y={16} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.project}>{dive.project}</span>
            </div>
            <div className={styles.cardTitle}>{dive.title}</div>
            <p className={styles.cardBody}>{dive.body}</p>
          </Reveal>
        ))}
      </div>

      <div className={styles.footer}>
        <span>Smaller experiments live on</span>
        <a href={githubProfileUrl} target="_blank" rel="noreferrer" data-cursor-hover>
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
