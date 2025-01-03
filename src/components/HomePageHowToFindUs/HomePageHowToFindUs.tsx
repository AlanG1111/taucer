import React from 'react';
import styles from './HomePageHowToFindUs.module.scss';
import { Point, Transfer } from '../icons';

const HomePageHowToFindUs: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={`${styles.bannerWrapper} container`}>
        <div className={styles.bannerContainer}>
          <div className={styles.purpleBanner}>
            <div>
              <p className={styles.bannerTitle}>
                Taucer розташований на 4,5 га прекрасної озелененої території посеред соснового лісу, безкраїх левад та
                кришталевих озер.
              </p>
            </div>
            <div>
              <p>
                Це дарує дітям можливість досліджувати, гратися, вчитися та отримувати солодке відчуття свободи без
                хвилювання за чистоту одягу, адже в нас все створено природою для людини.
              </p>
              <p style={{ marginTop: '20px' }}>
                Дрібні калабані, калюжі після дощу, прохолодна ранкова роса на похилій травинці, дзвінкі бджоли над
                квітами та ніжний аромат від цвітіння дикої акації - все те, що спостерігають та відчувають наші учні
                щодня під час навчання в Taucer.
              </p>
            </div>
          </div>
          <div className={styles.howToFindContainer}>
            <span>Як нас знайти?</span>
            <div className={styles.greenBanner}>
              <div>
                <p className={styles.bannerTitle}>
                  ми розуміємо, що «найкращою» школою завжди є та, де дитина буде щасливою та наповненою.
                </p>
              </div>
              <div className={styles.howToFindAddress}>
                <div>
                  <Point />
                  <span className={styles.underlinedText}>Горбовичі, вул. Заповідна, 1, Kиїв, Україна, 08162</span>
                </div>
                <div>
                  <Transfer />
                  <span>20хв від метро,  трансфер з Києва</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHowToFindUs;
