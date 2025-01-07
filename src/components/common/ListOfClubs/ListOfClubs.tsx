import React from 'react';
import Image from 'next/image';
import { BannerSlider } from './BannerSlider/BannerSlider';
import styles from './ListOfClubs.module.scss';

//TODO: add all slides and update

const BannerContent: React.FC<BannerContentProps> = ({ type, imgSrc, imgAlt, labels, position, allNumber }) => (
  <div className={styles.bannerWrapper}>
    <div className={styles.bannerContentWrapper}>
      <div>
        <div className={styles.bannerCount}>
          <span>0{position}</span>
          <span>/0{allNumber}</span>
        </div>
        <h3>{type}</h3>
      </div>
      <div className={styles.bannerLabelsContainer}>
        {labels.map((label, index) => (
          <div key={index}>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
    {imgSrc && (
      <div>
        <Image src={imgSrc} alt={imgAlt || ''} loading="lazy" width={632} height={464} />
      </div>
    )}
  </div>
);

const banners = [
  <BannerContent
    key="1"
    type="Спортивні:"
    labels={['Бокс', 'Стретчинг', 'Шахи', 'Хореографія', 'Верхова їзда', 'Футбол']}
    imgSrc="/images/clubs/sport.png"
    imgAlt="sport"
    position={1}
    allNumber={3}
  />,
  <BannerContent
    key="2"
    type="Спортивні:"
    labels={['Бокс', 'Стретчинг', 'Шахи', 'Хореографія', 'Верхова їзда', 'Футбол']}
    imgSrc="/images/clubs/sport.png"
    imgAlt="sport"
    position={2}
    allNumber={3}
  />,
  <BannerContent
    key="2"
    type="Спортивні:"
    labels={['Бокс', 'Стретчинг', 'Шахи', 'Хореографія', 'Верхова їзда', 'Футбол']}
    imgSrc="/images/clubs/sport.png"
    imgAlt="sport"
    position={3}
    allNumber={3}
  />,
];

type BannerContentProps = {
  type: string;
  position: number;
  allNumber: number;
  labels: string[];
  imgSrc?: string;
  imgAlt?: string;
};

export const ListOfClubs: React.FC = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={`${styles.titleContainer} container`}>
        <div>
          <h2>Перелік гуртків:</h2>
        </div>
        <div>
          <p>
            У вартість навчання входить 15+ спортивних, творчих, психологічних, технічних гуртків та секцій. Залежно від
            особистих бажань та інтересів <span>дитина сама обирає що їй відвідувати.</span>
          </p>
        </div>
      </div>
      <div className="banner-container">
        <div className={styles.sliderWrapper}>
          <BannerSlider banners={banners} />
        </div>
      </div>
    </div>
  );
};
