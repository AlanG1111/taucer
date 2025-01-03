import React from 'react';
import styles from './HomePageMemories.module.scss';
import { CurlyArrowType4 } from '../icons';

const HomePageMemories: React.FC = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        <div className={`${styles.titleContainer} container`}>
          <span>Наші спогади</span>
          <CurlyArrowType4 />
        </div>
        <div>carousel</div>
      </div>
    </div>
  );
};

export default HomePageMemories;
