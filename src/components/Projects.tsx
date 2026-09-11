import { featuredProjects } from '../data/projects';
import workbridgeShot from '../assets/images/screenshots/workbridge.jpg';
import pulseShot from '../assets/images/screenshots/pulse.jpg';
import { Reveal } from './Reveal';
import { ProjectCard } from './ProjectCard';
import { DeepDives } from './DeepDives';
import { KineticText } from './KineticText';

const IMAGES: Record<string, string> = {
  workbridge: workbridgeShot,
  pulse: pulseShot,
};

export function Projects() {
  return (
    <section id="work" className="container" style={{ paddingTop: 'var(--space-2xl)' }}>
      <Reveal>
        <KineticText text="Featured work" className="section-overline" />
        <h2 style={{ fontSize: 'var(--text-h2)', letterSpacing: '-0.02em', maxWidth: '22ch' }}>
          Two platforms, built from a blank canvas and{' '}
          <span className="gradient-text">shipped end to end.</span>
        </h2>
      </Reveal>

      <div style={{ marginTop: 'var(--space-lg)' }}>
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} image={IMAGES[project.slug]} reverse={i % 2 === 1} />
        ))}
      </div>

      <DeepDives />
    </section>
  );
}
