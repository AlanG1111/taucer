import React from 'react';
import styles from './HomePageOurGoal.module.scss';
import { MainLogoRotated } from '../icons';

const HomePageOurGoal: React.FC = () => {
  return (
    <div className={`${styles.sectionContainer} container`}>
      <div className={styles.titleContainer}>
        <p>Наша ціль — це не лише надати академічні </p>
        <p>
          знання, а <span>навчити дітей любити життя</span>
        </p>
        <p>відчувати його, насолоджуватися кожною </p>
        <p>
          миттю,<span className={styles.rotatedText}>як у школі так і поза її межами</span>
        </p>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}></div>
        <div className={styles.contentContainer}>
          <div className={styles.contentTitle}>У нас діти:</div>
          <div className={styles.labelsContainer}>
            <MainLogoRotated />
            <div>
              <span>Рухаються</span>
              <p>
                ...під час щоденних прогулянок Open air по сосновому лісу, командних та спортивних ігор на спеціально
                обладнаних локаціях: поєднуємо природні умови із сучасними майданчиками.
              </p>
            </div>
            <div>
              <span>Наповнюються</span>
              <p>...силою та енергією від природи, знаннями та вміннями від навчання.</p>
            </div>
            <div>
              <span>Піклуються</span>
              <p>
                ...та доглядають за тваринами, відвідують заняття з верхової їзди, що розвиває емпатію, вміння
                співпереживати, розуміти настрій та бажання.
              </p>
            </div>
            <div>
              <span>Відчувають</span>
              <p>...cебе вільними та впевненими — адже у нас кожен має свободу вибору, дій та висловлювань.</p>
            </div>
            <div>
              <span>Насолоджуються</span>
              <p>
                ...здоровою та корисною їжею: різноманітними, збалансованими та улюбленими стравами, які приготовані на
                власній професійній кухні нашими кухарами з турботою та любов&apos;ю.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageOurGoal;
