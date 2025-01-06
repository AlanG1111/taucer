import React from 'react';
import { CurlyArrowType7 } from '@/components/icons';
import CustomAccordion from '@/components/common/CustomAccordion/CustomAccordion';
import styles from './PreSchoolQuestions.module.scss';

export const PreSchoolQuestions: React.FC = () => {
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
          {FAQ.map((question, index) => (
            <div key={index}>
              <CustomAccordion title={question.title} text={question.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQ = [
  {
    title: 'З якого віку дитина може піти до 0 класу?',
    text: 'Вступ можливий для дітей з 4 до 6 років.',
  },
  {
    title: 'Яка кількість дітей у групі?',
    text: 'До 10 дітей, з якими перебувають вчитель та помічник. Є супровід психолога й логопеда. Гуртки та секції проводять інші педагоги.',
  },
  {
    title: 'Дитина буде готова до школи без додаткових занять?',
    text: 'Так, програма націлена на комплексну підготовку до школи. Дитина здобуде навички читання.',
  },
  {
    title: 'За якою програмою навчаються діти?',
    text: 'За програмою “Мr. leader” та авторською читацькою програмою Вікторії В.',
  },
  {
    title: 'Діти вивчають іноземні мови?',
    text: 'Так, ми проводимо ігрові заняття з англійської мови разом із носіями. Також у батьків є можливість обрати другу  іноземну мову для вивчення (польська / французька / німецька).',
  },
  {
    title: 'Чи безпечно у вас?',
    text: 'Ми маємо цілодобову охорону та постійне відеоспостереження. Заїзд на територію Taucer можливий лише з дозволу адміністрації та після проходження поста охорони.',
  },
  {
    title: 'Які дії під час повітряної тривоги?',
    text: 'Під час тривоги діти, разом із вчителями, перебувають в укритті, яке обладнане всім необхідним для комфортного продовження навчального процесу, дозвілля та ігор.',
  },
  {
    title: 'Яке харчування?',
    text: 'Учні харчуються 5 разів на день стравами, що готують наші професійні кухарі. Батьки самостійно обирають раціон дитини на день у застосунку School Today.  Якщо в дитини є особливості в харчуванні, ми коригуємо меню відповідно до індивідуальних потреб ',
  },
];
