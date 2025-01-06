import React from 'react';
import Image from 'next/image';
import { handleScrollToForm } from '@/helpers/lib/handleScrollToForm';
import PrimaryGreenButton from '../../common/PrimaryGreenButton/PrimaryGreenButton';
import { CurlyArrowPurple, GreenClod, GreenStar } from '../../icons';
import styles from './HomePageExcursionBanner.module.scss';

export const HomePageExcursionBanner: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className="container">
        <div className={styles.bannerWrapper}>
          <div className={styles.formWrapper}>
            <div className={styles.formTitleContainer}>
              містечко Taucer — місце, куди діти радо приходять щодня здобувати нові знання та отримувати насолоду від
              життя.
            </div>
            <div className={styles.ctaContainer}>
              <div>
                <span>Ви можете не вірити нам на слово, а прийти і побачити все наживо!</span>
                <CurlyArrowPurple stroke="#97E334" />
              </div>
              {/* CTA */}
              <PrimaryGreenButton
                title="Записатися на безкоштовну екскурсію"
                onClick={() => handleScrollToForm('form-container')}
              />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <GreenClod />
            <GreenStar />
            <Image
              className={styles.paperImg}
              src={'/images/excursionBanner/pieceOfPaper.png'}
              width={500}
              height={220}
              loading="lazy"
              alt="paper"
            />
            <Image
              className={styles.girlImg}
              src={'/images/excursionBanner/girlImg.png'}
              width={526}
              height={618}
              loading="lazy"
              alt="girl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
