'use client';

import React, { useState } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './customInput.module.scss';

type Props = {
  title: string;
  placeholder: string;
  errorMsg?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInput: React.FC<Props> = ({ title, placeholder, errorMsg, type = 'text', value = '', onChange }) => {
  const [isActive, setIsActive] = useState(false);

  // Determine if the input is filled
  const isFilled = value.length > 0;

  // Class names based on input state
  const inputWrapperClass = [
    styles.inputWrapper,
    errorMsg && styles.error,
    isActive && styles.active,
    isFilled && styles.filled,
  ]
    .filter(Boolean) // Remove any falsy values
    .join(' ');

  const handlePhoneChange = (value: string) => {
    onChange?.({ target: { value } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputLabel}>{title}</div>
      <div className={inputWrapperClass} onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)}>
        {type === 'phone' ? (
          <ReactPhoneInput
            country="ua"
            value={value}
            onChange={handlePhoneChange}
            inputClass={styles.input}
            buttonClass={styles.inputButton}
            inputStyle={{
              borderRadius: '30px',
              border: '2px solid transparent',
              background: 'var(--white-100, #FFF)',
              padding: '0px',
              fontSize: '16px',
            }}
            dropdownClass="hidden"
            disableDropdown
          />
        ) : (
          <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={styles.input} />
        )}
      </div>
      {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
    </div>
  );
};
