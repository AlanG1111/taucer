import React from 'react';
import { RequestBanner } from '../lib';
import styles from './RequestContainer.module.scss';

export const RequestContainer: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <RequestBanner />
    </div>
  );
};
