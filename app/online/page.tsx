'use client';

import React from 'react';
import { FAQ, PriceSection, RequestContainer } from '@/components/common';

export default function online() {
  return (
    <div>
      <PriceSection prices={prices} />
      <RequestContainer />
      memories <br />
      <FAQ questions={questions} />
    </div>
  );
}

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
    title: 'Чи видаєте ви атестат?',
    text: 'По закінченню навчання дитина отримує документ державного зразка.',
  },
  {
    title: 'Який графік онлайн-занять?',
    text: 'Заняття проходять у зручний для дитини час та за домовленістю \nз батьками.',
  },
  //TODO: add answer
  {
    title: 'Як проходить зріз знань?',
    text: 'Немає відповіді',
  },
  //TODO: add answer
  {
    title: 'Чи є можливість обирати вчителя для онлайн-уроків? ',
    text: 'Немає відповіді',
  },
];
