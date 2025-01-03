import React from 'react';
import Link from 'next/link';
import SecondaryPurpleButton from '../common/SecondaryPurpleButton/SecondaryPurpleButton';
import { Routes } from '@/config/routes';
import styles from './HomePagePhilosophySection.module.scss';
import { PaperClip } from '../icons';

const HomePagePhilosophySection: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className="container">
        <div className={styles.infoContainer}>
          <div className={styles.titleContainer}>
            <p>наша</p>
            <div>
              <span>Філософія</span>
            </div>
          </div>
          <div className={styles.ctaContainer}>
            <p>
              Основою нашої концепції є <br />
              філософія slow living та її похідна – <br />
              <span>slow education</span>, що означає <br />
              <span>навчання в спокійному ритмі.</span> <br />
              Цей підхід став відповіддю <br />
              на перевантаження шкільної програми, орієнтованої <br />
              на результат, а не на потреби дитини.
            </p>
            <Link href={Routes.About} passHref>
              <SecondaryPurpleButton title="Дізнатися більше" />
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <div className={styles.greenBanner}>
              <p>
                Наша команда працює над побудовою унікального сучасного простору, де кожна дитина проявляє свою
                індивідуальність, забезпечуючи психоемоційний комфорт для розкриття її потенціалу.
              </p>
              <PaperClip />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePhilosophySection;
