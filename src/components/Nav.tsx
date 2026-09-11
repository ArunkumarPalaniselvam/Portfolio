import { useEffect, useRef, useState, type MouseEvent } from 'react';
import navAvatar from '../assets/images/nav-avatar.jpg';
import { githubProfileUrl } from '../data/projects';
import { smoothScrollToHash } from '../lib/lenisInstance';
import { ThemeToggle } from './ThemeToggle';
import styles from './Nav.module.css';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const lastY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 160);
      lastY.current = y;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    smoothScrollToHash(href);
  }

  return (
    <nav
      className={styles.nav}
      style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)', transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)' }}
    >
      <a href="#top" className={styles.mark} data-cursor-hover onClick={(e) => handleNavClick(e, '#top')}>
        <span className={styles.avatar}>
          <img src={navAvatar} alt="Arunkumar P" />
        </span>
        Arunkumar
      </a>
      <div className={styles.links}>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeHash === link.href ? styles.linkActive : undefined}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a href={githubProfileUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="/resume.html" target="_blank" rel="noreferrer" className={styles.resumeBtn}>
          Résumé
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
