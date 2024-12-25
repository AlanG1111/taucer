import React from 'react';
import styles from './spinner.module.scss';

const CircularSpinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CircularSpinner;
