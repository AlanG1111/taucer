import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CustomCarousel.module.scss';
import { ArrowGreenBg } from '@/components/icons';

interface CustomCarouselProps {
  images: string[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
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
        duration: 1,
      },
    },
    exit: {
      transition: {
        duration: 0.5,
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
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselImages}>
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </AnimatePresence>
      </div>
      <div className={styles.slideDirection}>
        <div>
          <div className={styles.linkWrapper} onClick={handlePrevious}>
            <div>
              <div>
                <div className={`${styles.arrow} ${styles.leftArrow}`}>
                  <ArrowGreenBg size={72} arrowSize={28} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.linkWrapper} onClick={handleNext}>
            <div>
              <div>
                <div className={styles.arrow}>
                  <ArrowGreenBg size={72} arrowSize={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselIndicator}>
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? 'animate' : ''}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
