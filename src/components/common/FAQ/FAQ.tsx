import React from 'react';
import { CurlyArrowType7 } from '@/components/icons';
import CustomAccordion from '@/components/common/CustomAccordion/CustomAccordion';
import styles from './FAQ.module.scss';

type QuestionType = {
  title: string;
  text: string;
};

type Props = {
  questions: QuestionType[];
};

export const FAQ: React.FC<Props> = ({ questions }) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className="container">
        <div className={styles.titleContainer}>
          <span>Залишились</span>
          <div className={styles.titleWithGreenBg}>
            <span>запитання?</span>
          </div>
          <CurlyArrowType7 />
        </div>
        <div className={styles.questionsContainer}>
          {questions.map((question, index) => (
            <div key={index}>
              <CustomAccordion title={question.title} text={question.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
