import React from 'react';
import Link from 'next/link';
import { Routes } from '@/config/routes';
import SecondaryPurpleButton from '../common/SecondaryPurpleButton/SecondaryPurpleButton';
import PrimaryGreenButton from '../common/PrimaryGreenButton/PrimaryGreenButton';
import { ArrowWhiteTriangle, CurlyArrowType1, CurlyArrowType2 } from '../icons';
import { handleScrollToForm } from '@/helpers/lib/handleScrollToForm';
import styles from './mainIntro.module.scss';

const MainIntro: React.FC = () => {
  const directions = [
    { route: Routes.Preschool, title: 'Початкова школа від 4 років' },
    { route: Routes.HighSchool, title: 'Школа 5 - 11 клас' },
    { route: Routes.Preschool, title: 'Табір' },
    { route: Routes.Boarding, title: 'Бординг' },
    { route: Routes.OnlineSchool, title: 'Оnline школа' },
  ];

  return (
    <section className={styles.introWrapper}>
      <div className={`${styles.introBackground} container`}>
        {/* Promo Section */}
        <div className={styles.promoSection}>
          <div>
            <div>
              <div className={styles.title}>
                <span>TAUCER</span>
              </div>
              <div className={styles.description}>
                <h1>— шкільне містечко в екологічно-чистій</h1>
                <div className={styles.purpleLabel}>
                  <span>заповідній зоні</span>
                </div>
              </div>
            </div>
            <div className={styles.requestContainer}>
              <PrimaryGreenButton
                title="Залишити заявку"
                onClick={() => handleScrollToForm('form-container')}
                reversedColor
              />
              <CurlyArrowType2 />
            </div>
          </div>
          <div className={styles.videoAboutUsContainer}>
            <div className={styles.arrowContainer}>
              <ArrowWhiteTriangle />
            </div>
            <span>Відео про нас</span>
          </div>
        </div>

        {/* Educational Directions Section */}
        <div className={styles.educDirectionsContainer}>
          <div className={styles.titleContainer}>
            <span>Навчальні напрямки для кожного</span>
            <CurlyArrowType1 />
          </div>
          <div className={styles.directionsLinksContainer}>
            {directions.map(({ route, title }) => (
              <Link href={route} key={title} passHref>
                <SecondaryPurpleButton title={title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainIntro;
