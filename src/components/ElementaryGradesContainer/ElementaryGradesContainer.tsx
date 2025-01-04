import React from 'react';
import { Routes } from '@/config/routes';
import PreviewLink from './PreviewLink/PreviewLink';
import { CurlyArrowType6, Snake } from '../icons';
import styles from './ElementaryGradesContainer.module.scss';

const ElementaryGradesContainer: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.titleContainer}>
            <span>Початкова школа</span>
            <div className={styles.titleWithBg}>
              <span>з 4 років</span>
            </div>
          </div>
          <div>
            <div className={styles.chooseTitleContainer}>
              <span>Оберіть потрібний клас:</span>
              <CurlyArrowType6 />
            </div>
            <div className={styles.previewsLinkContainer}>
              <PreviewLink
                link={Routes.Preschool}
                label="Нульовий клас"
                bgImage="/images/elementaryGrades/previewBg1.png"
              >
                <span style={{ maxWidth: '250px', display: 'block' }}>Підготовчий (0) клас з 4 років</span>
              </PreviewLink>
              <PreviewLink
                link={Routes.ElementarySchool}
                label="1-4 класи"
                bgImage="/images/elementaryGrades/previewBg2.png"
              >
                <span style={{ maxWidth: '250px', display: 'block' }}>Початкові 1-4 класи</span>
              </PreviewLink>
            </div>
          </div>
        </div>
        <div className={styles.purpleBannerContainer}>
          <div className={styles.glassContainer}>
            <p>Початкова школа</p>
            <Snake />
            <div className={styles.underlinedText}>
              <span>0 клас</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                <path
                  d="M13.0133 6.26932C20.4779 6.43827 27.9403 6.68231 35.4113 6.76151C39.9004 6.80911 52.9608 7.45031 48.8664 6.40775C46.5527 5.8186 43.2242 5.72827 40.739 5.43874C33.8206 4.63276 26.731 4.25078 19.7544 3.63916C19.7544 3.63916 -4.65751 2.43974 2.22199 1.85495C4.08362 1.69671 7.03321 1.68577 7.03321 1.68577L61 1"
                  stroke="#6A51A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.underlinedText}>
              <span>1-4 клас</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="8" viewBox="0 0 72 8" fill="none">
                <path
                  d="M71 4.02342C56.5231 3.20044 42.1706 1.66591 27.6672 1.32441C19.3305 1.12811 -5.60076 0.553479 2.65144 1.66178C16.2154 3.48348 30.234 3.42494 43.8908 4.64998C49.1823 5.12463 54.4312 5.76086 59.6958 6.43326C61.7218 6.69203 63.3041 7.12929 60.0621 6.96342C45.5929 6.22314 31.2195 6.09328 16.75 5.29772"
                  stroke="#6A51A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <p>
              TAUCER — простір, де діти не <br /> просто навчаються та отримують фундаментальні знання,
              <br /> а проживають життя, розвиваються у гармонії з собою та навколишнім світом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementaryGradesContainer;
