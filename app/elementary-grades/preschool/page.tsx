'use client';

import React from 'react';
import {
  PreSchoolPageMemories,
  PreSchoolQuestions,
  PreSchoolRequestContainer,
  PreSchoolIntro,
  PreSchoolPreview,
} from '@/components/PreSchoolComponents/index';

export default function preschool() {
  return (
    <div>
      <PreSchoolIntro />
      <PreSchoolPreview />
      <PreSchoolRequestContainer />
      <PreSchoolPageMemories />
      <PreSchoolQuestions />
    </div>
  );
}
