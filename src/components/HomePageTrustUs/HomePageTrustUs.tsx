import React from 'react';
import styles from './HomePageTrustUs.module.scss';
import { CurlyArrowType5, RatingStar } from '../icons';
import Image from 'next/image';

const HomePageTrustUs: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className="container">
        <div className={styles.titleContainer}>
          <span>БАТЬКИ НАМ</span>
          <div className={styles.titleWithGreenBg}>
            <span>ДОВІРЯЮТЬ</span>
          </div>
          <CurlyArrowType5 />
        </div>
        <div className={styles.purpleBlocksWrapper}>
          <div>
            <div className={styles.purpleContainer}>
              <div className={styles.userInfoContainer}>
                <div>
                  <Image
                    src={'/images/trustSectionPhotos/photo1.png'}
                    alt="girl"
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                </div>
                <div>
                  <span>Прізвище Ім’я</span>
                  <div>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </div>
                </div>
              </div>
              <div className={styles.userReview}>
                Прекрасна школа з унікальним підходом до навчання. Наша родина дуже рада, що обрали саме цю школу для
                нашої дитини. По-перше, навчальний процес організовано таким чином, що діти навчаються без поспіху,
                поглиблено опановуючи кожну тему. По-друге, екологічний підхід школи – це те, що привабило нас
                найбільше. Діти часто перебувають на свіжому повітрі, багато часу проводять на природі, що дуже
                позитивно впливає на їх здоров&apos;я та настрій. Рекомендуємо всім, хто шукає спокійну й гармонійну
                атмосферу для навчання!
              </div>
            </div>
          </div>
          <div>
            <div className={styles.purpleContainer}>
              <div className={styles.userInfoContainer}>
                <div>
                  <Image
                    src={'/images/trustSectionPhotos/photo2.png'}
                    alt="girl"
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                </div>
                <div>
                  <span>Прізвище Ім’я</span>
                  <div>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </div>
                </div>
              </div>
              <div className={styles.userReview}>
                Taucer – це простір, де дитина відчуває себе комфортно і впевнено. У класах невеликі групи, що дозволяє
                вчителям приділяти достатньо уваги кожному учню. Я дуже вдячна вчителям за їхню терплячість та
                індивідуальний підхід до кожної дитини. Усі заняття продумані так, щоб навчання було захопливим, і наша
                дитина завжди йде до школи з радістю.
              </div>
            </div>
            <div className={styles.purpleContainer}>
              <div className={styles.userInfoContainer}>
                <div>
                  <Image
                    src={'/images/trustSectionPhotos/photo3.png'}
                    alt="girl"
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                </div>
                <div>
                  <span>Прізвище Ім’я</span>
                  <div>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </div>
                </div>
              </div>
              <div className={styles.userReview}>
                Ця школа підходить для нашої сім’ї, яка цінує природу і здоровий спосіб життя. Сучасні методи навчання у
                поєднанні з екологічним підходом створюють унікальну атмосферу, де дитина вчиться не лише шкільним
                предметам, а й важливим життєвим цінностям. Наш син став уважнішим, більш допитливим і відповідальним
                завдяки цьому підходу.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTrustUs;
