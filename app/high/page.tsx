'use client';

import React from 'react';
import {
  FAQ,
  ListOfClubs,
  PhotoSlider,
  PriceSection,
  RequestContainer,
  ScheduleSection,
  SchoolType,
} from '@/components/common';

export default function high() {
  return (
    <div>
      <ListOfClubs />
      <ScheduleSection schoolType={SchoolType.Elementary} schedule={schedule} />
      <PriceSection prices={prices} />
      <RequestContainer />
      <PhotoSlider images={images} />
      <FAQ questions={questions} />
    </div>
  );
}

//TODO: add schedule
const schedule = [
  {
    time: '',
    title: '',
    description: '',
  },
  {
    time: '',
    title: '',
    description: '',
  },
  {
    time: '',
    title: '',
    description: '',
  },
  {
    time: '',
    title: '',
    description: '',
  },
  {
    time: '',
    title: '',
    description: '',
  },
  {
    time: '',
    title: '',
    description: '',
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
    title: 'Чи є у школи ліцензія?',
    text: 'Так, Taucer лицензована школа.',
  },
  {
    title: 'За якою навчальною програмою навчаються учні?',
    text: 'НУШ та авторські методики Taucer.',
  },
  {
    title: 'Яка кількість дітей у класах?',
    text: 'До 10 дітей в класі.',
  },
  {
    title: 'Хто навчає дітей?',
    text: 'Дипломовані спеціалісти, що постійно навчаються та вдосконалюють свої навички.',
  },
  {
    title: 'Які іноземні мови вивчають діти?',
    text: 'Англійську та другу іноземну мову на вибір. Ми пропонуємо вивчення польської, французької або німецької мов \nАнглійська мова передбачає  .. годин на тиждень, speaking club-и та дозвілля з носіями. ',
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
