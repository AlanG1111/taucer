import React from 'react';
import styles from './GreenButton.module.scss';

type Props = {
  title: string;
  onClick: () => void;
};

const GreenButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button className={styles.animatedButton} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

export default GreenButton;
