import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  onComplete: () => void;
  skip: boolean;
}

const NAME_WORDS = ['Arunkumar', 'Palaniselvam'];
const LETTER_STAGGER = 0.035;
const LETTERS_START = 0.1;
const totalLetters = NAME_WORDS.join('').length;
const lettersEnd = LETTERS_START + totalLetters * LETTER_STAGGER + 0.5;

export function Loader({ onComplete, skip }: LoaderProps) {
  const [done, setDone] = useState(skip);

  useEffect(() => {
    if (skip) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => setDone(true), (lettersEnd + 0.9) * 1000);
    return () => clearTimeout(timer);
  }, [skip, onComplete]);

  if (skip) return null;

  let letterIndex = 0;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className={styles.loader}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.nameRow}>
            {NAME_WORDS.map((word) => (
              <span className={styles.word} key={word}>
                {word.split('').map((char) => {
                  const delay = LETTERS_START + letterIndex * LETTER_STAGGER;
                  letterIndex += 1;
                  return (
                    <motion.span
                      key={`${word}-${char}-${delay}`}
                      className={styles.letter}
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </div>

          <motion.p
            className={styles.role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: lettersEnd - 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Full-Stack Developer
          </motion.p>

          <div className={styles.track}>
            <motion.div
              className={styles.bar}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: lettersEnd, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
