import React from 'react';
import styles from './PrimaryPurpleButton.module.scss';

type Props = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

export const PrimaryPurpleButton: React.FC<Props> = ({ title, onClick, disabled = false }) => {
  return (
    <button className={`${styles.animatedButton}`} onClick={onClick} disabled={disabled}>
      <span>{title}</span>
    </button>
  );
};
