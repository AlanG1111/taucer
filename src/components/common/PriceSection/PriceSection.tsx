import React from 'react';
import styles from './PriceSection.module.scss';
import { CircleType1, CircleType2, MainLogoRotated } from '@/components/icons';

type PricesType = {
  month: {
    price: number;
    crossedPrice: number;
    entranceFee: number;
  };
  year: {
    price: number;
    crossedPrice: number;
    entranceFee: number;
  };
};

type Props = {
  prices: PricesType;
};

const Underline = React.memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="514" height="2" viewBox="0 0 514 2" fill="none">
    <path d="M1 1H513" stroke="#D4CFDD" strokeWidth="2" strokeLinecap="round" />
  </svg>
));

export const PriceSection: React.FC<Props> = ({ prices }) => {
  const { month, year } = prices;
  return (
    <div className={styles.sectionContainer}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h2>Вартість навчання</h2>
        </div>
        <div className={styles.pricesContainer}>
          <div className={styles.priceBox}>
            <div className={styles.boxTitle}>
              <span>
                Вартість
                <div>
                  <div className={styles.circleWrapper} style={{ left: '100px' }}>
                    <CircleType1 />
                  </div>
                  <span>на місяць</span>
                </div>
              </span>
            </div>
            <div className={styles.prices}>
              <span>{month.price} грн</span>
              <span>{month.crossedPrice} грн</span>
            </div>
            <Underline />
            <div className={styles.entranceFeeContainer}>
              <span>Вступний внесок</span>
              <span>{month.entranceFee} грн</span>
            </div>
          </div>
          <div className={styles.priceBox}>
            <div className={styles.logoWrapper}>
              <MainLogoRotated />
            </div>
            <div className={styles.boxTitle}>
              <span>
                Вартість
                <div>
                  <div className={styles.circleWrapper}>
                    <CircleType2 />
                  </div>
                  <span>за рік</span>
                </div>
              </span>
            </div>
            <div className={styles.prices}>
              <span>{year.price} грн</span>
              <span>{year.crossedPrice} грн</span>
            </div>
            <Underline />
            <div className={styles.entranceFeeContainer}>
              <span>Вступний внесок</span>
              <span>{year.entranceFee} грн</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
