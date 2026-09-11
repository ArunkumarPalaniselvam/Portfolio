import { coreStack, skillGroups, currentFocus } from '../data/skills';
import { techIcons } from '../data/techIcons';
import { Reveal } from './Reveal';
import { KineticText } from './KineticText';
import styles from './SkillsBento.module.css';

function SkillIcon({ name }: { name: string }) {
  const icon = techIcons[name];
  if (!icon) return null;
  return (
    <svg
      className={styles.skillIcon}
      viewBox="0 0 24 24"
      fill={icon.hex === '000000' ? 'currentColor' : `#${icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

export function SkillsBento() {
  return (
    <section id="skills" className={styles.section}>
      <Reveal className={styles.header}>
        <div>
          <KineticText text="Skills" className="section-overline" />
          <h2>
            The stack I <span className="gradient-text">build with.</span>
          </h2>
        </div>
        <p className={styles.coreNote}>
          Working daily with <strong>{coreStack.join(', ')}</strong>.
        </p>
      </Reveal>

      <div className={styles.list}>
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} className={styles.row} delay={i * 0.05} y={16}>
            <span className={styles.rowLabel}>
              <span className={styles.rowIndex}>0{i + 1}</span>
              {group.label}
            </span>
            <div className={styles.rowItems}>
              {group.items.map((item) =>
                techIcons[item] ? (
                  <span className={styles.skillItem} key={item}>
                    <SkillIcon name={item} />
                    {item}
                  </span>
                ) : (
                  <span className={`${styles.skillItem} ${styles['skillItem--plain']}`} key={item}>
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        ))}

        <Reveal delay={skillGroups.length * 0.05} y={16} className={`${styles.row} ${styles.focusRow}`}>
          <span className={styles.rowLabel}>
            <span className={styles.rowIndex}>{'→'}</span>
            Now exploring
          </span>
          <div className={styles.rowItems}>
            {currentFocus.map((item) => (
              <span className={`${styles.skillItem} ${styles.focusItem}`} key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
