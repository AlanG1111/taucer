'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowGreenBg } from '@/components/icons';
import styles from './BannerSlider.module.scss';

type BannerSliderProps = {
  banners: React.ReactNode[];
};

export const BannerSlider: React.FC<BannerSliderProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transition: {
        duration: 1,
      },
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: 'spring', stiffness: 1000, damping: 10 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1 === banners.length ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
          animate="visible"
          exit="exit"
          variants={slideVariants}
        >
          {banners[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <div className={styles.carouselIndicator}>
        <div className={styles.linkWrapper} onClick={handlePrevious}>
          <div className={`${styles.arrow} ${styles.leftArrow}`}>
            <ArrowGreenBg />
          </div>
        </div>
        {banners.map((_, index) => (
          <motion.div
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? 'animate' : ''}
            whileHover="hover"
            variants={dotsVariants}
          >
            <span>{index + 1}</span>
          </motion.div>
        ))}
        <div className={styles.linkWrapper} onClick={handleNext}>
          <div className={styles.arrow}>
            <ArrowGreenBg />
          </div>
        </div>
      </div>
    </div>
  );
};
