'use client';

import React from 'react';
import {
  PreSchoolPageMemories,
  PreSchoolQuestions,
  PreSchoolRequestContainer,
  PreschoolIntro,
} from '@/components/PreSchoolComponents/index';

export default function preschool() {
  return (
    <div>
      <PreschoolIntro />
      <PreSchoolRequestContainer />
      <PreSchoolPageMemories />
      <PreSchoolQuestions />
    </div>
  );
}
