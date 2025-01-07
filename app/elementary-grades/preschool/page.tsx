'use client';

import React from 'react';
import {
  PreSchoolPageMemories,
  PreSchoolQuestions,
  PreSchoolRequestContainer,
  PreSchoolIntro,
  PreSchoolPreview,
} from '@/components/PreSchoolComponents/index';
import { PriceSection } from '@/components/common';

export default function preschool() {
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
      <PreSchoolIntro />
      <PreSchoolPreview />
      <PriceSection prices={prices} />
      <PreSchoolRequestContainer />
      <PreSchoolPageMemories />
      <PreSchoolQuestions />
    </div>
  );
}
