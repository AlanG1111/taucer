import React from 'react';
import RequestBanner from '../common/RequestBanner/RequestBanner';
import styles from './HomePageRequestContainer.module.scss';

const HomePageRequestContainer: React.FC = () => {
  return (
    <div className={styles.requestContainer}>
      <RequestBanner />
    </div>
  );
};

export default HomePageRequestContainer;
