import React from 'react';
import styles from './PrimaryGreenButton.module.scss';

type Props = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  reversedColor?: boolean;
};

export const PrimaryGreenButton: React.FC<Props> = ({ title, onClick, disabled = false, reversedColor = false }) => {
  return (
    <button
      className={`${styles.animatedButton} ${reversedColor ? styles.reversed : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{title}</span>
    </button>
  );
};
