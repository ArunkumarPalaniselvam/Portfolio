import type { FeaturedProject } from '../data/projects';
import { Reveal } from './Reveal';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: FeaturedProject;
  image: string;
  reverse?: boolean;
}

export function ProjectCard({ project, image, reverse }: ProjectCardProps) {
  const displayUrl = project.liveUrl.replace('https://', '');

  return (
    <div className={`${styles.row} ${reverse ? styles.rowReverse : ''}`}>
      <Reveal className={styles.visual} y={24}>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.chrome}>
          <div className={styles.chromeBar}>
            <span className={styles.dots}>
              <span />
              <span />
              <span />
            </span>
            <span className={styles.chromeUrl}>{displayUrl}</span>
          </div>
          <img src={image} alt={project.imageAlt} loading="lazy" />
        </a>
      </Reveal>

      <div className={styles.copy}>
        <Reveal delay={0.05}>
          <span className={styles.badge}>{project.status}</span>
          <h3>{project.name}</h3>
          <p className={styles.tagline}>{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.block}>
            <strong>Problem</strong>
            <p>{project.problem}</p>
          </div>
          <div className={styles.block}>
            <strong>Solution</strong>
            <p>{project.solution}</p>
          </div>
        </Reveal>

        <Reveal delay={0.13} className={styles.challenge}>
          <strong>How I solved it</strong>
          <p className={styles.challengeTitle}>{project.challenge.title}</p>
          <p>{project.challenge.body}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={styles.pills}>
            {project.stack.map((tech) => (
              <span className={styles.pill} key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--primary" data-cursor-hover>
              View live ↗
            </a>
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn btn--ghost" data-cursor-hover>
                Code
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
