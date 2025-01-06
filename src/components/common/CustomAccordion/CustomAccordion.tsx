import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './accordion.module.scss';

type Props = {
  title: string;
  text: string;
};

const CustomAccordion: React.FC<Props> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer}>
      <div onClick={onClick} className={styles.titleContainer}>
        <span>{title}</span>
        <div className={styles.plusContainer}>
          <svg
            style={{
              transform: isOpen ? 'none' : `rotate(90deg)`,
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path d="M7.5 20H32.5" stroke="white" stroke-width="2" stroke-linecap="square" />
            <path d="M7.49976 20.0002H32.4998" stroke="white" stroke-width="2" stroke-linecap="square" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M7.5 20H32.5" stroke="white" stroke-width="2" stroke-linecap="square" />
            <path d="M7.49976 20.0002H32.4998" stroke="white" stroke-width="2" stroke-linecap="square" />
          </svg>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          >
            <div style={{ paddingTop: '8px' }}>
              <p>{text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomAccordion;
