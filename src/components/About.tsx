import aboutPortrait from '../assets/images/about-portrait-sitting.jpg';
import cursorPeek from '../assets/images/cursor-peek-walking.jpg';
import { Reveal } from './Reveal';
import { RevealMask } from './RevealMask';
import { KineticText } from './KineticText';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <Reveal className={styles.portraitWrap}>
        <div className={styles.portrait}>
          <RevealMask
            baseSrc={aboutPortrait}
            revealSrc={cursorPeek}
            alt="Arunkumar P portrait"
            className={styles.portraitImg}
          />
          <span className={styles.portraitTag}>
            <span className={styles.pulse} />
            Open to relocate
          </span>
        </div>
      </Reveal>

      <div className={styles.copy}>
        <Reveal>
          <KineticText text="About" className="section-overline" />
          <h2>
            From electrical circuits to <span className="gradient-text">production systems</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p>
            I started in <strong>Electrical &amp; Electronics Engineering</strong> at Anand Institute
            of Higher Technology, but the pull toward building software won out. After an intensive
            full-stack certification at Besant Technologies, I joined <strong>Hanbee Technology</strong>{' '}
            as a Software Engineer — where I now own an entire production platform end to end.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <p>
            My work sits at the backend: <strong>Node.js, Express, and PostgreSQL</strong> powering
            REST APIs and real data workflows, with <strong>React 19</strong> on top when the product
            needs a front end that feels as considered as the system behind it.
          </p>
        </Reveal>

        <Reveal delay={0.2} className={styles.pivot}>
          <h3>How I work</h3>
          <p>
            I use AI tools the way a good carpenter uses power tools — to move faster, not to skip
            the joinery. That's how one person ends up architecting, building, and shipping an
            entire production platform solo: careful schema design, real authentication, a deploy
            pipeline that doesn't fall over at 2am. I'm looking for a team now, ideally at an MNC,
            where I can bring that same speed to something bigger and learn from engineers who've
            solved problems at a scale I haven't yet.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
