'use client';

import HomePageHowToFindUs from '@/components/HomePageHowToFindUs/HomePageHowToFindUs';
import HomePageOurGoal from '@/components/HomePageOurGoal/HomePageOurGoal';
import HomePagePreview from '@/components/HomePagePreview/HomePagePreview';
import HomePageRequestContainer from '@/components/HomePageRequestContainer/HomePageRequestContainer';
import MainIntro from '@/components/MainIntro/MainIntro';

export default function Home() {
  return (
    <div>
      <MainIntro />
      <HomePagePreview />
      <HomePageHowToFindUs />
      <HomePageOurGoal />
      <HomePageRequestContainer />
    </div>
  );
}
