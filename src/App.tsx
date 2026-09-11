import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { SkillsBento } from './components/SkillsBento';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ready, setReady] = useState(prefersReducedMotion);
  useLenis();

  return (
    <>
      <Loader skip={prefersReducedMotion} onComplete={() => setReady(true)} />
      <CustomCursor />
      <Nav />
      <main>
        <Hero ready={ready} />
        <StatsBar />
        <About />
        <Projects />
        <SkillsBento />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}

export default App;
