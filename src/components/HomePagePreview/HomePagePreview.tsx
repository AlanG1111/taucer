import React from 'react';
import styles from './HomePagePreview.module.scss';
import { CurlyArrowType3, LogoGreenBG } from '../icons';
import Image from 'next/image';
import PreviewLink from './PreviewLink/PreviewLink';
import { Routes } from '@/config/routes';

const HomePagePreview: React.FC = () => {
  return (
    <div className={styles.previewWrapper}>
      <div className={styles.previewTitleContainer}>
        <div>
          <div>
            <LogoGreenBG />
          </div>
          <div>
            <span>Taucer - місце, де діти</span>
          </div>
        </div>
        <div>
          <span>проживають</span>
          <div>
            <Image
              src={'/images/homePagePreview/homePageTitleImageChildren.png'}
              width={191}
              height={64}
              alt="children"
              loading="lazy"
            />
          </div>
          <span>життя</span>
        </div>
      </div>
      <div className={styles.previewContentContainer}>
        <div className={styles.firstSection}>
          <div className={styles.firstSectionTitle}>
            <div>
              <p>
                Шкільне містечко Taucer знаходиться в мальовничій локації біля екологічно-чистої заповідної зони та
                складається з:
              </p>
              <CurlyArrowType3 />
            </div>
          </div>
          <div className={styles.firstLink}>
            <div>
              <div className={styles.number}>1</div>
              <PreviewLink
                style={{ maxWidth: '524px' }}
                link={Routes.ElementarySchool}
                label="0-4 клас"
                bgImage="/images/homePagePreview/previewBg1.png"
              >
                <span style={{ maxWidth: '300px', display: 'block' }}>
                  Початкова школа для дітей віком від 4 років — 0-4 клас
                </span>
              </PreviewLink>
            </div>
          </div>
        </div>
        <div className={styles.secondSection}>
          <div>
            <div>
              <div className={styles.number}>2</div>
              <PreviewLink
                link={Routes.HighSchool}
                label="Школа 5-11 клас"
                bgImage="/images/homePagePreview/previewBg2.png"
              >
                <span>Школа 5-11 клас</span>
              </PreviewLink>
            </div>
          </div>
          <div>
            <div>
              <div className={styles.number}>3</div>
              <PreviewLink link={Routes.Preschool} label="Табір" bgImage="/images/homePagePreview/previewBg3.png">
                <span style={{ maxWidth: '210px', display: 'block' }}>Канікулярний табір та табір вихідного дня</span>
              </PreviewLink>
            </div>
          </div>
          <div>
            <div>
              <div className={styles.number}>4</div>
              <PreviewLink link={Routes.HorseClub} label="Кінний клуб" bgImage="/images/homePagePreview/previewBg4.png">
                <span>Кінний клуб</span>
              </PreviewLink>
            </div>
          </div>
        </div>
        <div>content</div>
      </div>
    </div>
  );
};

export default HomePagePreview;
