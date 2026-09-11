import { stats } from '../data/skills';
import { Counter } from './Counter';
import styles from './StatsBar.module.css';

export function StatsBar() {
  return (
    <section className={`${styles.bar} full-bleed`}>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <div className={styles.value}>
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
