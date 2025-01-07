import React from 'react';
import { CurlyArrowType4 } from '../../icons';
import CustomCarousel from '../CustomCarousel/CustomCarousel';
import styles from './PhotoSlider.module.scss';

type Props = {
  images: string[];
};

export const PhotoSlider: React.FC<Props> = ({ images }) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        <div className={`${styles.titleContainer} banner-container`}>
          <span>Наші спогади</span>
          <CurlyArrowType4 />
        </div>
        <div style={{ width: '100%', position: 'relative' }}>
          <CustomCarousel images={images} />
        </div>
      </div>
    </div>
  );
};
