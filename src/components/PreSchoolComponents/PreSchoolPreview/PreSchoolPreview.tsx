import React from 'react';
import styles from './PreSchoolPreview.module.scss';
import { CurlyArrowType9 } from '@/components/icons/CurlyArrows';
import { Clinch } from '@/components/icons';

export const PreSchoolPreview: React.FC = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <p>
            Підготовчий клас – <span className={styles.titleWithGreenBg}>м’яка</span>
          </p>
          <p>психологічна та академічна</p>
          <p className={`${styles.titleWithGreenBg} ${styles.rotatedTitle}`}>підготовка до школи</p>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            <div className={styles.description}>
              <p>
                Навчання відбувається на основі інтегрованої програми <span>&quot;Mr. Leader&quot;</span>, що
                <span> затверджена Міністерством освіти і науки.</span>
              </p>
            </div>
            <div className={styles.purpleBoxesWrapper}>
              <div>
                <div className={`${styles.lightPurpleBox} ${styles.box} ${styles.firstBox}`}>
                  <div>
                    <span>Вивчаємо</span>
                  </div>
                </div>
                <div style={{ paddingTop: '24px' }}>
                  <CurlyArrowType9 />
                </div>
              </div>
              <div>
                <div style={{ paddingTop: '18px' }}>
                  <CurlyArrowType9 />
                </div>
                <div className={`${styles.darkPurpleBox} ${styles.box}`}>
                  <div>
                    <span>Закріплюємо</span>
                    <span>граючись</span>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${styles.lightPurpleBox} ${styles.box} ${styles.thirdBox}`}>
                  <div>
                    <span>Використовуємо</span>
                    <span>у житті</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.greenBanner}>
              <p>
                Головною метою цієї програми є створення оптимальних умов для всебічного розвитку <br />
                та цілісного становлення особистості в різних аспектах, таких як: фізична, інтелектуальна, емоційна та
                духовна сфери.
              </p>
              <Clinch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
