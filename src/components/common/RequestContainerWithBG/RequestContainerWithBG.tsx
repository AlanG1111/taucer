import React from 'react';
import RequestBanner from '../RequestBanner/RequestBanner';
import styles from './RequestContainerWithBG.module.scss';

export const RequestContainerWithBG: React.FC = () => {
  return (
    <div className={styles.requestContainer}>
      <RequestBanner />
    </div>
  );
};
