'use client';

import React from 'react';
import { PreSchoolIntro, PreSchoolPreview } from '@/components/PreSchoolComponents/index';
import {
  PriceSection,
  RequestContainer,
  FAQ,
  PhotoSlider,
  ListOfClubs,
  ScheduleSection,
  SchoolType,
} from '@/components/common';

export default function preschool() {
  return (
    <div>
      <PreSchoolIntro />
      <PreSchoolPreview />
      <ListOfClubs />
      <ScheduleSection schoolType={SchoolType.Elementary} schedule={schedule} />
      <PriceSection prices={prices} />
      <RequestContainer />
      <PhotoSlider images={images} />
      <FAQ questions={questions} />
    </div>
  );
}

const schedule = [
  {
    time: '09:00 - 10:00',
    title: 'Зустріч дітей',
    description: 'Ранкове коло та сніданок.',
  },
  {
    time: '10:00 - 13:00',
    title: 'Інтегровані заняття',
    description: 'Заняття за програмою, прогулянка, перший перекус, вивчення іноземної мови.',
  },
  {
    time: '13:30 - 14:00',
    title: 'Обід',
  },
  {
    time: '14:00 - 15:30',
    title: 'Відпочинок та прогулянка',
  },
  {
    time: '15:30 - 17:30',
    title: 'Розвиваючі заняття на вибір',
    description:
      'Дитяче програмування, лего-конструювання, хореографія, гімнастика, творча студія, футбол, спортивні ігри, настільний теніс, верхова їзда.',
  },
  {
    time: '17:30 - 18:00',
    title: 'Вечеря та прогулянка',
  },
];

const images = [
  'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];
//TODO: replace with real images

const prices = {
  month: {
    price: 14500,
    crossedPrice: 16000,
    entranceFee: 2000,
  },
  year: {
    price: 14500,
    crossedPrice: 160000,
    entranceFee: 2000,
  },
};

const questions = [
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
