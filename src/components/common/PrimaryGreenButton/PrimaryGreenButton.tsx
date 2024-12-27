import React from 'react';
import styles from './PrimaryGreenButton.module.scss';

type Props = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

const PrimaryGreenButton: React.FC<Props> = ({ title, onClick, disabled = true }) => {
  return (
    <button className={styles.animatedButton} onClick={onClick} disabled={disabled}>
      <span>{title}</span>
    </button>
  );
};

export default PrimaryGreenButton;
