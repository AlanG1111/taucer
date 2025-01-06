'use client';

import { RequestContainerWithBG } from '@/components/common/RequestContainerWithBG/RequestContainerWithBG';
import {
  HomePagePreview,
  HomePageMemories,
  HomePageTrustUs,
  HomePagePhilosophySection,
  MainIntro,
  HomePageHowToFindUs,
  HomePageOurGoal,
  HomePageExcursionBanner,
} from '@/components/HomePageComponents';

export default function Home() {
  return (
    <div>
      <MainIntro />
      <HomePagePreview />
      <HomePageHowToFindUs />
      <HomePageOurGoal />
      <HomePageExcursionBanner />
      <HomePagePhilosophySection />
      <HomePageMemories />
      <HomePageTrustUs />
      <RequestContainerWithBG />
    </div>
  );
}
