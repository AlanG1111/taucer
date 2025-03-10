'use client';

import React from 'react';
import { FAQ, PhotoSlider, PriceSection, RequestContainer } from '@/components/common';

export default function boarding() {
  return (
    <div>
      <PriceSection prices={prices} />
      <RequestContainer />
      <PhotoSlider images={images} />
      <FAQ questions={questions} />
    </div>
  );
}

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
  { title: 'Для якого віку даний формат?', text: 'Бординг адаптований під учнів 8-го класу.' },
  {
    title: 'Хтось перебуває із дітьми вночі?',
    text: 'У пансіонаті 24/7 є відповідальний дорослий, який слідкує за порядком, допомагає в разі потреби та постійно перебуває на зв’язку з батьками.',
  },
  {
    title: 'Яке харчування?',
    text: 'Діти харчуються 6 разів на день. Ми розробили поживний, смачний \nта корисний раціон для учнів що проживають. Також діти мають змогу самостійно приготувати снеки/чай на мінікухні в пансіонаті.',
  },
  {
    title: 'Чи безпечно у вас?',
    text: 'Так, в нас є цілодобова охорона та постійне відеоспостереження. \nА також власне обладнане укриття поряд із пансіонатом.',
  },
  { title: 'Чи є пральня?', text: 'Так. Учні мають змогу попрати речі в будь-який зручний час.' },
  {
    title: 'Чим займаються учні у вільний час після уроків?',
    text: 'Після уроків діти відвідують спортивні та творчі студії, мають вільний час для прогулянок та відпочинку.',
  },
  {
    title: 'Як вирішуєте конфлікти між учнями?',
    text: 'У нашій школі є психолог, який проводить із дітьми групові \nта індивідуальні бесіди-зустрічі, вирішує конфліктні ситуації.',
  },
  //TODO: add answer
  { title: 'Яке дозвілля дітей на вихідних?', text: 'Немає відповіді' },
  {
    title: 'Дитина захворіла, а батьки далеко – які дії?',
    text: 'У школі завжди перебуває медичний працівник. Якщо під час проведення температурного чи іншого скринінгу будуть помічені будь-які зміни \nзi здоров`ям дитини ми повідомляємо про це батьків. Надаємо медичний супровід учням до моменту приїзду родичів або повного одужання.',
  },
  {
    title: 'Чи передбачена програма дозвілля під час канікул?',
    text: 'У школі під час канікул функціонує табір. За бажанням діти можуть \nабо поїхати додому, або залишитися на відпочинок.',
  },
];
