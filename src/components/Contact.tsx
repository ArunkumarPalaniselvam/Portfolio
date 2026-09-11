import footerBackview from '../assets/images/footer-backview.jpg';
import { githubProfileUrl } from '../data/projects';
import { Reveal } from './Reveal';
import { KineticText } from './KineticText';
import styles from './Contact.module.css';

const EMAIL = 'arunkumar.palaniselvam.s@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/arunkumar-panalniselvam-s';
const PHONE = '+91 93428 04230';

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgImage} aria-hidden="true">
        <img src={footerBackview} alt="" />
      </div>

      <div className={styles.inner}>
        <Reveal>
          <KineticText text="Contact" className="section-overline" />
          <h2 className={styles.heading}>
            Let&rsquo;s build <span className="gradient-text accent-italic">something great.</span>
          </h2>
          <p className={styles.sub}>
            Looking for a full-stack or backend role where I can bring that same production speed
            to a bigger team — and learn a ton doing it. Open to relocation.
          </p>
        </Reveal>

        <Reveal delay={0.1} className={styles.ctaRow}>
          <a href={`mailto:${EMAIL}`} className="btn btn--primary" data-cursor-hover>
            Email me
          </a>
          <a href="/resume.html" target="_blank" rel="noreferrer" className="btn btn--ghost" data-cursor-hover>
            View résumé
          </a>
        </Reveal>

        <Reveal delay={0.16} className={styles.links}>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
          <a
            href="https://wa.me/919342804230?text=Hi%20Arunkumar%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={githubProfileUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Reveal>
      </div>

      <div className={styles.footer}>
        <span>© {new Date().getFullYear()} Arunkumar P</span>
        <span>Built with React, Framer Motion &amp; too much coffee</span>
      </div>
    </section>
  );
}
