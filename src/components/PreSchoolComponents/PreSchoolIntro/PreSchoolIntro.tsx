import React from 'react';
import styles from './PreSchoolIntro.module.scss';
import { handleScrollToForm } from '@/helpers/lib/handleScrollToForm';
import PrimaryPurpleButton from '@/components/common/PrimaryPurpleButton/PrimaryPurpleButton';
import { CurlyArrowType8 } from '@/components/icons/CurlyArrows';

export const PreSchoolIntro: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className="banner-container">
        <div className={styles.imageContainer}>
          <div className={styles.titleContainer}>
            <span>Групи</span>
            <div className={styles.titleWithGreenBg}>
              <span>до 10 дітей</span>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.introTitleContainer}>
            <div>
              <span>Підготовчий </span>
              <div className={styles.titleWithGreenBg}>
                <span>нульовий клас</span>
              </div>
              <p>для дітлахів від 4 років</p>
            </div>
            <div className={styles.ctaContainer}>
              <CurlyArrowType8 />
              <PrimaryPurpleButton title="Залишити заявку" onClick={() => handleScrollToForm('form-container')} />
            </div>
          </div>
          <div className={styles.middleBannersContainer}>
            <div>
              <div className={styles.darkPurpleBanner}>
                <span className={styles.bannerSubTitle}>Уроки</span>
                <span className={styles.bannerTitle}>з носіями</span>
                <span className={styles.bannerSubTitle}>іноземних мов</span>
              </div>
              <div className={styles.greenBanner}>
                <span className={styles.bannerSubTitle}>Обладнане</span>
                <span className={styles.bannerTitle}>укриття</span>
              </div>
            </div>
            <div>
              <div className={styles.lightPurpleBanner}>
                <span className={styles.bannerTitle}>Велика територія</span>
                <span className={styles.bannerSubTitle}>для ігор та прогулянок</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.titleContainer}>
            <div className={`${styles.titleWithGreenBg} ${styles.reverseRotated}`}>
              <span>Мінігород</span>
            </div>
            <span>для дітлахів</span>
          </div>
        </div>
      </div>
    </div>
  );
};
