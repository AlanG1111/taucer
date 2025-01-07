import React from 'react';
import { CurlyArrowType10 } from '@/components/icons';
import SmallHoles from './icons/SmallHoles';
import SmallSpring from './icons/SmallSpring';
import styles from './ScheduleSection.module.scss';

type ScheduleType = {
  time: string;
  title: string;
  description?: string;
};

export enum SchoolType {
  Elementary = 'elementary',
  High = 'high',
}

type Props = {
  schoolType: SchoolType;
  schedule: ScheduleType[];
};

export const ScheduleSection: React.FC<Props> = ({ schoolType, schedule }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className="container">
        <div className={styles.titleContainer}>
          <div>
            <span>Розклад дня</span>
            <CurlyArrowType10 />
          </div>
        </div>
        <div className={`${styles.scheduleWrapper} ${schoolType === SchoolType.High ? styles.wideWrapper : ''}`}>
          <SmallHoles styles={styles.holes} schoolType={schoolType} />
          <SmallSpring styles={styles.spring} schoolType={schoolType} />
          {schedule.map((item, index) => (
            <div key={index} className={styles.scheduleContainer}>
              <div className={styles.timeContainer}>
                <span>{item.time}</span>
              </div>
              <div className={styles.infoContainer}>
                <span>{item.title}</span>
                {item.description && <span className={styles.description}>{item.description}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
