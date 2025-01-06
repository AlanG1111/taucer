'use client';

import React from 'react';
import { PreSchoolPageMemories, PreSchoolQuestions, PreschoolIntro } from '@/components/PreSchoolComponents/index';

export default function preschool() {
  return (
    <div>
      <PreschoolIntro />
      <PreSchoolPageMemories />
      <PreSchoolQuestions />
    </div>
  );
}
