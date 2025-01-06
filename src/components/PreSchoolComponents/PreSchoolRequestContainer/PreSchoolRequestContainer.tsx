import React from 'react';
import RequestBanner from '@/components/common/RequestBanner/RequestBanner';
import styles from './PreSchoolRequestContainer.module.scss';

export const PreSchoolRequestContainer: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <RequestBanner />
    </div>
  );
};
