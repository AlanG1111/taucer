import React from 'react';
import { CurlyArrowType4 } from '../../icons';
import CustomCarousel from '../../common/CustomCarousel/CustomCarousel';
import styles from './HomePageMemories.module.scss';

export const HomePageMemories: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
  //TODO: replace with real images
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        <div className={`${styles.titleContainer} container`}>
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
