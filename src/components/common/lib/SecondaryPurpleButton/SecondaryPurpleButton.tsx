import React from 'react';
import styles from './SecondaryPurpleButton.module.scss';
import { ArrowGreenBg } from '@/components/icons';

type Props = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const SecondaryPurpleButton: React.FC<Props> = ({ title, onClick, disabled = false }) => {
  return (
    <button className={styles.animatedButton} onClick={onClick} disabled={disabled}>
      <span>{title}</span>
      <div className={styles.arrow}>
        <ArrowGreenBg />
      </div>
    </button>
  );
};
