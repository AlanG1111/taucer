import React from 'react';
import styles from './spinner.module.scss';

export const CircularSpinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
