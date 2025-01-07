'use client';

import React from 'react';
import ElementaryGradesContainer from '@/components/ElementaryGradesContainer/ElementaryGradesContainer';
import { RequestContainerWithBG } from '@/components/common';

export default function elementaryGrades() {
  return (
    <div>
      <ElementaryGradesContainer />
      <RequestContainerWithBG />
    </div>
  );
}
