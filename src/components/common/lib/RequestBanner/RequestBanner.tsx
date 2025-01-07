'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CurlyArrowPurple, PurplePencil, PurpleQuestionMark } from '@/components/icons';
import { CustomInput, PrimaryPurpleButton } from '..';
import styles from './requestBanner.module.scss';

export const RequestBanner: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
  });

  const validateFields = () => {
    const errors = {
      name: '',
      phone: '',
    };

    if (!formData.name.trim()) {
      errors.name = 'Поле є обов`язковим для заповнення.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Поле є обов`язковим для заповнення.';
    } else if (!/^\+380 \d{2} \d{3} \d{2} \d{2}$/.test(formData.phone)) {
      errors.phone = 'Введіть коректний номер телефону';
    }

    setFormErrors(errors);
    return !errors.name && !errors.phone;
  };

  const handleInputChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    let formattedValue = event.target.value;

    // Handle phone number formatting
    if (field === 'phone') {
      // Remove all non-digit characters
      formattedValue = formattedValue.replace(/\D/g, '');

      // Limit to 12 digits (+380 XX XXX XX XX)
      if (formattedValue.length > 12) {
        formattedValue = formattedValue.slice(0, 12);
      }

      // Format phone number with spaces and country code (+380)
      if (formattedValue.length <= 3) {
        formattedValue = `+380${formattedValue.slice(3)}`;
      } else {
        formattedValue = `+380 ${formattedValue.slice(3, 5)} ${formattedValue.slice(5, 8)} ${formattedValue.slice(8, 10)} ${formattedValue.slice(10, 12)}`;
      }
    }

    // Update the value of the corresponding field
    setFormData({ ...formData, [field]: formattedValue });

    // Clear the error when the user starts typing
    setFormErrors({ ...formErrors, [field]: '' });
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className={`${styles.bannerWrapper} banner-container`} id="form-container">
      <div className={styles.imageContainer}>
        <PurpleQuestionMark />
        <PurplePencil />
        <Image
          className={styles.boyImg}
          src={'/images/requestBanner/boyImg.png'}
          width={580}
          height={558}
          loading="lazy"
          alt="boy"
        />
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.formTitleContainer}>
          <span>Дізнайтесь більше або запишитесь на безкоштовну екскурсію!</span>
          <CurlyArrowPurple />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.inputsContainer}>
            <CustomInput
              title="Ім’я"
              placeholder="Введіть Ім’я"
              type="text"
              value={formData.name}
              onChange={handleInputChange('name')}
              errorMsg={formErrors.name}
            />
            <CustomInput
              title="Номер телефону"
              placeholder="Введіть номер телефону"
              type="phone"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              errorMsg={formErrors.phone}
            />
          </div>
          <PrimaryPurpleButton title="Залишити заявку" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
