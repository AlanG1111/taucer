'use client';

import React from 'react';
import ElementaryGradesContainer from '@/components/ElementaryGradesContainer/ElementaryGradesContainer';
import { RequestContainerWithBG } from '@/components/common/RequestContainerWithBG/RequestContainerWithBG';

export default function elementaryGrades() {
  return (
    <div>
      <ElementaryGradesContainer />
      <RequestContainerWithBG />
    </div>
  );
}
