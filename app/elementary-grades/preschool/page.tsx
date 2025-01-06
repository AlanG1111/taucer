'use client';

import React from 'react';
import {
  PreSchoolPageMemories,
  PreSchoolQuestions,
  PreSchoolRequestContainer,
  PreSchoolIntro,
} from '@/components/PreSchoolComponents/index';

export default function preschool() {
  return (
    <div>
      <PreSchoolIntro />
      <PreSchoolRequestContainer />
      <PreSchoolPageMemories />
      <PreSchoolQuestions />
    </div>
  );
}
