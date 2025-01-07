import React from 'react';
import RequestBanner from '@/components/common/RequestBanner/RequestBanner';
import styles from './RequestContainer.module.scss';

export const RequestContainer: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <RequestBanner />
    </div>
  );
};
