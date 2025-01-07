'use client';

import { PriceSection, RequestContainer } from '@/components/common';
import React from 'react';

export default function boarding() {
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
  return (
    <div>
      <PriceSection prices={prices} />
      <RequestContainer />
      memories <br />
      faq
    </div>
  );
}
